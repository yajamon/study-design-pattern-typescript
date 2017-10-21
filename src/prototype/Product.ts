export interface Product {
    use(text: string): void;
    createClone(): Product;
}
