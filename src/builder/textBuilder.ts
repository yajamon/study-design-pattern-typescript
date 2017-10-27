import { Builder } from "./builder";

export class TextBuilder extends Builder {
    private buffer: string = "";

    public makeTitle(title: string) {
        this.buffer += "==========================\n";
        this.buffer += `「${title}」\n`;
        this.buffer += "\n";
    }

    public makeString(str: string) {
        this.buffer += `■${str}\n`;
        this.buffer += "\n";
    }

    public makeItems(texts: string[]) {
        this.buffer += texts.map((text) => `　・${text}\n`).join("");
        this.buffer += "\n";
    }

    public close() {
        this.buffer += "==========================\n";
    }

    public getResult(): string {
        return this.buffer;
    }
}
