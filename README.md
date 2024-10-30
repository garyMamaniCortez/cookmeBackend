# cookmeBackend
## 1.Crear Migraciones
- instalar dependencias de migraciones $: npm install sequelize sequelize-cli pg pg-hstore
- configuracion inicial $:npx sequelize-cli init
-  crear migración: npx sequelize-cli migration:generate --name create-users-table
- luego se debe añadir las tablas/relaciones a la carpeta migrations
- ejecutar migración: npx sequelize-cli db:migrate
