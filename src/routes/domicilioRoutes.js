import express from 'express';
import { Domicilio } from '../models/index.js';

const router = express.Router();

router.get('/usuario/:idUsuario', async (req, res) => {
    try {
        const domicilios = await Domicilio.findAll({ where: { idUsuario: req.params.idUsuario } });
        res.json(domicilios);
    } catch (error) {
        res.status(500).json({ error: 'Error al recuperar las direcciones' });
    }
});

router.post('/', async (req, res) => {
    try {
        const nuevoDomicilio = await Domicilio.create(req.body);
        res.status(201).json(nuevoDomicilio);
    } catch (error) {
        res.status(400).json({ error: 'Error al registrar el domicilio' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const [actualizado] = await Domicilio.update(req.body, { where: { id: req.params.id } });
        if (!actualizado) return res.status(404).json({ error: 'Dirección no encontrada' });
        res.json({ mensaje: 'Domicilio modificado correctamente' });
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar el domicilio' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const eliminado = await Domicilio.destroy({ where: { id: req.params.id } });
        if (!eliminado) return res.status(404).json({ error: 'Dirección no encontrada' });
        res.json({ mensaje: 'Domicilio removido' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la dirección' });
    }
});

export default router;