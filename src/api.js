// Importaciones
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
/**--------------------------------------------------------- */

// Variables de entorno
const mongoUser = process.env.MONGO_CLUSTER_NAME;
const mongoPassword = process.env.MONGO_CLUSTER_PASSWORD;
const PORT = process.env.PORT || 3000;
/**--------------------------------------------------------- */

// Variables de configuración
const database = "redSocial";
const collection = "usuarios";
/**--------------------------------------------------------- */

// Conexión a Servidor & MongoDB
mongoose.connect(`mongodb+srv://${mongoUser}:${mongoPassword}@cluster0.fgumghx.mongodb.net/${database}`)
    .then(
        app.listen(PORT, () => {
            console.clear()
            console.log(`Server & Mongo are running at http://localhost:${PORT}`);
        }
        ))
    .catch(err => console.log(`Error de conexión a MongoDB: ${err}`))
/**--------------------------------------------------------- */

// Definición de equema & modelo
const usuarioSchema = new mongoose.Schema(
    { nombre: String, edad: Number },
    { versionKey: false });

const Usuario = mongoose.model(collection, usuarioSchema);
/**--------------------------------------------------------- */

// Middleware para parsear datos de formularios
app.use(express.urlencoded({ extended: true }));

// Endpoints
app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, "..", 'index.html'));
    console.log('Index enviado')
});


app.post('/usuarioCreado', async (req, res) => {
    try {
        const { nombre, edad } = req.body;

        // Crear un nuevo empleado usando Mongoose
        await Usuario.create({
            nombre: nombre,
            edad: edad
        });

        res.sendFile(path.join(__dirname, "..", 'index.html'));
        console.log('Usuario creado');

    } catch (error) {
        res.status(500).send('Error al crear el usuario');
        console.error('Error al crear usuario:', error);
    }
});

/**--------------------------------------------------------- */
