import { Print } from "./print";
import { PrintBanner } from "./printBanner";

const banner: Print = new PrintBanner("Hello");

console.log(banner.printWeak());
console.log(banner.printStrong());
