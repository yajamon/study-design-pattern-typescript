export class Banner {
    constructor(private text) {
    }
    public showWithParen() {
        return `(${this.text})`;
    }
    public showWithAster() {
        return `*${this.text}*`;
    }
}
