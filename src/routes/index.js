const express = require('express');
const routerMovie = require('./movie.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/movies', routerMovie)

module.exports = router;
