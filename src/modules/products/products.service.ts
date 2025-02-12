import {productsRepository} from './products.repository'

export class productsService {
    private newProductsRepository = new productsRepository;

     getItemById = async(id:string) => {
        return await this.newProductsRepository.findById(id)
    }

    findAll = async () =>{
        return await this.newProductsRepository.findAll()
    }

    deleteById = async (id:string) => {
        return await this.newProductsRepository.deleteById(id)
    }

    create = async (name:string, description:string) => {
        return await this.newProductsRepository.create(name, description)
    }
    update = async (id:string, name:string, description:string) => {
        return await this.newProductsRepository.update(id, name, description)
    }
}