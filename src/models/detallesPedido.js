import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const DetallesPedido = sequelize.define('DetallesPedido', {
    cantidad: { type: DataTypes.INTEGER, allowNull: false },
    precioUnitario: { type: DataTypes.DECIMAL(10, 2), allowNull: false }
}, { tableName: 'detalles_pedido', timestamps: false });

export default DetallesPedido;