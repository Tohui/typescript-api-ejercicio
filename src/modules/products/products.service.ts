import {productsRepository} from './products.repository'

export class productsService {
    private newProductsRepository = new productsRepository;

     getItemById = async(id:string) => {
        return await this.newProductsRepository.findById(id)
    }
}