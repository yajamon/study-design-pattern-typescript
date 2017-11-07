export abstract class Item {
    constructor(protected caption: string) {
    }
    public abstract makeHtml(): string;
}
