const templates = require('../views/index');
require('marko/node-require').install();
let { PythonShell } = require('python-shell')

class RotasControlador {
    static rotas() {
        return {
            graph: '/graph',
            home: '/'
        };
    }

    home() {
        return function (req, resp) {
            return resp.marko(templates.home);
        };
    }

    graph() {
        return function (req, resp) {

            let dataToSend = req.body.story.trim();
            let escolha = req.body.fooby[0][0];
            if (escolha == "espaco") {
                dataToSend = dataToSend.split(" ");
            } else{
                //dataToSend = String(dataToSend).join(" ");
                if (escolha == "virgula") {
                    dataToSend = dataToSend.split(",");
                }
                else {
                    dataToSend = dataToSend.split(";");
                }
            }
            let aux = [];
            dataToSend.forEach(element => {
                element = element.replace(/,/,'.');//tratando floats com virgula.
                aux.push(element);
            });
            dataToSend = aux;
            console.log(dataToSend);
            let pyshell = new PythonShell('calculoPk.py');

            let data = [];
            let x = [];
            pyshell.send(JSON.stringify(dataToSend));
            pyshell.on('message', function (message) {
                // received a message sent from the Python script (a simple "print" statement)
                message = JSON.parse(message)
                console.log(message);
                console.log("Numero gerado randomicamente: ", message["Numero_gerado_randomicamente"])
                x = message["strings"];
                var count = Object.keys(x).length;
                data = message["Pks"];

            });
            // end the input stream and allow the process to exit
            pyshell.end(function (err, code, signal) {
                if (err) throw err;
                console.log('The exit code was: ' + code);
                console.log('The exit signal was: ' + signal);
                console.log('finished');
                console.log("Data:", data);
                return resp.status(200).marko(templates.graph, {
                    dados: data,
                    strings: x
                });
            });

        };
    }
}
module.exports = RotasControlador;