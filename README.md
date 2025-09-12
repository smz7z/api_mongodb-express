# Mi API

API REST en desarrollo, construida con **Express.js**, conectada a **MongoDB** mediante **Mongoose** y alojada en **MongoDB Atlas**.

## Estado
En proceso. Implementando endpoints básicos y conexión a la base de datos.

## Tecnologías
- **Node.js** + **Express.js**: Framework backend
- **MongoDB** + **Mongoose**: Base de datos y ORM
- **MongoDB Atlas**: Alojamiento en la nube

## Instalación
1. Clona el repositorio: `git clone https://github.com/smz7z/api_mongodb-express`
2. Instala dependencias: `pnpm install`
3. Crea un archivo `.env` con:
   ```plaintext
   MONGO_CLUSTER_NAME=tu_cadena_de_conexión_atlas
   MONGO_CLUSTER_PASSWORD=tu_password_de_conexión_atlas
   PORT=3000

## Posibles errores de conexión con Mongodb

- **DNS**. Si tu DNS activo es el del propio router local, el registro SRV puede dar error, debido a que en ocasiones el DNS local no lo soporta.

**Solución**: Modificar DNS a 8.8.8.8 (Google) o 1.1.1.1 (Cloudflare)

- Configuración incorrecta de la URI

- Problemas de firewall con el puerto 27017 (propio de Mongodb)