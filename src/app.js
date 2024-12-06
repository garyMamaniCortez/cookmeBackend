const express=require('express');
const app=express();
const usuarioRoutes=require('./routes/UsuarioRoutes');
const recetaRoutes=require('./routes/RecetaRoutes');
const comentarioRoutes=require('./routes/ComentarioRoutes');
const categoriaRoutes=require('./routes/CategoriaRoutes');
const historialBusquedaRoutes=require('./routes/HistorialBusquedaRoutes');
const ingredienteRoutes=require('./routes/IngredienteRoutes');
const propiedadRoutes=require('./routes/PropiedadRoutes');
const recetaFavoritaRoutes=require('./routes/RecetaFavoritaRoutes');
const tecnicaRoutes=require('./routes/TecnicaRoutes');
const valoracionRoutes=require('./routes/ValoracionRoutes');
const PreferenciaCulinariaRoutes = require('./routes/PreferenciaCulinariaRoutes');
const PropiedadIngredienteRoutes = require('./routes/PropiedadIngredienteRoutes');
const RecetaIngredienteRoutes = require('./routes/RecetaIngredienteRoutes');
const TecnicaRecetaRoutes = require('./routes/TecnicaRecetaRoutes');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use('/api',usuarioRoutes);
app.use('/api',recetaRoutes);
app.use('/api',comentarioRoutes);
app.use('/api',categoriaRoutes);
app.use('/api',historialBusquedaRoutes);
app.use('/api',ingredienteRoutes);
app.use('/api',propiedadRoutes);
app.use('/api',recetaFavoritaRoutes);
app.use('/api',tecnicaRoutes);
app.use('/api',valoracionRoutes);
app.use('/api',PreferenciaCulinariaRoutes);
app.use('/api',PropiedadIngredienteRoutes);
app.use('/api',RecetaIngredienteRoutes);
app.use('/api',TecnicaRecetaRoutes);
app.use(express.json()); // Procesa cuerpos en formato JSON
app.use(express.urlencoded({ extended: true })); // Procesa datos enviados como application/x-www-form-urlencoded

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});