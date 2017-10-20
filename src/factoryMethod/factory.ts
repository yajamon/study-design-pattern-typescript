import { Product } from "./product";

export abstract class Factory {
    public create(owner: string): Product {
        const p = this.createProduct(owner);
        this.registerProduct(p);
        return p;
    }
    protected abstract createProduct(owner: string): Product;
    protected abstract registerProduct(product: Product): void;
}
