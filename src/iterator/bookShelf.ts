import { Aggregate } from "./aggregate";
import { Book } from "./book";
import { BookShelfIterator } from "./bookShelfIterator";
import { Iterator } from "./iterator";
export class BookShelf implements Aggregate {
    private books: Book[] = [];

    get length(): number {
        return this.books.length;
    }

    public appendBook(book: Book) {
        this.books.push(book);
    }
    public bookAt(index: number): Book {
        return this.books[index];
    }

    public iterator(): Iterator {
        return new BookShelfIterator(this);
    }
}
