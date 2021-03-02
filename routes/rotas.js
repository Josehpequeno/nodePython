const RotasControlador = require('../controllers/rotas-controlador');
const rotasControlador = new RotasControlador();

module.exports = (app) => {
    const rotas = RotasControlador.rotas();

    app.post(rotas.graph, rotasControlador.graph())
    app.get(rotas.home, rotasControlador.home())
}