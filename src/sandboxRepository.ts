import { productsRepository } from './modules/products/products.repository';

const prueba = async () => {
    const repo = new productsRepository();

    try {
        const result = await repo.findById('2'); // Cambia el ID según lo que quieras probar
        console.log(result); // Muestra el resultado en consola
    } catch (error) {
        console.error('Error al ejecutar la función:', error);
    }
};

prueba();
