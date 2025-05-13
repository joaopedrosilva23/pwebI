const express = require('express');
const app = express();
const PORT = 3000;

// Middleware de log de acesso
app.use((req, res, next) => {
  console.log(`Acesso: ${req.method} ${req.url}`);
  next();
});

// Middleware por rota
function rotaMiddleware(nomeRota) {
  return (req, res, next) => {
    res.send(`Você está na página: ${nomeRota}`);
  };
}

// Rotas GET
app.get('/', rotaMiddleware('/'));
app.get('/about', rotaMiddleware('/about'));

app.get('/users', rotaMiddleware('/users'));

app.get('/users/signin', (req, res) => {
  const userid = req.query.userid;
  if (userid) {
    res.redirect(`/users/${userid}`);
  } else {
    res.redirect('/users/signup');
  }
});

app.get('/users/signup', rotaMiddleware('/users/signup'));

app.get('/users/:userid', (req, res) => {
  const userid = req.params.userid;
  res.send(`Bem-vindo, usuário ${userid}!`);
});

// Rota POST para /data
app.post('/data', (req, res) => {
  res.send('Dados recebidos via POST em /data');
});

// Middleware de rota não encontrada
app.use((req, res) => {
  res.status(404).send(`Página não encontrada. Volte para <a href="/">index</a>`);
});

// Inicia servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
