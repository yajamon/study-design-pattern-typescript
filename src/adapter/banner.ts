export class Banner {
    constructor(private text: string) {
    }
    public showWithParen() {
        return `(${this.text})`;
    }
    public showWithAster() {
        return `*${this.text}*`;
    }
}
