import { Factory } from "./factory";
import { IDCard } from "./idCard";
import { Product } from "./product";

export class IDCardFactory extends Factory {
    private _owners: string[] = [];

    public get owners(): string[] {
        return this._owners.slice();
    }

    protected createProduct(owner: string) {
        return new IDCard(owner);
    }

    protected registerProduct(product: Product) {
        if (!(product instanceof IDCard)) {
            throw TypeError(`Invalid argument Type. Expect IDCard. but set ${typeof product}`);
        }
        this._owners.push((product as IDCard).owner);
    }
}
