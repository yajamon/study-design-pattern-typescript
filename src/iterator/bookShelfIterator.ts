import { BookShelf } from "./bookShelf";
import { Iterator } from "./iterator";
export class BookShelfIterator implements Iterator {
    private index = 0;
    constructor(private bookShelf: BookShelf) {
    }

    public hasNext(): boolean {
        if (this.index < this.bookShelf.length) {
            return true;
        }
        return false;
    }

    public next(): any {
        const book = this.bookShelf.bookAt(this.index);
        this.index++;
        return book;
    }
}
