import { Singleton } from "./singleton";
import { TicketMaker } from "./ticketMaker";
import { Triple } from "./triple";

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

const triple0 = Triple.sharedInstance(0);
const triple1 = Triple.sharedInstance(1);
const triple2 = Triple.sharedInstance(2);
// const triple3 = Triple.sharedInstance(3);
