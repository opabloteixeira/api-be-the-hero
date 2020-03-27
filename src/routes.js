const express = require('express');
const routes = express.Router();

const OngController = require("./controllers/OngController");
const IncidentsController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");


//Listar ongs
routes.get('/ongs', OngController.index);

//Insert ongs
routes.post('/ongs', OngController.create);

//Insert incidents
routes.post('/incidents', IncidentsController.create);

//Listar Incidents
routes.get('/incidents', IncidentsController.index);

//delete
routes.delete('/incidents/:id', IncidentsController.delete);
 
//Listar de uma ong
routes.get('/profile', ProfileController.index);

//grava sessao de login
routes.post('/sessions', SessionController.create);



module.exports = routes;