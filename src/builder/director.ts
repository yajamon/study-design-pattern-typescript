import { Builder } from "./builder";

export class Director {
    constructor(private builder: Builder) {
    }

    public construct() {
        const builder = this.builder;
        builder.makeTitle("Greeting");
        builder.makeString("朝から昼にかけて");
        builder.makeItems([
            "お早うございます。",
            "こんにちは。",
        ]);
        builder.makeString("夜に");
        builder.makeItems([
            "こんばんは。",
            "おやすみなさい。",
            "さようなら",
        ]);
        builder.close();
    }
}
