import express from 'express';
import { Producto, Categoria } from '../models/index.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const productos = await Producto.findAll({ include: { model: Categoria, as: 'categoria' } });
        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el catálogo' });
    }
});

router.post('/', async (req, res) => {
    try {
        const nuevoProducto = await Producto.create(req.body);
        res.status(201).json(nuevoProducto);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear el producto' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const [actualizado] = await Producto.update(req.body, { where: { id: req.params.id } });
        if (!actualizado) return res.status(404).json({ error: 'Producto no encontrado' });
        res.json({ mensaje: 'Componente modificado con éxito' });
    } catch (error) {
        res.status(400).json({ error: 'Error al modificar el producto' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const eliminado = await Producto.destroy({ where: { id: req.params.id } });
        if (!eliminado) return res.status(404).json({ error: 'Producto no encontrado' });
        res.json({ mensaje: 'Producto eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el producto' });
    }
});

export default router;