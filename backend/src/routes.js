const express = require ('express');



const FazendaController = require('./controllers/FazendaController');

const routes = express.Router();

routes.get('/fazenda', FazendaController.index);
routes.get('/fazenda', FazendaController.consulta);
// routes.post('/ongs', OngController.create);

module.exports= routes;