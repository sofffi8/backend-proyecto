import express from 'express';

const app = express();

app.use(express.json());

app.get('/api/test', (req, res) => {
    res.json({
        mensaje: "Servidor funcionando perfectamente!"
    });
});

export default app;