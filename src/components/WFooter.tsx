"use client";
import React, { useState, useEffect } from "react";
import { motion, easeOut } from "framer-motion";
import { FaInstagram, FaLinkedin, FaFeatherAlt } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const WFooter = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: easeOut,
                when: "beforeChildren",
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
    };

    const [year, setYear] = useState<number | null>(null);
    useEffect(() => setYear(new Date().getFullYear()), []);

    const navLinks = [
        { name: "Home", href: "/writer" },
        { name: "Poetries", href: "writer/poetries" },
        { name: "Blogs", href: "/writer/blogs" },
        { name: "Contact", href: "#wcontact" },
    ];

    return (
        <footer className="bg-gradient-to-br from-[#591f00] to-[#000000] text-white py-10 relative z-50 border-t border-gray-800">
            <motion.div
                className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
            >
                {/* Left Side */}
                <motion.div className="text-center md:text-left mb-6 md:mb-0" variants={itemVariants}>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-white">
                        <FaFeatherAlt className="text-xl text-rose-400" />
                        <h2 className="text-2xl font-bold">Maroof Ali Syed</h2>
                    </div>
                    <p className="text-sm text-gray-400 mt-1 italic">
                        Writer | Poet | Storyteller of Silences
                    </p>
                </motion.div>

                {/* Middle Links */}
                <motion.div
                    className="flex justify-center space-x-8 mb-6 md:mb-0"
                    variants={containerVariants}
                >
                    {navLinks.map((link, i) => (
                        <motion.a
                            key={i}
                            href={link.href}
                            className="hover:text-rose-400 transition-colors duration-300"
                            variants={itemVariants}
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </motion.div>

                {/* Social Icons */}
                <motion.div className="flex justify-center space-x-6" variants={containerVariants}>
                    <motion.a
                        href="https://linkedin.com/in/maroofalysyed"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-rose-400 text-2xl"
                        variants={itemVariants}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaLinkedin />
                    </motion.a>
                    <motion.a
                        href="https://x.com/maroofalysyed"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-rose-400 text-2xl"
                        variants={itemVariants}
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaSquareXTwitter />
                    </motion.a>
                    <motion.a
                        href="https://instagram.com/maroofalysyed"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-rose-400 text-2xl"
                        variants={itemVariants}
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaInstagram />
                    </motion.a>
                </motion.div>
            </motion.div>

            {/* Bottom Line */}
            <motion.div
                className="mt-8 border-t border-gray-500 pt-4 text-center text-sm text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
            >
                © {year ?? ""} Maroof Ali Syed. Words woven with heartbeats.
            </motion.div>
        </footer>
    );
};

export default WFooter;
