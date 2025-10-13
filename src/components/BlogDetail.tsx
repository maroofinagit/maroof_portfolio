"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Montserrat } from "next/font/google";
import { PortableText } from "@portabletext/react";
import { Blog } from "@/types/blog";
import { urlFor } from "@/lib/sanity";

const montserrat = Montserrat({ subsets: ["latin"] });

interface BlogDetailProps {
    blog: Blog;
}

export default function BlogDetail({ blog }: BlogDetailProps) {
    return (
        <section
            className={`min-h-screen relative px-6 md:px-24 py-20 flex items-center justify-center flex-col text-[#3E2C18] ${montserrat.className}`}
        >
            {/* Background */}
            <div
                className="fixed inset-0 bg-cover bg-center h-screen z-[-2]"
                style={{ backgroundImage: "url('/blogbg.jpg')" }}
            />
            <div className="fixed h-screen inset-0 bg-white/30 z-[-1]" />

            {/* Cover Image */}
            <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden mt-20 mb-16 shadow-lg">
                <img
                    src={urlFor(blog.cover).url()}
                    alt={blog.title}
                    className="w-full h-36 md:h-96 object-cover filter brightness-[30%]"
                />
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 flex items-center justify-center text-center text-white text-2xl md:text-6xl font-bold px-4"
                >
                    {blog.title}
                </motion.h1>
            </div>

            <p className="text-center text-sm text-[#856a45] mb-8">
                {new Date(blog.date).toLocaleDateString()}
            </p>

            {/* Content */}
            <div className="relative py-4 gap-y-4 flex flex-col">
                <FaQuoteLeft size={30} className="self-start" />
                <article className="max-w-4xl mx-auto font-medium text-sm md:text-lg [&>p]:mb-4 [&>p]:leading-loose [&>p]:whitespace-pre-line">
                    <PortableText value={blog.content || []} />
                </article>
                <FaQuoteRight size={30} className="self-end" />
            </div>
        </section>
    );
}
