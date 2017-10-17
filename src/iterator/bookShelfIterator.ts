import { BookShelf } from "./bookShelf";
import { Iterator } from "./iterator";
export class BookShelfIterator implements Iterator {
    private index = 0;
    constructor(private bookShelf: BookShelf) {
    }
}
