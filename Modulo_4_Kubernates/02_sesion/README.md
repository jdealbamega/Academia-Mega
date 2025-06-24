# Sesión 02: Kubernetes

## Fecha: 24/06/2025

## Objetivos de la Sesión

- Construir un contenedor mediante NodeJS

## Temas Cubiertos

1. **Dockers**
   - Creación de imagenes con DockerFile

## Ejercicios Realizados

### Ejercicio 1: Construir un contenedor mediante NodeJS

```javascript
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("hola mundo desde Docker!!!!!!!");
});

app.listen(PORT, () => {
    console.log(`Servidor de node escuchando en el puerto ${PORT}`);
});
```

```docker
# Esta es la base o el runtime donde mi app se va a ejecutar
FROM node:22.16

# Establecer el directorio de trabajo dentro de la imagen
WORKDIR /usr/src/app

# Copiar el archivo de definición de dependencias
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar la solución
COPY . .

# Exponer un puerto
#ENV PORT = ${APP_PORT}
#EXPOSE ${APP_PORT}
EXPOSE 3001

# Comando que inicie la aplicación
CMD ["node", "app.js"]
```
## Desafíos Encontrados

- 

## Recursos Adicionales

- 

## Próximos Pasos

- Usos de Docker

## Reflexiones Personales

Esta sesión me ayudó a como crear y configurar una imagen con su contenedor de Docker.

---

*Entregable correspondiente a la Clase 02 del Módulo 4: Kubernetes*