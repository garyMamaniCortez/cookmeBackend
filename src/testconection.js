const { Usuario, sequelize } = require('../models');

(async () => {
  try {
    // Probar la conexión a la base de datos
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida correctamente.');

    // Intentar obtener todos los usuarios (o ejecuta otra consulta de prueba)
    const usuario = await Usuario.findAll();
    console.log('Usuarios encontrados:', usuario);

    // Cerrar la conexión después de la prueba
    await sequelize.close();
    console.log('Conexión cerrada después de la prueba.');
  } catch (error) {
    console.error('Error al probar la conexión:', error.message);
  }
})();
