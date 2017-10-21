import { Product } from "./product";

export class Manager {
    private showcase = new Map<string, Product>();

    public register(name: string, proto: Product): void {
        this.showcase.set(name, proto);
    }
    public create(name: string): Product {
        const base = this.showcase.get(name);
        if (!base) { throw new Error("Does't register : " + name); }

        return base.createClone();
    }
}
