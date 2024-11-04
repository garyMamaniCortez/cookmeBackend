const express=require('express');
const app=express();
const usuarioRoutes=require('./routes/UsuarioRoutes');

app.use(express.json());
app.use('/api',usuarioRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});