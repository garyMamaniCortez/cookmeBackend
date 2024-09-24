CREATE DATABASE cookme;
USE recetas;

CREATE TABLE Usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nombre_usuario VARCHAR(50) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    correo_electronico VARCHAR(100) NOT NULL UNIQUE,
    contraseña VARCHAR(255) NOT NULL,
    listas_compra TEXT, -- Almacena una lista de listas de compras
);

CREATE TABLE Historial_Busqueda (
    id_usuario INT,
    id_receta INT,
    busqueda VARCHAR(100),
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario),
    FOREIGN KEY (id_receta) REFERENCES Receta(id_receta)
);

CREATE TABLE Receta_Favorita (
    id_usuario INT,
    id_receta INT,
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario),
    FOREIGN KEY (id_receta) REFERENCES Receta(id_receta)
);

CREATE TABLE Preferencia_Culinaria (
    id_usuario INT,
    id_ingrediente INT,
    preferencia BOOL,
    FOREIGN KEY (id_ingrediente) REFERENCES Ingrediente(id_ingrediente),
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario)
);

CREATE TABLE Receta (
    id_receta INT PRIMARY KEY AUTO_INCREMENT,
    nombre_receta VARCHAR(100) NOT NULL,
    descripcion TEXT,
    instrucciones TEXT,
    tiempo_preparacion INT,--minutos
    tiempo_coccion INT,--minutos
    imagen mediumblob,
    id_categoria INT,
    id_usuario INT,
    FOREIGN KEY (id_categoria) REFERENCES Categoria(id_categoria),
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario)
);

CREATE TABLE Ingrediente (
    id_ingrediente INT PRIMARY KEY AUTO_INCREMENT,
    nombre_ingrediente VARCHAR(50) NOT NULL
);

CREATE TABLE Propiedad_Ingrediente (
    id_ingrediente INT,
    id_propiedad INT,
    FOREIGN KEY (id_ingrediente) REFERENCES Ingrediente(id_ingrediente),
    FOREIGN KEY (id_propiedad) REFERENCES Propiedad(id_propiedad)
);

CREATE TABLE Propiedad (
    id_propiedad INT PRIMARY KEY AUTO_INCREMENT,
    nombre_propiedad VARCHAR(100) NOT NULL
);

CREATE TABLE Receta_Ingrediente (
    id_receta INT,
    id_ingrediente INT,
    PRIMARY KEY (id_receta, id_ingrediente),
    FOREIGN KEY (id_receta) REFERENCES Receta(id_receta),
    FOREIGN KEY (id_ingrediente) REFERENCES Ingrediente(id_ingrediente)
);

CREATE TABLE Categoria (
    id_categoria INT PRIMARY KEY AUTO_INCREMENT,
    nombre_categoria VARCHAR(50) NOT NULL
);

CREATE TABLE Comentario (
    id_comentario INT PRIMARY KEY AUTO_INCREMENT,
    id_receta INT,
    id_usuario INT,
    texto_comentario TEXT,
    fecha_comentario DATETIME,
    FOREIGN KEY (id_receta) REFERENCES Receta(id_receta),
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario)
);

CREATE TABLE Valoracion (
    id_valoracion INT PRIMARY KEY AUTO_INCREMENT,
    id_receta INT,
    id_usuario INT,
    valoracion_numerica INT,
    FOREIGN KEY (id_receta) REFERENCES Receta(id_receta),
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario)
);

CREATE TABLE Tecnica (
    id_tecnica INT PRIMARY KEY AUTO_INCREMENT,
    nombre_tecnica VARCHAR(50) NOT NULL,
    descripcion TEXT,
    enlace_tutorial VARCHAR(255)
);
