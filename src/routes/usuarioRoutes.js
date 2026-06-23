import express from 'express';
import { Usuario } from '../models/index.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const usuarios = await Usuario.findAll({ attributes: { exclude: ['password'] } });
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
});

router.post('/', async (req, res) => {
    try {
        const nuevoUsuario = await Usuario.create(req.body);
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(400).json({ error: 'Error al registrar el usuario' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const [actualizado] = await Usuario.update(req.body, { where: { id: req.params.id } });
        if (!actualizado) return res.status(404).json({ error: 'Usuario no encontrado' });
        res.json({ mensaje: 'Perfil de usuario actualizado' });
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar el usuario' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const eliminado = await Usuario.destroy({ where: { id: req.params.id } });
        if (!eliminado) return res.status(404).json({ error: 'Usuario no encontrado' });
        res.json({ mensaje: 'Usuario dado de baja' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
});

export default router;