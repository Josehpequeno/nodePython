const express = require('express')
const { spawn } = require('child_process');
const app = express()
app.set("port", process.env.PORT || 3000);
app.set("host", process.env.HOST || "localhost");
let { PythonShell } = require('python-shell')
const verde = '\u001b[32m';
const reset = '\u001b[0m';
if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV = 'Local';
}


app.get('/', (req, res) => {

    var dataToSend = [15, 20, 43, 45, 6, 8, 90, 12];
    /*let options = {
        mode: "text",
        args: [dataToSend]
    };
    PythonShell.run('script3.py', options, function (err,results) {
        if (err) throw err;
        console.log(results)
        console.log('finished');
    });*/
    let pyshell = new PythonShell('script3.py');


    pyshell.send(JSON.stringify(dataToSend));
    pyshell.on('message', function (message) {
        // received a message sent from the Python script (a simple "print" statement)
        message = JSON.parse(message)
        console.log(message);
        console.log("Numero gerado randomicamente: ", message["Numero_gerado_randomicamente"])
        var x = message["Pks"];
        
    });


    // end the input stream and allow the process to exit
    pyshell.end(function (err, code, signal) {
        if (err) throw err;
        console.log('The exit code was: ' + code);
        console.log('The exit signal was: ' + signal);
        console.log('finished');
    });
    // spawn new child process to call the python script
    //const python = spawn('python3', ['script1.py']);
    /*const python = spawn('python3', ['script3.py',dataToSend]);
    // collect data from script
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        dataToSend = data.toString();
        console.log(data);
    });
    python.stderr.on('data', (data) => {
        // As said before, convert the Uint8Array to a readable string.
        dataToSend = data.toString();
        console.log(data);
    });
    // in close event we are sure that stream from child process is closed
    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        // send data to browser
        res.send(dataToSend)
    });*/

})
//app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.listen(app.get("port"), function () {
    console.log(
        verde + "%s servidor rodando em http://%s:%s" + reset,
        process.env.NODE_ENV,
        app.get("host"),
        app.get("port")
    );
});
