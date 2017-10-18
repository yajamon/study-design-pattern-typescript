export interface Print {
    printWeak: () => string;   // ()で文字列を包む
    printStrong: () => string; // **で文字列を包む
}
