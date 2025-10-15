"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFeatherAlt } from "react-icons/fa";
import Link from "next/link";
import { UnifrakturMaguntia, Crimson_Text } from "next/font/google";
import type { Poetry } from "@/types/poetry";

// Fonts
const fTitle = UnifrakturMaguntia({ subsets: ['latin'], weight: '400' });
const fContent = Crimson_Text({ subsets: ['latin'], weight: ['400', '600', '700'] });

interface PoetriesListProps {
    poetries: Poetry[];
}

export default function PoetriesClient({ poetries }: PoetriesListProps) {
    const [selectedTag, setSelectedTag] = useState<string>("all");

    const allTags = ["all", ...new Set(poetries.flatMap(p => p.tags || []))];

    const filteredPoetries =
        selectedTag === "all"
            ? poetries
            : poetries.filter(p => p.tags?.includes(selectedTag));

    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, delay: 0.5 } },
    };
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { delay: 0.3 } },
        exit: { opacity: 0, y: -20, transition: { delay: 0.3 } },
    };
    const buttonVariants = { hover: { scale: 1.05 }, tap: { scale: 0.95 } };

    return (
        <section className="relative min-h-screen w-full px-6 md:px-16 py-16 text-[#3E2C18] font-serif">
            {/* Background */}
            <div className="fixed inset-0 bg-cover h-screen bg-center z-[-2]" style={{ backgroundImage: "url('/poetriesbg.jpg')" }} />
            <div className="fixed inset-0 bg-white/30 h-screen backdrop-blur-sm z-[-1]" />

            {/* Title */}
            <motion.h1
                className={`text-5xl md:text-6xl font-bold mb-10 mt-20 text-center tracking-wide text-[#502d00] ${fTitle.className}`}
                initial={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, delay: 0.5 }}
            >
                My Poetries
            </motion.h1>

            {poetries.length > 0 ?
                <>

                    {/* Tag Filter */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-3 mb-14"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        {allTags.map(tag => (
                            <motion.button
                                key={tag}
                                onClick={() => setSelectedTag(tag)}
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                className={`px-4 py-1.5 text-sm md:text-base rounded-full border transition-all duration-300 backdrop-blur-md font-medium
              ${selectedTag === tag
                                        ? "bg-[#703c00] text-white border-transparent shadow-md"
                                        : "bg-white/50 text-[#733f01] border-white/30 hover:bg-white/50 hover:shadow-sm"
                                    }`}
                            >
                                {tag.charAt(0).toUpperCase() + tag.slice(1)}
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Poetry Cards */}
                    <motion.div
                        className="flex flex-col md:flex-row md:flex-wrap gap-8 max-w-6xl mx-auto mt-10"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <AnimatePresence>
                            {filteredPoetries.map((poem, index) => (
                                <motion.div
                                    key={poem._id}
                                    layout
                                    variants={cardVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    exit="exit"
                                    className="relative flex flex-col justify-between w-full md:w-[48%] p-7 rounded-2xl border border-[#E0D4B7] shadow-inner backdrop-blur-md bg-white/60 hover:bg-white/70 transition-all duration-300"
                                >
                                    <FaFeatherAlt size={25} className="text-[#825217] absolute top-5 right-5" />

                                    {index === 0 && (
                                        <span className="w-fit mb-2 text-xs backdrop-blur-xs font-semibold bg-amber-800 text-white px-2 py-1 rounded-md shadow">
                                            Latest
                                        </span>
                                    )}

                                    <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-[#733f01]">{poem.title}</h2>

                                    <p className={`text-base md:text-lg ml-3 leading-relaxed mb-6 font-medium text-[#3E2C18]/90 ${fContent.className}`}>
                                        {`"${poem.content.split("\n")[0]?.trim() || poem.content.slice(0, 80)}..."`}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {poem.tags?.map(tag => (
                                            <span
                                                key={tag}
                                                className="text-xs font-medium px-3 py-1 rounded-md bg-[#a57400]/70 border-[#e7a200] text-white"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>

                                    <Link href={`/writer/poetries/${poem.slug.current}`}>
                                        <motion.button
                                            variants={buttonVariants}
                                            whileHover="hover"
                                            whileTap="tap"
                                            className="self-start cursor-pointer px-4 py-2 border border-[#703c00] text-[#703c00] rounded-full text-sm font-semibold hover:bg-[#703c00] hover:text-white transition-all duration-300 shadow"
                                        >
                                            Read Full →
                                        </motion.button>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </>
                :
                <div>
                    <p className=" text-center md:text-xl font-medium">No poetries found</p>
                </div>

            }

        </section>
    );
}
