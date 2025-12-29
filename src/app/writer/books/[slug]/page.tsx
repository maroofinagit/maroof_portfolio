import Image from "next/image";
import books from "@/data/BookData";
import { Book } from "@/types/book";
import { Montserrat } from "next/font/google";
import BookDetail from "@/components/BookDetail";

const montserrat = Montserrat({ subsets: ["latin"] });

type BookPageProps = {
    params: Promise<{ slug: string }>;
};

export default async function BookPage({ params }: BookPageProps) {
    const { slug } = await params;
    const book: Book | undefined = books.find((b) => b.slug === slug);

    if (!book) {
        return (
            <div className="max-w-7xl mx-auto px-6 py-16">
                <h1 className="text-3xl font-semibold">Book Not Found</h1>
                <p className="mt-4 text-gray-600">The book you are looking for does not exist.</p>
            </div>
        );
    }

    return <BookDetail book={book} />;
}

