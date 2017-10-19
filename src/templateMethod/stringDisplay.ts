import * as process from "process";
import { Display } from "./display";

export class StringDisplay extends Display {
    constructor(private text: string) {
        super();
    }

    public open() {
        process.stdout.write("<<");
    }

    public print() {
        process.stdout.write(this.text);
    }
    public close() {
        process.stdout.write(">>");
    }
}
