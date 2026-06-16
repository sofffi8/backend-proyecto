import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const DetallesCarrito = sequelize.define('DetallesCarrito', {
    cantidad: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
    subtotal: { type: DataTypes.DECIMAL(10, 2), allowNull: false }
}, { tableName: 'detalles_carrito', timestamps: false });

export default DetallesCarrito;