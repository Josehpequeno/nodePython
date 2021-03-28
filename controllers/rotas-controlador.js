const templates = require('../views/index');
require('marko/node-require').install();
let { PythonShell } = require('python-shell');

function python(resp, dataToSend) {
    let pyshell = new PythonShell('calculoPk.py');

    let data;
    let x;
    var sar;
    var entrada;
    var pontosArtificiais;
    var correcaoRand;
    var movimentoRand;
    var correcaoA;
    var movimentoA;
    var correcao;
    var movimento;
    var correcaoAS;
    var movimentoAS;
    var correcaoS;
    var movimentoS;
    pyshell.send(JSON.stringify(dataToSend));
    pyshell.on('message', function (message) {
        // received a message sent from the Python script (a simple "print" statement)
        message = JSON.parse(message)
        console.log(message);
        x = message["strings"];
        data = message["Pks"];
        sar = message["SARParabolic"];
        entrada = message["Entrada"];
        pontosArtificiais = message["PontoArtificial"]; 
        movimentoRand = message["MovimentoArtificialRandAcumulado"];
        correcaoRand = message["CorrecaoArtificialRandAcumulado"];
        correcaoA = message["MovimentoArtificial"];
        movimentoA = message["CorrecaoArtificial"];
        correcao = message["Movimento"];
        movimento = message["Correcao"];
        correcaoAS = message["MovimentoArtificialS"];
        movimentoAS = message["CorrecaoArtificialS"];
        correcaoS = message["MovimentoS"];
        movimentoS = message["CorrecaoS"];
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
            strings: x,
            sar: sar,
            entrada: entrada,
            pontos: pontosArtificiais,
            random1: movimentoRand,
            random2: correcaoRand,
            movimentoA: movimentoA,
            correcaoA: correcaoA,
            movimento: movimento,
            correcao: correcao,
            movimentoAS: movimentoAS,
            correcaoAS: correcaoAS,
            movimentoS: movimentoS,
            correcaoS: correcaoS
        });
    });
}

class RotasControlador {
    static rotas() {
        return {
            graph: '/graph',
            home: '/',
            upload: '/upload',
            recalcular: '/recalcular'
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
            dataToSend = dataToSend.replace(/\r?\n|\r/g, ' ');//tratar quebra de linha
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
            //console.log("dir", ".." + __dirname);
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
                        //console.log(!isNaN(csvrow));
                        //do something with csvrow
                        if (!isNaN(csvrow)) {
                            csvData.push(String(csvrow).replace(/,/, '.'));
                        }
                    })
                    .on('end', function () {
                        //do something with csvData
                        //console.log(csvData);
                        return python(resp, csvData);
                    });

            });
        };
    }

    recalcular() {
        return function (req, resp) {
            const fs = require('fs');
            //const formidable = require('formidable');
            const neatCsv = require('neat-csv');

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
                        //console.log(!isNaN(csvrow));
                        //do something with csvrow
                        if (!isNaN(csvrow)) {
                            csvData.push(String(csvrow).replace(/,/, '.'));
                        }
                    })
                    .on('end', function () {
                        //do something with csvData
                        //console.log(csvData);
                        return python(resp, csvData);
                    });

            });
        }
    }
}
module.exports = RotasControlador;