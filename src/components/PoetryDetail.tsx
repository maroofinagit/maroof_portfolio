"use client";

import { motion } from "framer-motion";
import { FaFeatherAlt } from "react-icons/fa";
import Link from "next/link";
import { UnifrakturMaguntia, Crimson_Text } from "next/font/google";
import { Poetry } from "@/types/poetry";

// Fonts
const fTitle = UnifrakturMaguntia({ subsets: ["latin"], weight: "400" });
const fContent = Crimson_Text({ subsets: ["latin"], weight: ["400", "600", "700"] });

interface PoetryDetailProps {
    poetry: Poetry | null;
}

export default function PoetryDetail({ poetry }: PoetryDetailProps) {
    return (
        <section className="relative min-h-screen flex-col flex justify-center items-center w-full px-6 md:px-20 py-16 text-[#3E2C18] font-serif">
            {/* Background */}
            <div
                className="fixed inset-0 h-screen bg-cover bg-center z-[-2]"
                style={{ backgroundImage: "url('/poetrybg.jpg')" }}
            />
            <div className="fixed h-screen inset-0 z-[-1]" />

            {/* Feather Icon */}
            <motion.div
                className="absolute top-30 right-10 text-[#825217]"
                initial={{ opacity: 0, rotate: -30, y: -20 }}
                animate={{ opacity: 1, rotate: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <FaFeatherAlt size={30} />
            </motion.div>

            {
                poetry ?
                    <>

                        {/* Title */}
                        <motion.h1
                            className={`text-4xl md:text-6xl font-bold mb-10 mt-20 text-center tracking-wide text-[#502d00]`}
                            initial={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            {poetry.title}
                        </motion.h1>

                        {/* Content */}
                        <motion.p
                            className={`max-w-4xl md:w-full text-base md:text-xl leading-relaxed whitespace-pre-line text-[#3E2C18]/90 mb-10 ${fContent.className}`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            {poetry.content}
                        </motion.p>

                        {/* Tags */}
                        {poetry.tags && (
                            <motion.div
                                className="flex flex-wrap justify-center gap-2 mb-10"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.9 }}
                            >
                                {poetry.tags.map((tag: string) => (
                                    <span
                                        key={tag}
                                        className="text-xs font-medium px-3 py-1 rounded-md bg-[#a57400]/70 border-[#e7a200] text-white"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </motion.div>
                        )}

                        {/* Meanings */}
                        {poetry.meanings && poetry.meanings.length > 0 && (
                            <motion.div
                                className={`max-w-3xl w-full bg-amber-100/50 backdrop-blur-xs p-5 rounded-xl border border-[#dba017] ${fContent.className}`}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1 }}
                            >
                                <h3 className="font-extrabold text-lg mb-3 flex items-center gap-2 text-[#5A3E1B]">
                                    Meanings
                                </h3>
                                <ul className="list-disc list-inside text-[#4A341C] space-y-1">
                                    {poetry.meanings.map((m: any, idx: number) => (
                                        <li key={idx}>
                                            <span className="font-bold">{m.word}</span> :{" "}
                                            <span className="font-medium">{m.meaning}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </>
                    :
                    <div>
                        <p className=" text-center md:text-xl font-medium">Poetry not found</p>
                    </div>
            }


            {/* Back Button */}
            <motion.div
                className="flex justify-center mt-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
            >
                <Link href="/writer/poetries">
                    <button className="px-6 py-2 cursor-pointer rounded-full bg-[#703c00] text-white text-sm font-medium hover:bg-[#8a4f00] transition-all duration-300 shadow">
                        ← Back to All Poetries
                    </button>
                </Link>
            </motion.div>
        </section>
    );
}
