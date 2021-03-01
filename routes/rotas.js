const RotasControlador = require('../controllers/rotas-controlador');
const rotasControlador = new RotasControlador();

module.exports = (app) => {
    const rotas = RotasControlador.rotas();

    app.get(rotas.home, rotasControlador.home())
}