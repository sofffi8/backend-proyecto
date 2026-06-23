import express from 'express';
import { Carrito, DetallesCarrito, Producto } from '../models/index.js';

const router = express.Router();

router.get('/:idUsuario', async (req, res) => {
    try {
        const carrito = await Carrito.findOne({
            where: { idUsuario: req.params.idUsuario },
            include: {
                model: DetallesCarrito,
                as: 'items',
                include: { model: Producto, as: 'producto' }
            }
        });
        
        if (!carrito) return res.status(404).json({ error: 'El usuario no tiene un carrito' });
        res.json(carrito);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el carrito' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { idUsuario, idProducto, cantidad } = req.body;

        const producto = await Producto.findByPk(idProducto);
        if (!producto || producto.stock < cantidad) {
            return res.status(400).json({ error: 'Producto no disponible o stock insuficiente' });
        }

        let [carrito] = await Carrito.findOrCreate({
            where: { idUsuario },
            defaults: { fechaActualizacion: new Date() }
        });

        const subtotal = producto.precio * cantidad;

        const [item, creado] = await DetallesCarrito.findOrCreate({
            where: { idCarrito: carrito.id, idProducto },
            defaults: { cantidad, subtotal }
        });

        if (!creado) {
            const nuevaCantidad = item.cantidad + cantidad;
            const nuevoSubtotal = producto.precio * nuevaCantidad;
            await item.update({ cantidad: nuevaCantidad, subtotal: nuevoSubtotal });
        }

        await carrito.update({ fechaActualizacion: new Date() });

        res.status(201).json({ mensaje: 'Producto agregado al carrito con éxito' });
    } catch (error) {
        res.status(400).json({ error: 'Error al agregar producto al carrito' });
    }
});

export default router;