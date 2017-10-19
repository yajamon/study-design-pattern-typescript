import { Display } from "./display";

export class CharDisplay extends Display {
    private ch: string;
    constructor(text: string) {
        super();
        if (text.length > 1) {
            this.ch = text[0];
            return;
        }
        this.ch = text;
    }

    public open() {
        console.log("<<");
    }

    public print() {
        console.log(this.ch);
    }
    public close() {
        console.log(">>");
    }
}
