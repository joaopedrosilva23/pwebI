const express = require('express');
const router = express.Router();

// Middleware por rota
router.use((req, res, next) => {
  console.log(`[USERS] Acessando ${req.originalUrl}`);
  next();
});

router.get('/', (req, res) => {
  res.send('Você está na página: /users');
});

router.get('/signin', (req, res) => {
  const userid = req.query.userid;
  if (userid) {
    res.redirect(`/users/${userid}`);
  } else {
    res.redirect('/users/signup');
  }
});

router.get('/signup', (req, res) => {
  res.send('Você está na página: /users/signup');
});

router.get('/:userid', (req, res) => {
  res.send(`Bem-vindo, usuário ${req.params.userid}!`);
});

module.exports = router;
