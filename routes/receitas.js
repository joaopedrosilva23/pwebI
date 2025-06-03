var express = require('express');
var router = express.Router();

// Página principal de receitas
router.get('/', function(req, res, next) {
  res.render('receitas', { title: 'Receitas' });
});

// Página de receita específica (ex: /receitas/bolo)
router.get('/:id', function(req, res, next) {
  res.render('receitaDetalhe', { title: 'Detalhes da Receita', id: req.params.id });
});

module.exports = router;
