import { sequelize } from '../models/index.js';
import { seederAdministrador } from './administradorSeeder.js';
import { seederCategorias } from './categoriaSeeder.js';
import { seederProductos } from './productoSeeder.js';

const runSeeders = async () => {
    try {
        await sequelize.sync({ force: true });
        await seederAdministrador();
        const categoriasCreadas = await seederCategorias();
        console.log(`${categoriasCreadas.length} Categorías organizadas.`);
        await seederProductos(categoriasCreadas);

        console.log('Base de datos cargada.');
        process.exit(0);

    } catch (error) {
        console.error('Error: ', error);
        process.exit(1);
    }
};

runSeeders();