const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('novaReceita', { title: 'Enviar Nova Receita' });
});

module.exports = router;
