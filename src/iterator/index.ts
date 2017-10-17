import { Book } from "./book";
import { BookShelf } from "./bookShelf";

const shelf = new BookShelf();

shelf.appendBook(new Book("A first commit"));
shelf.appendBook(new Book("Book for specialist"));
shelf.appendBook(new Book("CrashReport HELL"));

const it = shelf.iterator();
while (it.hasNext()) {
    const book = it.next();
    console.log("book name is", book.name);

}
