export abstract class Display {
    public display() {
        this.open();
        for (let i = 0; i < 5; i++) {
            this.print();
        }
        this.close();
    }

    public abstract open(): void;
    public abstract print(): void;
    public abstract close(): void;
}
