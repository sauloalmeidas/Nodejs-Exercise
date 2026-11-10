const express = require('express');

const router = express.Router();

const livroController = require('../Controller/livroController');

// GET - Listar todos
router.get('/livros', livroController.listar);

// POST - Cadastrar
router.post('/livros', livroController.cadastrar);



module.exports = router;