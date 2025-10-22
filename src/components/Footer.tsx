// Footer.jsx
"use client";
import React, { useState, useEffect } from "react";
import { motion, easeOut } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


const Footer = () => {
    // Parent variant for stagger animation
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

    const navLinks = [
        { name: "Home", href: "#/" },
        { name: "About", href: "#about" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Contact", href: "#contact" },
    ];



    // Child fade-up animation
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
    };

    const [year, setYear] = useState<number | null>(null);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="bg-gradient-to-br from-[#002e16] to-black text-gray-400 py-10 relative z-50">
            <motion.div
                className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
            >
                {/* Left Side */}
                <motion.div
                    className="text-center md:text-left mb-6 md:mb-0"
                    variants={itemVariants}
                >
                    <h2 className="text-2xl font-bold mb-2 text-white">Maroof Ali Syed</h2>
                    <p className="text-sm text-gray-500">
                        Full Stack Developer | Content Writer
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
                            className="hover:text-white transition-colors duration-300"
                            variants={itemVariants}
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </motion.div>

                {/* Social Icons */}
                <motion.div
                    className="flex justify-center space-x-6"
                    variants={containerVariants}
                >
                    <motion.a
                        href="https://github.com/maroofinagit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white text-2xl"
                        variants={itemVariants}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaGithub />
                    </motion.a>
                    <motion.a
                        href="https://linkedin.com/in/maroofalysyed"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white text-2xl"
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
                        className="hover:text-white text-2xl"
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
                        className="hover:text-white text-2xl"
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
                className="mt-8 border-t border-gray-800 pt-4 text-center text-sm text-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
            >
                <span>
                    © {year ?? ""} Maroof Ali Syed. All rights reserved.
                </span>
            </motion.div>
        </footer>
    );
};

export default Footer;
