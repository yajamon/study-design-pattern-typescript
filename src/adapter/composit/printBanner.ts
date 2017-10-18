import { Banner } from "./banner";
import { Print } from "./print";

export class PrintBanner extends Print {
    private banner: Banner;
    constructor(text: string) {
        super();
        this.banner = new Banner(text);
    }
    public printWeak(): string {
        return this.banner.showWithParen();
    }
    public printStrong(): string {
        return this.banner.showWithAster();
    }
}
