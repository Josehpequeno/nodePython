const templates = require('../views/index');
require('marko/node-require').install();
let { PythonShell } = require('python-shell');

function python(resp, dataToSend) {
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
}

class RotasControlador {
    static rotas() {
        return {
            graph: '/graph',
            home: '/',
            upload: '/upload'
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
            } else {
                if (escolha == "virgula") {
                    dataToSend = dataToSend.split(",");
                }
                else {
                    dataToSend = dataToSend.split(";");
                }
            }
            let aux = [];
            dataToSend.forEach(element => {
                element = element.replace(/,/, '.');//tratando floats com virgula.
                if (element != "") {
                    aux.push(element);
                }
            });
            dataToSend = aux;
            console.log(dataToSend);
            return python(resp, dataToSend);
        };
    }
    upload() {
        return function (req, resp) {
            console.log("body ", req.body);
            console.log("dir", ".." + __dirname);
            //var formidable = require('formidable');
            const fs = require('fs');
            const formidable = require('formidable');
            const neatCsv = require('neat-csv');

            const form = formidable({ multiples: true, uploadDir: "./", filename: "teste.csv" });

            form.on('fileBegin', (formName, file) => {
                file.path = "dados.csv"; // to change the final path
            });

            form.parse(req, (err, fields, files) => {
                //console.log(fields, files);
                if (err) {
                    next(err);
                    return;
                }
                //resp.json({ fields, files });
            });

            fs.readFile('dados.csv', async (err, data) => {
                if (err) {
                    console.error(err);
                    return;
                }
                await neatCsv(data);
                var csvData = [];
                const parse = require('csv-parse');
                fs.createReadStream('dados.csv')
                    .pipe(parse({ delimiter: ' ' || ';' }))
                    .on('data', function (csvrow) {
                        console.log(csvrow);
                        //do something with csvrow
                        csvData.push(String(csvrow).replace(/,/, '.'));
                    })
                    .on('end', function () {
                        //do something with csvData
                        console.log(csvData);
                    });
                return python(resp, csvData);
            });
        };
    }
}
module.exports = RotasControlador;