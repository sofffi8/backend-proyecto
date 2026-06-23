import express from 'express';
import { Pago, Pedido } from '../models/index.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { idPedido, metodoPago, estadoPago, fecha, monto } = req.body;

        const pedido = await Pedido.findByPk(idPedido);
        if (!pedido) {
            return res.status(404).json({ error: 'El pedido no existe' });
        }

        const nuevoPago = await Pago.create({
            idPedido,
            metodoPago,
            estadoPago,
            fecha,
            monto
        });

        res.status(201).json(nuevoPago);
    } catch (error) {
        res.status(400).json({ error: 'Error al registrar el pago' });
    }
});

export default router;