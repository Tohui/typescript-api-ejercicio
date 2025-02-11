import { productsService } from "../modules/products/products.service";

const service = new productsService();

async function testService() {
        const result = await service.getItemById("3"); // Cambia por un ID válido en tu DB
        console.log("Resultado:", result);
}

testService();
