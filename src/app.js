import express from 'express';
import router from './routes/index.js';

const app = express();

app.use(express.json());

app.use('/api', router);

app.get('/api/test', (req, res) => {
    res.json({ mensaje: "Servidor funcionando correctamente" });
});

export default app;