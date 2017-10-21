export abstract class Product {
    public abstract use(text: string): void;
    public abstract createClone(): Product;
}
