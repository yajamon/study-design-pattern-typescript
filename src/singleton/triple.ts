export class Triple {
    public static sharedInstance(id: number): Triple {
        if (id < 0 || 2 < id) { throw new Error("Bad Id. Expect 0-2"); }
        const index = Math.floor(id);
        if (!this._instanceMap[index]) {
            this._instanceMap[index] = new Triple();
        }
        return this._instanceMap[index];
    }
    private static _instanceMap: Triple[] = [];
    private constructor() {
        console.log("インスタンスを生成しました。");
    }
}
