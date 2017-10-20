export class Singleton {
    public static sharedInstance(): Singleton {
        if (!this._instance) {
            this._instance = new Singleton();
        }
        return this._instance;
    }
    private static _instance: Singleton;
    private constructor() {
        console.log("インスタンスを生成しました。");
    }
}
