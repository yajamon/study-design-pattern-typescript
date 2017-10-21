import { Product } from "./product";

export class MessageBox {
    private decoChar = "";
    constructor(char: string) {
        this.decoChar = char.charAt(0);
    }
    public use(text: string) {
        const fence = this.decoChar.repeat(text.length + 4);
        console.log(fence);
        console.log(`${this.decoChar} ${text} ${this.decoChar}`);
        console.log(fence);
    }
    public createClone(): Product {
        const clone = new MessageBox(this.decoChar);
        return Object.assign(clone, this);
    }
}
