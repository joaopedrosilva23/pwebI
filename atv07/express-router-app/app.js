const express = require('express');
const app = express();
const PORT = 3000;

// Middleware global de log
app.use((req, res, next) => {
  console.log(`[LOG] ${req.method} ${req.url}`);
  next();
});

// Importação de rotas
const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const dataRouter = require('./routes/data');
const usersRouter = require('./routes/users');

// Uso das rotas
app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/data', dataRouter);
app.use('/users', usersRouter);

// Rota 404
app.use((req, res) => {
  res.status(404).send('Página não encontrada. <a href="/">Voltar ao início</a>');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
