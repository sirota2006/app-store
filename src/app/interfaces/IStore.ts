import { Product } from "../classes/Product";

export interface IStore {
    products: Product[];

    add(product: Product): void;
    save(id: number): void;
    delete(id: number): void;
    filter(): Product[];
}