export abstract class Print {
    public abstract printWeak(): string;   // ()で文字列を包む
    public abstract printStrong(): string; // **で文字列を包む
}
