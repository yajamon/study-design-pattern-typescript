import * as process from "process";
import { Product } from "./product";

export class IDCard extends Product {
    constructor(public readonly owner: string, public readonly number: number) {
        super();
        process.stdout.write(`${this.owner}のカードを作ります。\n`);
    }
    public use() {
        process.stdout.write(`${this.owner}のカードを使います。\n`);
    }
}
