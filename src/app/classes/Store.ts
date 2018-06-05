import { Product } from "./Product";
import { IStore } from "../interfaces/IStore";

export class Store implements IStore{
    constructor(public products: Product[] ) {

    }

    add(product: Product) {
        this.products.push(product);
    }

    save(id: number) {
        this.products.forEach(product => {
            if(product.id === id ) {

            }
        });
    }

    delete(id: number) {
        this.products.forEach((product, index) => {
            if(product.id === id ) {
                this.products.splice(index, 1);
            }
        });
    }

    filter(): Product[] {
        let results: Product[];

        return results;
    }
}