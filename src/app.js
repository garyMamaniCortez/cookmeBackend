const express=require('express');
const app=express();
const usuarioRoutes=require('./routes/UsuarioRoutes');
const recetaRoutes=require('./routes/RecetaRoutes');

app.use(express.json());

app.use('/api',usuarioRoutes);
app.use('/api',recetaRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});