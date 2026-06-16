import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Carrito = sequelize.define('Carrito', {
    fechaActualizacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { tableName: 'carritos', timestamps: false });

export default Carrito;