import {productsRepository} from './products.repository'

export class productsService {
    private newProductsRepository = new productsRepository;

    getItemById = async (id:string) => await this.newProductsRepository.findById(id);
    
    findAll = async() => await this.newProductsRepository.findAll();
    
    deleteById = async (id:string) => await this.newProductsRepository.deleteById(id);

    create = async (name:string, description:string) => await this.newProductsRepository.create(name, description);

    update = async (id:string, name:string, description:string) => await this.newProductsRepository.update(id, name, description);
}