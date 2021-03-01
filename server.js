const customExpress = require('./config/custom-express');
const app = customExpress();

app.set("port", process.env.PORT || 3000);
app.set("host", process.env.HOST || "localhost");
const verde = '\u001b[32m';
const reset = '\u001b[0m';
if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV = 'Local';
}

//app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.listen(app.get("port"), function () {
    console.log(
        verde + "%s servidor rodando em http://%s:%s" + reset,
        process.env.NODE_ENV,
        app.get("host"),
        app.get("port")
    );
});
