"use client";

import { useState } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { Book } from "@/types/book";

const montserrat = Montserrat({ subsets: ["latin"] });


export default function BookDetail({ book }: { book: Book }) {
    const [activeImage, setActiveImage] = useState(book.coverImage);

    return (
        <section
            className={`relative mt-20 min-h-screen w-full px-6 md:px-16 py-16 text-[#733f01] font-serif ${montserrat.className}`}
        >
            {/* Background */}
            <div
                className="fixed inset-0 bg-cover bg-center z-[-2]"
                style={{ backgroundImage: "url('/bookbg.jpg')" }}
            />
            <div className="fixed inset-0 bg-white/60 backdrop-blur-xs z-[-1]" />

            {/* CONTENT */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">

                {/* LEFT — IMAGE GALLERY */}
                <div className="flex flex-col items-center">
                    {/* Main Image */}
                    <div className="relative h-[26rem] aspect-square bg-black/15 rounded-xs overflow-hidden shadow-2xl">
                        <Image
                            src={activeImage}
                            alt={book.title}
                            fill
                            className="object-contain object-center p-4 shadow-2xl"
                            priority
                        />
                    </div>

                    {/* Thumbnails */}
                    {book.previewImages && (
                        <div className="flex gap-4 mt-6">
                            {[book.coverImage, ...book.previewImages].map(
                                (img, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveImage(img)}
                                        className={`relative w-20 aspect-[11/17] rounded-md overflow-hidden border transition
                                        ${activeImage === img
                                                ? "border-[#733f01]"
                                                : "border-transparent hover:border-[#733f01]/40"
                                            }`}
                                    >
                                        <Image
                                            src={img}
                                            alt="Book preview"
                                            fill
                                            className="object-cover object-center bg-[#eaeaea]"
                                        />
                                    </button>
                                )
                            )}
                        </div>
                    )}
                </div>

                {/* RIGHT — BOOK DETAILS */}
                <div className="flex flex-col justify-center">
                    <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
                        {book.title}
                    </h1>

                    <p className="mt-6 text-base tracking-wide leading-relaxed text-[#5c3200]">
                        {book.description}
                    </p>

                    {/* Price */}
                    <div className="mt-8 text-2xl font-semibold">
                        ₹{book.price}
                    </div>

                    {/* Metadata */}
                    <div className="mt-10 flex gap-4">
                        {book.status == 'published' ?
                            <button
                                className="px-8 py-2 bg-[#733f01] text-white rounded-md hover:bg-[#5c3200] transition"
                            >
                                Buy Now
                            </button> :
                            <span className="px-4 py-2 bg-[#733f01] text-white hover:bg-[#5c3200] rounded-md font-medium">
                                {book.status}
                            </span>
                        }
                    </div>

                    <h2 className="mt-12 text-2xl font-semibold">
                        Book Details :
                    </h2>

                    <div className="mt-8 space-y-2 text-sm">

                        <p>
                            <span className="font-semibold">Language:</span>{" "}
                            {book.language}
                        </p>

                        <p>
                            <span className="font-semibold">Genre:</span>{" "}
                            {book.genre}
                        </p>

                        {book.pageCount && (
                            <p>
                                <span className="font-semibold">Pages:</span>{" "}
                                {book.pageCount}
                            </p>
                        )}

                        {book.binding && (
                            <p>
                                <span className="font-semibold">Binding:</span>{" "}
                                {book.binding}
                            </p>
                        )}

                        {book.longDescription && (
                            <div className="mt-6">
                                <h3 className="text-xl font-semibold mb-4">
                                    About this book:
                                </h3>
                                <p className=" tracking-wide whitespace-pre-line leading-relaxed text-[#5c3200]">
                                    {book.longDescription}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* CTA */}
                </div>
            </div>
        </section>
    );
}
