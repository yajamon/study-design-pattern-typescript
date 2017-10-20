import { Singleton } from "./singleton";
import { TicketMaker } from "./ticketMaker";

console.log("start");
const obj1: Singleton = Singleton.sharedInstance();
const obj2: Singleton = Singleton.sharedInstance();

if (obj1 === obj2) {
    console.log("obj1とobj2は同じインスタンスです。");
} else {
    console.log("obj1とobj2は違うインスタンスです。");
}

console.log("end");

const maker = TicketMaker.getInstance();
console.log(`ticket number: ${maker.getNextTicketNumber()}`);
console.log(`ticket number: ${maker.getNextTicketNumber()}`);
console.log(`ticket number: ${maker.getNextTicketNumber()}`);
