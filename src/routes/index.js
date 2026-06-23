import express from 'express';
import categoriaRoutes from './categoriaRoutes.js';
import productoRoutes from './productoRoutes.js';
import carritoRoutes from './carritoRoutes.js';
import usuarioRoutes from './usuarioRoutes.js';
import pedidoRoutes from './pedidoRoutes.js';
import domicilioRoutes from './domicilioRoutes.js';
import telefonoRoutes from './telefonoRoutes.js';
import pagoRoutes from './pagoRoutes.js';

const router = express.Router();

router.use('/categorias', categoriaRoutes);
router.use('/productos', productoRoutes);
router.use('/carrito', carritoRoutes);
router.use('/usuarios', usuarioRoutes);
router.use('/pedidos', pedidoRoutes);
router.use('/domicilios', domicilioRoutes);
router.use('/telefonos', telefonoRoutes);
router.use('/pagos', pagoRoutes);

export default router;