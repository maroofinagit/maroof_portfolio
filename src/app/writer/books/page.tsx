// app/books/page.tsx
import BooksClient from "@/components/BooksClient";
import books from "@/data/BookData";
import { Book } from "@/types/book";


export default function BooksPage() {
    return <BooksClient books={books} />;
}
