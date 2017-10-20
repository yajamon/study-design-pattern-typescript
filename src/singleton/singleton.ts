export class Singleton {
    public static sharedInstance(): Singleton {
        return this._instance;
    }
    private static _instance: Singleton = new Singleton();
    private constructor() {
        console.log("インスタンスを生成しました。");
    }
}
