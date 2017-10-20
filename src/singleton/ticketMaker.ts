export class TicketMaker {
    public static getInstance(): TicketMaker {
        if (!this._instance) {
            this._instance = new TicketMaker();
        }
        return this._instance;
    }
    private static _instance: TicketMaker;
    private ticket: number = 1000;

    private constructor() {}

    public getNextTicketNumber() {
        this.ticket++;
        return this.ticket;
    }
}
