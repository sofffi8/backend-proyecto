import express from 'express';
import { Pedido, DetallesPedido, Producto } from '../models/index.js';

const router = express.Router();

router.get('/usuario/:idUsuario', async (req, res) => {
    try {
        const pedidos = await Pedido.findAll({
            where: { idUsuario: req.params.idUsuario },
            include: {
                model: DetallesPedido,
                as: 'detalles',
                include: { model: Producto, as: 'producto' }
            }
        });
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el historial de pedidos' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { idUsuario, items } = req.body;
        
        let total = 0;
        const detalles = [];

        for (const item of items) {
            const producto = await Producto.findByPk(item.idProducto);
            if (!producto || producto.stock < item.cantidad) {
                return res.status(400).json({ error: 'Producto no disponible o stock insuficiente' });
            }
            
            const subtotal = producto.precio * item.cantidad;
            total += subtotal;

            detalles.push({
                idProducto: item.idProducto,
                cantidad: item.cantidad,
                precioUnitario: producto.precio
            });

            await producto.update({ stock: producto.stock - item.cantidad });
        }

        const nuevoPedido = await Pedido.create({
            idUsuario,
            fechaPedido: new Date(),
            total,
            estado: 'Pendiente',
            detalles
        }, {
            include: [{ model: DetallesPedido, as: 'detalles' }]
        });

        res.status(201).json(nuevoPedido);
    } catch (error) {
        res.status(400).json({ error: 'Error al procesar la orden de compra' });
    }
});

router.put('/:id/estado', async (req, res) => {
    try {
        const { estado } = req.body;
        const [actualizado] = await Pedido.update({ estado }, { where: { id: req.params.id } });
        if (!actualizado) return res.status(404).json({ error: 'Pedido no encontrado' });
        res.json({ mensaje: 'Estado modificado con éxito' });
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar el estado' });
    }
});

export default router;