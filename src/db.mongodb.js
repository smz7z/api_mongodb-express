const mongoose = require('mongoose')
const express = require('express');
const app = express();
const PORT = 3000;
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
/*---------------------------------------------------------------*/


// Endpoints
/*---------------------------------------------------------------*/
app.get('/', async (req, res) => {
    res.send('Menú principal');
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
/*---------------------------------------------------------------*/