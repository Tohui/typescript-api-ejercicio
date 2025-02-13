import { Router} from "express";
import {productController} from './products.controller'

const productControllerOBJ = new productController();
const router = Router(); 

router.post("/create", productControllerOBJ.create)
router.get("/getall",productControllerOBJ.getAll)
router.get('/getbyid/:id',productControllerOBJ.getById)
router.put('/update/:id',productControllerOBJ.update)
router.delete('/delete/:id',productControllerOBJ.delete)

export default router;

