const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.get('/', controller.getOverview);
router.get('/api/proveedores', controller.getProviders);
router.get('/api/clientes', controller.getClients);

module.exports = router;
