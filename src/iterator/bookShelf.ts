import { Aggregate } from "./aggregate";
import { Book } from "./book";
export class BookShelf implements Aggregate {
    private books: Book[] = [];
    private last: number = 0;

    public appendBook(book: Book) {
        this.books.push(book);
        this.last = this.books.length - 1;
    }
}
