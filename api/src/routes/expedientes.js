const { Router } = require('express');
const axios = require('axios');

const { expediente, inspeccion, expedienteinspeccion } = require('../db.js'); //importo los modelos conectados

const router = Router();

module.exports = router;