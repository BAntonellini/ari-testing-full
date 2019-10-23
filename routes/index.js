const express = require('express');
const router = express.Router();

const { body } = require('express-validator');

const ticketController = require('../controllers/ticketController');

module.exports = function () {
    router.get('/', ticketController.ticketHome);
    router.get('/crearTicket', ticketController.crearTicket);
    router.post('/crearTicket', ticketController.formularioTickets);



    return router;
};