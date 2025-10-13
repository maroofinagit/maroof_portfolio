"use client";

import { motion } from "framer-motion";

export default function Loading() {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-black text-white">
            {/* Animated logo or text */}
            <motion.h1
                className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "mirror",
                }}
                style={{
                    backgroundSize: "200% 200%",
                }}
            >
                Maroof Ali Syed
            </motion.h1>

            {/* Loader dots */}
            <div className="flex mt-6 space-x-2">
                {[0, 1, 2].map((i) => (
                    <motion.span
                        key={i}
                        className="w-3 h-3 bg-gray-400 rounded-full"
                        animate={{
                            y: [0, -6, 0],
                        }}
                        transition={{
                            duration: 0.6,
                            delay: i * 0.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Optional fading text */}
            <motion.p
                className="mt-6 text-sm text-gray-400 tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                    duration: 1.8,
                    repeat: Infinity,
                }}
            >
                Loading your experience...
            </motion.p>
        </div>
    );
}
