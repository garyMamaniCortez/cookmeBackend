const express = require('express');
const morgan = require('morgan');
const usuarioRoutes = require('./routes/UsuarioRoutes');
const app = express();

app.use(express.json());

app.use('/api', usuarioRoutes);

app.use(morgan('dev'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});