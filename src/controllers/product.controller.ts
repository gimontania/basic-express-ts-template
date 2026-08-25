import { type Request, type Response } from "express";
import { getallProducts } from "../models/product.model.js"; //importamos la función del modelo

//Función para obtener todos los productos
export const getMenu = async (req: Request, res: Response) => {
    /*#swagger.tags = ['Products']
    #swagger.summary = 'Obtener todos los productos'*/

    try{
        const products = await
    }

}