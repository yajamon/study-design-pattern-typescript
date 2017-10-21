import { Product } from "./product";

export class UnderlinePen {
    private ulChar = "";
    constructor(char: string) {
        this.ulChar = char.charAt(0);
    }
    public use(text: string) {
        console.log(`"${text}"`);
        console.log(` ${this.ulChar.repeat(text.length)} `);
    }
    public createClone(): Product {
        const clone = new UnderlinePen(this.ulChar);
        return Object.assign(clone, this);
    }
}
