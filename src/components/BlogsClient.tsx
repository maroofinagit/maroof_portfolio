"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaBookOpen } from "react-icons/fa";
import { Montserrat } from "next/font/google";
import type { Blog } from "@/types/blog";
import { urlFor } from "@/lib/sanity";
import blog from "../../maroof-portfolio-cms/schemaTypes/blog";

const montserrat = Montserrat({ subsets: ["latin"] });

interface BlogsListProps {
    blogs: Blog[];
}

export default function BlogsList({ blogs }: BlogsListProps) {

    const [selectedTag, setSelectedTag] = useState<string>("All");

    const allTags = ["All", ...Array.from(new Set(blogs.flatMap((b) => b.tags || [])))];

    const filteredBlogs =
        selectedTag === "All"
            ? blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            : blogs.filter((b) => b.tags?.includes(selectedTag));

    return (
        <section
            className={`relative min-h-screen w-full px-6 md:px-16 py-16 text-[#733f01] font-serif ${montserrat.className}`}
        >
            {/* Background */}
            <div
                className="fixed inset-0 bg-cover bg-center z-[-2]"
                style={{ backgroundImage: "url('/blogsbg.jpg')" }}
            />
            <div className="fixed inset-0 bg-white/30 backdrop-blur-sm z-[-1]" />

            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-5xl md:text-6xl font-bold mb-10 mt-20 text-center tracking-wide text-[#4e2b00]"
            >
                My Blogs
            </motion.h1>

            {
                blogs.length > 0 ?
                    <>
                        {/* Tag Filter */}
                        <motion.div
                            className="flex flex-wrap justify-center gap-3 mb-14"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            {allTags.map((tag) => (
                                <motion.button
                                    key={tag}
                                    onClick={() => setSelectedTag(tag)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`px-4 py-1.5 text-sm md:text-base rounded-full border transition-all duration-300 backdrop-blur-md font-medium ${selectedTag === tag
                                        ? "bg-[#703c00] text-white border-transparent shadow-md"
                                        : "bg-white/50 text-[#733f01] border-white/30 hover:bg-white/70"
                                        }`}
                                >
                                    {tag}
                                </motion.button>
                            ))}
                        </motion.div>

                        {/* Blog Cards */}
                        <motion.div
                            className="flex flex-col md:flex-row md:flex-wrap gap-8 max-w-6xl mx-auto mt-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <AnimatePresence>
                                {filteredBlogs.map((blog) => (
                                    <motion.div
                                        key={blog._id}
                                        whileHover={{ scale: 1.02 }}
                                        exit={{ opacity: 0 }}
                                        className="relative flex flex-col w-full md:w-[48%] p-6 rounded-2xl border border-[#E0D4B7] shadow-inner backdrop-blur-md bg-white/60 hover:bg-white/70 transition-all duration-300"
                                    >
                                        <FaBookOpen size={25} className="text-[#825217] absolute bottom-5 right-5" />

                                        <img
                                            src={urlFor(blog.cover).url()}
                                            alt={blog.title}
                                            className="rounded-xl mb-4 object-cover h-48 w-full"
                                        />

                                        <h2 className="text-xl font-bold mb-3 text-[#583000]">{blog.title}</h2>

                                        <p className="text-sm text-gray-700 italic mb-4">{blog.desc}</p>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {blog.tags?.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-xs font-medium px-3 py-1 rounded-md bg-[#b77100]/80 border-[#e7a200] text-white"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>

                                        <Link href={`/writer/blogs/${blog.slug.current}`}>
                                            <button className="px-4 cursor-pointer py-2 mt-auto rounded-md text-sm bg-transparent border border-[#733f01] font-medium shadow hover:bg-[#733f01] hover:text-white transition-all duration-300">
                                                Read More →
                                            </button>
                                        </Link>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    </>
                    :
                    <div>
                        <p className=" text-center text-gray-500 md:text-xl font-medium">No blogs found</p>
                    </div>

            }

        </section>
    );
}
