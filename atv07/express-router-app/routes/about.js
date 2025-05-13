const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Você está na página: /about');
});

module.exports = router;
