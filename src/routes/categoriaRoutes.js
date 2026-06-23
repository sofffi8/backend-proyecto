import express from 'express';
import { Categoria } from '../models/index.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const categorias = await Categoria.findAll();
        res.json(categorias);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las categorías' });
    }
});

router.post('/', async (req, res) => {
    try {
        const nuevaCategoria = await Categoria.create(req.body);
        res.status(201).json(nuevaCategoria);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear la categoría' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const [actualizado] = await Categoria.update(req.body, { where: { id: req.params.id } });
        if (!actualizado) return res.status(404).json({ error: 'Categoría no encontrada' });
        res.json({ mensaje: 'Categoría actualizada correctamente' });
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar la categoría' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const eliminado = await Categoria.destroy({ where: { id: req.params.id } });
        if (!eliminado) return res.status(404).json({ error: 'Categoría no encontrada' });
        res.json({ mensaje: 'Categoría eliminada de la base de datos' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la categoría' });
    }
});

export default router;