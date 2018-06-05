import { IProduct } from "../interfaces/IProduct";

export class Product implements IProduct{
    constructor(public id: number, public name: string, public price: number, public description: string) {
        
    }   
}