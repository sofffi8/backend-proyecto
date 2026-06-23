import { Administrador } from '../models/index.js';

export const seederAdministrador = async () => {
    await Administrador.bulkCreate([
        {
            nombre: "Juan",
            apellido: "Perez",
            email: "juanadmin@gmail.com",
            password: "admin-contraseña-2026",
            legajoEmpleado: "LEG-001",
            nivelPermiso: "SuperAdmin"
        }
    ]);
    console.log('Administradores cargados con éxito.');
};