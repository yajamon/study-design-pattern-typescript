import { Aggregate } from "./aggregate";
import { Book } from "./book";
export class BookShelf implements Aggregate {
    private books: Book[] = [];

    get length(): number {
        return this.books.length;
    }

    public appendBook(book: Book) {
        this.books.push(book);
    }
}
