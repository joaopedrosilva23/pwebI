const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('sobre', { title: 'Sobre o Portal de Receitas' });
});

module.exports = router;
