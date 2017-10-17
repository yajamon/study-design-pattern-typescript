import { Book } from "./book";
import { BookShelf } from "./bookShelf";

const shelf = new BookShelf();

shelf.appendBook(new Book("A first commit"));

const iterator = shelf.iterator();
while (iterator.hasNext()) {
    const book = iterator.next();
    console.log("book name is", book.name);

}
