import * as process from "process";
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
        process.stdout.write("<<");
    }

    public print() {
        process.stdout.write(this.ch);
    }
    public close() {
        process.stdout.write(">>");
    }
}
