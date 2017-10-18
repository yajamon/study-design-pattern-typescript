import { Banner } from "./banner";
import { Print } from "./print";

export class PrintBanner extends Banner implements Print {
    public printWeak(): string {
        return this.showWithParen();
    }
    public printStrong(): string {
        return this.showWithAster();
    }
}
