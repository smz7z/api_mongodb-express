// Importaciones
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

// Variables de entorno
const mongoUser = process.env.MONGO_CLUSTER_NAME;
const mongoPassword = process.env.MONGO_CLUSTER_PASSWORD;
const PORT = process.env.PORT || 3000;

// Conexión a Servidor & MongoDB
const database = "hotel";
mongoose.connect(`mongodb+srv://${mongoUser}:${mongoPassword}@cluster0.fgumghx.mongodb.net/${database}`)
    .then(
        app.listen(PORT, () => {
            console.clear()
            console.log(`Server & Mongo are running at http://localhost:${PORT}`);
        }
        ))
    .catch(err => console.log(`Error de conexión a MongoDB: ${err}`))


// Definición de equema & modelo
const collection = "empleados";
const nombreEmpleado = "joselito";
const edadEmpleado = 37;

const empleadoSchema = new mongoose.Schema(
    { nombre: String, edad: Number },
    { versionKey: false });

const Empleado = mongoose.model(collection, empleadoSchema);



// Endpoints
app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, "..", 'index.html'));
    console.log('Index enviado')
});

app.get('/crear', async (req, res) => {
    await Empleado.insertOne({
        nombre: nombreEmpleado,
        edad: edadEmpleado
    });
    res.send('Empleado creado');
    console.log('Empleado creado')
});

