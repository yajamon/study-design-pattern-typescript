import { Factory } from "./factory";
import { IDCard } from "./idCard";
import { Product } from "./product";

export class IDCardFactory extends Factory {
    private _owners: string[] = [];
    private _nextId: number = 1;

    public get owners(): string[] {
        return this._owners.slice();
    }

    protected createProduct(owner: string) {
        const idCard = new IDCard(owner, this._nextId);
        this._nextId++;
        return idCard;
    }

    protected registerProduct(product: Product) {
        if (!(product instanceof IDCard)) {
            throw TypeError(`Invalid argument Type. Expect IDCard. but set ${typeof product}`);
        }
        const idCard = product as IDCard;
        this._owners[idCard.number] = idCard.owner;
    }
}
