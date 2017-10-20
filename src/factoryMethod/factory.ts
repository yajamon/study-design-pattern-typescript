import { Product } from "./product";

export abstract class Factory {
    protected abstract createProduct(owner: string): Product;
    protected abstract registerProduct(product: Product): void;
}
