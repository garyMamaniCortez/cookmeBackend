const express = require('express');
const morgan = require('morgan');
const usuarioRoutes = require('./routes/UsuarioRoutes');
const recetaRoutes = require('./routes/RecetaRoutes');
const comentarioRoutes = require('./routes/ComentarioRoutes');
const categoriaRoutes = require('./routes/CategoriaRoutes');
const historialBusquedaRoutes = require('./routes/HistorialBusquedaRoutes');
const ingredienteRoutes = require('./routes/IngredienteRoutes');
const propiedadRoutes = require('./routes/PropiedadRoutes');
const RecetaFavoritaRoutes = require('./routes/RecetaFavoritaRoutes');
const tecnicaRoutes = require('./routes/TecnicaRoutes');
const valoracionRoutes = require('./routes/ValoracionRoutes');
const PreferenciaCulinariaRoutes = require('./routes/PreferenciaCulinariaRoutes');
const PropiedadIngredienteRoutes = require('./routes/PropiedadIngredienteRoutes');
const RecetaIngredienteRoutes = require('./routes/RecetaIngredienteRoutes');
const TecnicaRecetaRoutes = require('./routes/TecnicaRecetaRoutes');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.use('/api', usuarioRoutes);
app.use('/api', recetaRoutes);
app.use('/api', comentarioRoutes);
app.use('/api', categoriaRoutes);
app.use('/api', historialBusquedaRoutes);
app.use('/api', ingredienteRoutes);
app.use('/api', propiedadRoutes);
app.use('/api', RecetaFavoritaRoutes);
app.use('/api', tecnicaRoutes);
app.use('/api', valoracionRoutes);
app.use('/api', PreferenciaCulinariaRoutes);
app.use('/api', PropiedadIngredienteRoutes);
app.use('/api', RecetaIngredienteRoutes);
app.use('/api', TecnicaRecetaRoutes);

app.use(morgan('dev'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});