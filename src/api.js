const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const mongoose = require('mongoose');
const prompt = require('prompt-sync')();

// Conexión a MongoDB
mongoose.connect(`mongodb+srv://root:1234@cluster0.fgumghx.mongodb.net/colegio`)
    .then(() => console.log("Conectado a MongoDB"))
    .catch(err => console.log(`Error de conexión a MongoDB: ${err}`))


// Definición del modelo
const Alumno = mongoose.model('Alumno', {
    nombre: String,
    edad: Number
});


// Prompts el nuevo alumno
/*---------------------------------------------------------------*/
const nombre = prompt("Ingrese el nombre del alumno: ")
const edad = parseInt(prompt("Ingrese la edad del alumno: "))


app.get('/', async (req, res) => {
    res.sendFile(path.join('c:/Users/santi/Desktop/API mongo-js-astro/pages/index.html'));
});

app.get('/crear', async (req, res) => {
    await Alumno.insertOne({
        nombre: nombre,
        edad: edad
    });
    res.send('Alumno creado');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});