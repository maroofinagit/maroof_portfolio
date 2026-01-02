"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaBookOpen } from "react-icons/fa";
import { Montserrat } from "next/font/google";
import type { Book } from "@/types/book";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ["latin"] });

interface BooksListProps {
    books: Book[];
}

export default function BooksClient({ books }: BooksListProps) {
    return (
        <section
            className={`relative min-h-screen w-full px-6 md:px-16 py-16 text-[#733f01] font-serif ${montserrat.className}`}
        >
            {/* Background */}
            <div
                className="fixed inset-0 bg-cover bg-center z-[-2]"
                style={{ backgroundImage: "url('/booksbg.jpg')" }}
            />
            <div className="fixed inset-0 bg-white/60 backdrop-blur-xs z-[-1]" />

            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-5xl md:text-6xl font-bold mb-8 mt-20 text-center tracking-wide text-[#4e2b00]"
            >
                My Books
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="max-w-3xl mx-auto text-center font-medium mb-14 text-base md:text-xl text-[#4e2b00] italic"
            >
                Explore my collection of published works, from heartfelt poetry to
                captivating novels. Each book is a journey into themes of love, faith,
                and self-discovery, crafted to inspire and resonate with readers.
            </motion.p>

            {books.length > 0 ? (
                <motion.div
                    className="flex flex-col gap-8 max-w-6xl mx-auto mt-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <AnimatePresence>
                        {books.map((book) => (
                            <motion.div
                                key={book._id}
                                whileHover={{ scale: 1.02 }}
                                exit={{ opacity: 0 }}
                                className="relative flex flex-col md:flex-row w-full p-6 rounded-2xl border border-[#E0D4B7] shadow-inner backdrop-blur-md bg-white/30 hover:bg-white/50 transition-all duration-300 justify-center gap-x-4 gap-y-4"
                            >
                                <FaBookOpen
                                    size={22}
                                    className="text-[#825217] absolute bottom-5 right-5"
                                />

                                {/* LEFT — BOOK COVER */}
                                <div className="relative md:w-1/4 h-64 md:h-96 md:aspect-[11/17] flex-shrink-0 rounded-xl overflow-hidden border border-[#D3C4A3] shadow-md">
                                    <Image
                                        src={book.coverImage}
                                        alt={book.title}
                                        fill
                                        className="object-contain md:object-cover"
                                    />
                                </div>

                                {/* RIGHT — BOOK INFO */}
                                <div className="flex flex-col justify-center md:pl-6 gap-y-4">
                                    <h2 className=" text-xl md:text-2xl font-bold text-[#583000]">
                                        {book.title}
                                    </h2>

                                    <p className=" text-gray-700 text-xs md:text-base whitespace-pre-line tracking-wider">
                                        {book.description}
                                    </p>

                                    <p className="font-semibold text-[#703c00]">
                                        ₹{book.price}
                                    </p>

                                    <Link href={`/writer/books/${book.slug}`}>
                                        <button className="px-4 py-2 cursor-pointer rounded-md text-sm bg-transparent border border-[#733f01] font-medium shadow hover:bg-[#733f01] hover:text-white transition-all duration-300">
                                            View Book →
                                        </button>
                                    </Link>
                                </div>
                            </motion.div>

                        ))}
                    </AnimatePresence>
                </motion.div>
            ) : (
                <p className="text-center text-gray-500 md:text-xl font-medium">
                    No books available
                </p>
            )}
        </section>
    );
}
