import { Singleton } from "./singleton";

console.log("start");
const obj1: Singleton = Singleton.sharedInstance();
const obj2: Singleton = Singleton.sharedInstance();

if (obj1 === obj2) {
    console.log("obj1とobj2は同じインスタンスです。");
} else {
    console.log("obj1とobj2は違うインスタンスです。");
}

console.log("end");
