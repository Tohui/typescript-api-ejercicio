import { productsService } from "../modules/products/products.service";

const service = new productsService();

async function testServicegetById() {
        const result = await service.getItemById("6"); // Cambia por un ID válido en tu DB
        console.log("Resultado:", result);
}

const testServiceFindAll = async() =>{
    const result = await service.findAll()
    console.log(result)
}

const testServiceDeleteById = async () => {
    const result = await service.deleteById('7')
}

const testServiceCreate = async () => {
    const result = await service.create('Item nuevo','item de prueba')
    console.log(result)
} 
const testServiceUpdate = async () => {
    const result = await service.update('3','item modificado', 'Hola mundo' )
   
}

//testServicegetById();
//testServiceDeleteById()

//testServiceFindAll()
//testServiceCreate()
//testServiceUpdate()
