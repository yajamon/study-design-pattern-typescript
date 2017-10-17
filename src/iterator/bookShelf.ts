import { Aggregate } from "./aggregate";
import { Book } from "./book";
export class BookShelf implements Aggregate {
    private books: Book[] = [];
}
