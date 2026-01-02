"use client";

import { useState } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { Book } from "@/types/book";
import Link from "next/link";


const montserrat = Montserrat({ subsets: ["latin"] });


export default function BookDetail({ book }: { book: Book }) {
    const [activeImage, setActiveImage] = useState(book.coverImage);

    return (
        <section
            className={`relative mt-20 min-h-screen w-full md:px-16 py-16 text-[#733f01] font-serif ${montserrat.className}`}
        >
            {/* Background */}
            <div
                className="fixed inset-0 bg-cover bg-center z-[-2]"
                style={{ backgroundImage: "url('/bookbg.jpg')" }}
            />
            <div className="fixed inset-0 bg-white/60 backdrop-blur-xs z-[-1]" />

            {/* CONTENT */}
            <div className="max-w-7xl px-8 grid grid-cols-1 md:grid-cols-2 gap-14">

                {/* LEFT — IMAGE GALLERY */}
                <div className="flex flex-col items-center gap-y-10">
                    {/* Main Image */}
                    <div className="relative min-h-80 md:h-[26rem] aspect-[3/4] md:aspect-square bg-black/15 rounded-sm overflow-hidden shadow-2xl">
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
                        <div className="flex gap-x-2 md:gap-x-4 w-full justify-center">
                            {[book.coverImage, ...book.previewImages].map(
                                (img, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveImage(img)}
                                        className={`relative w-24 aspect-[11/17] rounded-md overflow-hidden border transition
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
                <div className="flex flex-col justify-center gap-y-8">
                    <h1 className="text-2xl md:text-4xl font-semibold leading-tight">
                        {book.title}
                    </h1>

                    <p className="text-sm md:text-base tracking-wide leading-relaxed text-[#5c3200]">
                        {book.description}
                    </p>

                    {/* Price */}
                    <div className="text-2xl font-semibold">
                        ₹ {book.price}
                    </div>

                    {/* Metadata */}
                    <div className="flex flex-col gap-4">
                        {book.status === "published" ? (
                            <>
                                {/* Primary CTA — Buy Now */}
                                <button
                                    className="w-fit px-6 cursor-pointer font-medium py-2 text-sm md:text-base bg-[#733f01] text-white rounded-md hover:bg-[#5c3200] transition"
                                >
                                    Buy Now
                                </button>

                                {/* Secondary CTAs — Marketplace */}
                                <div className="flex flex-wrap gap-4">
                                    {book.amazonLink && (
                                        <Link
                                            href={book.amazonLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 md:px-6 py-2 font-medium text-sm md:text-base border border-[#733f01] text-[#733f01] rounded-md hover:bg-[#733f01] hover:text-white transition"
                                        >
                                            Buy from Amazon
                                        </Link>
                                    )}

                                    {book.flipkartLink && (
                                        <Link
                                            href={book.flipkartLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-4 md:px-6 py-2 font-medium text-sm md:text-base border border-[#733f01] text-[#733f01] rounded-md hover:bg-[#733f01] hover:text-white transition"
                                        >
                                            Buy from Flipkart
                                        </Link>
                                    )}
                                </div>
                            </>
                        ) : (
                            <span className="px-4 py-2 text-sm md:text-base bg-[#733f01] text-white rounded-md font-medium w-fit">
                                {book.status}
                            </span>
                        )}
                    </div>



                    <h2 className="mt-8 text-2xl font-semibold">
                        Book Details :
                    </h2>

                    <div className="space-y-2 text-sm">

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
                            <div className="mt-8">
                                <h3 className="text-xl font-semibold mb-4">
                                    About this book:
                                </h3>
                                <p className="text-sm tracking-wide whitespace-pre-line leading-relaxed text-[#5c3200]">
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
