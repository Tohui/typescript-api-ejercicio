import {Request, Response} from 'express'
import {productsService} from './products.service'

const messageNameModule = (apiName:string) => {
    console.log(`[Products] ==> ${apiName}`)
}

const handleRequest = (fn: (req: Request, res: Response) => Promise<any>) => 
    async (req: Request, res: Response) => {
        try {
            await fn(req, res);
        } catch (error) {
            console.error(`❌ Error en ${req.path}:`, error);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    };


export class productController {
    private  productService = new productsService();

    create = handleRequest(async (req, res) => {
        messageNameModule('Create');
        const productData = req.body;
        res.status(201).json(await this.productService.create(productData.name, productData.description));
    });

    getAll = handleRequest(async (req, res) => {
        messageNameModule('GetAll');
        res.status(200).json(await this.productService.findAll());
    });

    getById = handleRequest(async (req, res) => {
        messageNameModule('GetById');
        const { id } = req.params;
        res.status(200).json(await this.productService.getItemById(id));
    });

    update = handleRequest(async (req, res) => {
        messageNameModule('Update');
        const { id } = req.params;
        const productData = req.body;
        res.status(200).json(await this.productService.update(id, productData.name, productData.description));
    });

    delete = handleRequest(async (req, res) => {
        messageNameModule('Delete');
        const { id } = req.params;
        res.status(200).json(await this.productService.deleteById(id));
    });
}