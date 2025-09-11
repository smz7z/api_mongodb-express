import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', async (req, res) => {
    res.send('Hello World!');
});

app.get('/crear', async (req, res) => {
    res.send('Alumno creado');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});