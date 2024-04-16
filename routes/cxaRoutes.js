// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const cxaController= require('../controllers/cxaController');

router.post('/mine', cxaController.mineCXA);

router.get('/getAmountMined',cxaController.getAmountMined);
module.exports = router;
