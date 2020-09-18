const express = require('express')

const multer = require('multer');
const uploadConfig = require('../config/files')
const SessoesController = require('../controllers/SessoesController');
const PasseiosController = require('../controllers/PasseiosController');
const DashboardController = require('../controllers/DashboardController');
const ReservasController = require('../controllers/ReservasController');
const routes = express.Router();

const upload = multer(uploadConfig);


/**
 * Definição de rotas da nossa API
 */
routes.post('/sessoes',SessoesController.store);
routes.get('/passeios',PasseiosController.index);
routes.post('/passeios',
              upload.single('miniatura'), 
              PasseiosController.store);
routes.get('/dashboard',DashboardController.show);
routes.post('/passeios/:pid/res', ReservasController.store);


module.exports = routes;