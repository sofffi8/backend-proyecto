import { Categoria } from '../models/index.js';

export const seederCategorias = async () => {
    return await Categoria.bulkCreate([
        { nombre: 'Procesadores', descripcion: 'CPUs Intel y AMD' },
        { nombre: 'Motherboards', descripcion: 'Placas madre compatibles' },
        { nombre: 'Coolers', descripcion: 'Refrigeración líquida y por aire' },
        { nombre: 'Memorias RAM', descripcion: 'Módulos de memoria RAM DDR4 y DDR5' },
        { nombre: 'Placas de Video', descripcion: 'GPUs NVIDIA y AMD' },
        { nombre: 'Almacenamiento', descripcion: 'Discos SSD NVMe y HDD' },
        { nombre: 'Fuentes', descripcion: 'Fuentes de alimentación certificadas' },
        { nombre: 'Gabinetes', descripcion: 'Chasis con flujo de aire y RGB' },
        { nombre: 'Monitores', descripcion: 'Pantallas Gaming de alta tasa de refresco' },
        { nombre: 'Perifericos', descripcion: 'Teclados, mouses y auriculares' }
    ]);
};