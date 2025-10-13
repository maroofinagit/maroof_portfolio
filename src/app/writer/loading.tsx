"use client";

import { motion } from "framer-motion";

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-white text-black px-6">
            {/* Animated logo or text */}
            <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-center"
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
                Welcome by Maroof
            </motion.h1>

            {/* Loader dots */}
            <div className="flex mt-6 space-x-2">
                {[0, 1, 2].map((i) => (
                    <motion.span
                        key={i}
                        className="w-3 h-3 bg-gray-500 rounded-full"
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
        </div>
    );
}
