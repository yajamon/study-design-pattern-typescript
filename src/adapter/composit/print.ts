export abstract class Print {
    abstract public printWeak(): string;   // ()で文字列を包む
    abstract public printStrong(): string; // **で文字列を包む
}
