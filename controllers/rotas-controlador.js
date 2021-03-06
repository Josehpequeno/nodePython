const templates = require('../views/index');
require('marko/node-require').install();
let { PythonShell } = require('python-shell');
const { stringify } = require('querystring');
const { JSONParser } = require('formidable');

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
        correcaoA = message["CorrecaoArtificial"];
        movimentoA = message["MovimentoArtificial"];
        correcao = message["Correcao"];
        movimento = message["Movimento"];
        correcaoAS = message["CorrecaoArtificialS"];
        movimentoAS = message["MovimentoArtificialS"];
        correcaoS = message["CorrecaoS"];
        movimentoS = message["MovimentoS"];
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
                var column = 0;
                //console.log(data)
                var csv = await neatCsv(data);
                var csvData = [];
                var csvrow;
                //csv = JSON.parse(String(csv));
                //console.log(csv[0]["Ativo;Data;Hora;Abertura;Máximo;Mínimo;Fechamento;Volume;Quantidade"]);
                for (var row in csv) {
                    csvrow = String(csv[row]["Último"]).replace(/,/, '.');
                    //console.log(csvrow);
                    //console.log(csv[row]["Último"]);
                    //console.log(csvrow);
                    if (csvrow == undefined || csvrow == "undefined") {
                        //console.log(csv[row]);
                        csvrow = String(csv[row]["Fechamento"]).replace(/,/, '.');
                    }
                    if (csvrow == undefined || csvrow == "undefined") {
                        csvrow = String(csv[row]["Valor"]).replace(/,/, '.');
                    }
                    if (csvrow == undefined || csvrow == "undefined") {
                        csvrow = String(csv[row]["Preço"]).replace(/,/, '.');
                    }/*
                    if (csvrow == undefined || csvrow == "undefined") {
                        let s = String(csv[row]["Ativo;Data;Hora;Abertura;Máximo;Mínimo;Fechamento;Volume;Quantidade"]).split(";");
                        console.log(s);
                        csvrow = s[6].replace(/,/, '.');
                        console.log(csvrow);
                    }*/
                    if (csvrow == undefined || csvrow == "undefined") {
                        const msg = "Erro de leitura de arquivo. Por favor tente novamente com um arquivo separado por virgulas."
                        return resp.marko(templates.home, {
                            msg: msg
                        });
                    }
                    //csvrow = String(csv[row]).replace(/^\ufeff/, '');
                    //do something with csvrow
                    csvrow = Number(csvrow);
                    if (!isNaN(csvrow)) {
                        //csvData.push(csvrow);
                        csvData.unshift(csvrow);
                    }
                }
                console.log("CsvData { ", csvData, "}");
                if (csvData.length == 0) {
                    const msg = "Erro de leitura de arquivo. Por favor tente novamente."
                    return resp.marko(templates.home, {
                        msg: msg
                    });
                } else {
                    return python(resp, csvData);
                }
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