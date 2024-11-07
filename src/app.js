const express=require('express');
const app=express();
const usuarioRoutes=require('./routes/UsuarioRoutes');
const recetaRoutes=require('./routes/RecetaRoutes');
const comentarioRoutes=require('./routes/ComentarioRoutes');
const categoriaRoutes=require('./routes/CategoriaRoutes');

app.use(express.json());

app.use('/api',usuarioRoutes);
app.use('/api',recetaRoutes);
app.use('/api',comentarioRoutes);
app.use('/api',categoriaRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});