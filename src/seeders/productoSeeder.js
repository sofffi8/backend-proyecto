import { Producto } from '../models/index.js';

export const seederProductos = async (categorias) => {
    await Producto.bulkCreate([
        {
            nombre: "Procesador AMD Ryzen 3 4100",
            descripcion: "Ideal para jugadores y creadores de contenido. 4 núcleos, 8 hilos. Socket AM4.",
            precio: 96500.00,
            stock: 15,
            imagen: "ryzen3.png",
            socketCompatibilidad: "AM4",
            especificacionesTecnicas: "Frecuencia base 3.8 GHz, Cache 4MB",
            idCategoria: categorias[0].id
        },
        {
            nombre: "Intel Core i9-14900Kf",
            descripcion: "Máximo rendimiento para gaming entusiasta y streaming.",
            precio: 1798170.00,
            stock: 4,
            imagen: "i9.png",
            socketCompatibilidad: "LGA1700",
            idCategoria: categorias[0].id 
        },
        {
            nombre: "Placa de Video ASUS RTX 4070 Dual 12GB",
            descripcion: "Arquitectura NVIDIA Ada Lovelace, trazado de rayos y DLSS 3.",
            precio: 850000.00,
            stock: 8,
            imagen: "rtx4070.png",
            socketCompatibilidad: "PCIe 4.0",
            idCategoria: categorias[4].id 
        },
        {
            nombre: "Procesador AMD Ryzen 5 5600X",
            descripcion: "Excelente equilibrio para gaming en 1080p. 6 núcleos, 12 hilos.",
            precio: 245000.00,
            stock: 20,
            imagen: "ryzen5.png",
            socketCompatibilidad: "AM4",
            especificacionesTecnicas: "Frecuencia base 3.7 GHz, Cache 32MB",
            idCategoria: categorias[0].id
        },
        {
            nombre: "Motherboard ASUS Prime B550M-A",
            descripcion: "Placa madre micro-ATX compatible con procesadores AMD de arquitectura AM4.",
            precio: 135000.00,
            stock: 12,
            imagen: "mother_b550.png",
            socketCompatibilidad: "AM4",
            especificacionesTecnicas: "Soporta DDR4 hasta 4800MHz, PCIe 4.0 x16",
            idCategoria: categorias[1].id
        },
        {
            nombre: "Motherboard Gigabyte Z790 AORUS ELITE",
            descripcion: "Placa madre de gama alta para exprimir el potencial de la 14va generación de Intel.",
            precio: 410000.00,
            stock: 6,
            imagen: "mother_z790.png",
            socketCompatibilidad: "LGA1700",
            especificacionesTecnicas: "Soporta DDR5, 4 ranuras M.2 NVMe, Wi-Fi 6E",
            idCategoria: categorias[1].id
        },
        {
            nombre: "Placa de Video AMD Radeon RX 7600 XT 16GB",
            descripcion: "Gran capacidad de VRAM para texturas en Ultra y edición de video fluida.",
            precio: 495000.00,
            stock: 10,
            imagen: "rx7600xt.png",
            socketCompatibilidad: "PCIe 4.0",
            idCategoria: categorias[4].id
        },
        {
            nombre: "Memoria RAM DDR5 16GB Corsair Vengeance",
            descripcion: "Módulo de memoria de última generación a 5600MHz optimizado para Intel y AMD.",
            precio: 89000.00,
            stock: 25,
            imagen: "ram_ddr5_16gb.png",
            socketCompatibilidad: "DIMM",
            idCategoria: categorias[3].id
        },
        {
            nombre: "Disco SSD NVMe M.2 1TB WD Black SN770",
            descripcion: "Almacenamiento de alta velocidad con tasas de lectura de hasta 5150 MB/s.",
            precio: 105000.00,
            stock: 40,
            imagen: "ssd_1tb_wd.png",
            socketCompatibilidad: "M.2 PCIe",
            idCategoria: categorias[5].id
        },{
            nombre: "Fuente Corsair RM750e 750W",
            descripcion: "Fuente de alimentación modular con certificación 80 Plus Gold de alta eficiencia.",
            precio: 185000.00,
            stock: 14,
            imagen: "fuente_750w.png",
            socketCompatibilidad: "ATX",
            idCategoria: categorias[6].id
        },
        {
            nombre: "Gabinete Lian Li Lancool 216 RGB",
            descripcion: "Chasis moderno con excelente flujo de aire, incluye dos ventiladores frontales de 160mm.",
            precio: 140000.00,
            stock: 9,
            imagen: "gabi_lianli.png",
            socketCompatibilidad: "ATX / Micro-ATX",
            idCategoria: categorias[7].id
        },
        {
            nombre: "Memoria RAM DDR4 32GB Kingston Fury",
            descripcion: "Módulo de alta velocidad de 3200MHz.",
            precio: 112000.00,
            stock: 30,
            imagen: "ram32gb.png",
            socketCompatibilidad: "DIMM",
            idCategoria: categorias[3].id 
        }
    ]);
    console.log('Productos cargados.');
};