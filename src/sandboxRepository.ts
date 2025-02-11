import { productsRepository } from './modules/products/products.repository';

const errorMessage = (error:(any | unknown)) => {
    console.log(`Error al ejecutar la función: ${error}`)
}

//==============================================================

const prueba = async () => {
    const repository = new productsRepository();

    try {
        const result = await repository.findById('2'); // Cambia el ID según lo que quieras probar
        console.log(result); // Muestra el resultado en consola
    } catch (error) {
        console.error('Error al ejecutar la función:', error);
    }
};

const prueba2 = async() => {
    const repository = new productsRepository
    try {
        const result = await repository.findAll()
        console.log(result)
        
    } catch (error) {
        errorMessage(error)
    }
}

const prueba3 = async () => {
    const repository = new productsRepository;
    try {
        await repository.deleteById('2')
    } catch (error) {
        errorMessage(error)
    }
}

const prueba4 = async () => {
    const repository = new productsRepository;
    try {
        await repository.create('Papitas','Con queso')
    } catch (error) {
        
    }
}

const prueba5 = async () => {
    const repository = new productsRepository
    try {
        await repository.update('7','Doritos','Con jalapeno')
    } catch (error) {
        
    }
}

//prueba();
//prueba4()

//prueba3()

//prueba5()
prueba2()

