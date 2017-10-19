import { CharDisplay } from "./charDisplay";
import { StringDisplay } from "./stringDisplay";

console.log("CharDisplay");
const cd = new CharDisplay("a");
cd.display();

console.log("");
console.log("StringDisplay");
const sd = new StringDisplay("Hello world.");
sd.display();
