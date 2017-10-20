export class TicketMaker {
    private ticket: number = 1000;
    public getNextTicketNumber() {
        this.ticket++;
        return this.ticket;
    }
}
