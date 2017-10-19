import * as process from "process";
import { Display } from "./display";

export class StringDisplay extends Display {
    constructor(private text: string) {
        super();
    }

    public open() {
        process.stdout.write(this.fence() + "\n");
    }

    public print() {
        process.stdout.write(`|${this.text}|` + "\n");
    }
    public close() {
        process.stdout.write(this.fence() + "\n");
    }

    private fence(): string {
        const bar = "-".repeat(this.text.length);
        return `+${bar}+`;
    }
}
