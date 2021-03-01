const templates = require('../views/index');
require('marko/node-require').install();
let { PythonShell } = require('python-shell')

class RotasControlador {
    static rotas() {
        return {
            home: '/'
        };
    }
    home() {
        return function (req, resp) {
            var dataToSend = [15, 20, 43, 45, 6, 8, 90, 12];
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
                /*let array;
                for (var i = 0; i < count; i++) {
                    var str = i.toString();
                    var t = x[str];
                    array = [t[0], t[1]];
                    data.push(array);
                }*/
            });
            // end the input stream and allow the process to exit
            pyshell.end(function (err, code, signal) {
                if (err) throw err;
                console.log('The exit code was: ' + code);
                console.log('The exit signal was: ' + signal);
                console.log('finished');
                console.log("Data:", data);
                return resp.status(200).marko(templates.home, {
                    dados: data,
                    strings: x
                });
            });

        };
    }
}
module.exports = RotasControlador;