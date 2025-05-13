const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.send('POST recebido na rota /data');
});

module.exports = router;
