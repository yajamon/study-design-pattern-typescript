import { Book } from "./book";
import { BookShelf } from "./bookShelf";

const shelf = new BookShelf();

shelf.appendBook(new Book("A first commit"));

const it = shelf.iterator();
while (it.hasNext()) {
    const book = it.next();
    console.log("book name is", book.name);

}
