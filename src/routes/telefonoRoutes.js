import express from 'express';
import { Telefono } from '../models/index.js';

const router = express.Router();

router.get('/usuario/:idUsuario', async (req, res) => {
    try {
        const telefonos = await Telefono.findAll({ where: { idUsuario: req.params.idUsuario } });
        res.json(telefonos);
    } catch (error) {
        res.status(500).json({ error: 'Error al recuperar las líneas telefónicas' });
    }
});

router.post('/', async (req, res) => {
    try {
        const nuevoTelefono = await Telefono.create(req.body);
        res.status(201).json(nuevoTelefono);
    } catch (error) {
        res.status(400).json({ error: 'Error al asociar el teléfono' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const [actualizado] = await Telefono.update(req.body, { where: { id: req.params.id } });
        if (!actualizado) return res.status(404).json({ error: 'Línea de contacto no encontrada' });
        res.json({ mensaje: 'Teléfono modificado con éxito' });
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar el teléfono' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const eliminado = await Telefono.destroy({ where: { id: req.params.id } });
        if (!eliminado) return res.status(404).json({ error: 'Línea de contacto no encontrada' });
        res.json({ mensaje: 'Teléfono dado de baja' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el teléfono' });
    }
});

export default router;