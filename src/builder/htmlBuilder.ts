import { Builder } from "./builder";

export class HtmlBuilder {
    private buffer: string = "";
    public makeTitle(title: string) {
        this.buffer += `<!DOCTYPE html><html><head><title>${title}</title></head><body>`;
        this.buffer += `<h1>${title}</h1>`;
    }

    public makeString(str: string) {
        this.buffer += `<p>${str}</p>`;
    }

    public makeItems(texts: string[]) {
        this.buffer += "<ul>";
        this.buffer += texts.map((text) => `<li>${text}</li>`).join("");
        this.buffer += "</ul>";
    }

    public close() {
        this.buffer += "</body></html>";
    }

    public getResult(): string {
        return this.buffer;
    }
}
