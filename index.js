const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

const { PORT } = process.env;

app.get('/', (req, res) => {
  return res.send('ok');
});

app.listen(PORT, () => (
  `Rodando na porta ${PORT}`
));