"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    FaFeatherAlt,
    FaQuoteLeft,
    FaQuoteRight,
    FaPenNib,
} from "react-icons/fa";
import { MdPushPin } from "react-icons/md";
import { Sorts_Mill_Goudy, Cinzel } from 'next/font/google'

const fraunces = Sorts_Mill_Goudy({
    subsets: ['latin'],
    weight: '400'
})

const cinzel = Cinzel({
    subsets: ['latin'],
})


export default function WriterHome() {

    return (
        <div className="relative flex md:flex-row flex-col min-h-screen md:h-screen w-full text-[#2c2c2c] overflow-hidden md:pt-20 pt-30 font-serif z-40 ">

            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center -z-2"
                style={{ backgroundImage: "url('/wrhomebg.jpg')" }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-white/50 -z-1" />

            {/* LEFT: Quote + Welcome */}
            <motion.div
                className="md:w-1/2 flex flex-col justify-center md:pl-16 px-10 md:py-0 py-10"
                initial={{ opacity: 0, y: -40, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1 }}
            >
                <div className="relative max-w-lg">
                    <FaQuoteLeft
                        className="absolute -left-6 -top-6 text-[#92793a]"
                        size={26}
                    />
                    <p className={`text-2xl md:text-3xl italic leading-snug font-semibold text-center md:text-left text-[#583500] ${cinzel.className}`}>
                        Aur jinke paas log nahi hote wo ya to rou letein hein ya likh lete hein
                    </p>
                    <FaQuoteRight
                        className="absolute -right-6 -bottom-6 text-[#92793a]"
                        size={26}
                    />
                </div>

                <motion.p
                    className={`mt-6 md:text-lg max-w-md text-[#3c3c3c] font-medium italic ${fraunces.style}
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 1 }}
                >
                    Ye alfaaz, ye shayariyan, aur ye kahaniyan un khayalon ka hissah hain jo main kabhi zubaan par nahi la paaya, ya jo main aam taur par lana nahi chahta.
                    Har lafz ek chhupi hui mehsoosat ka izhar hai, kuch ranj, kuch ikhtelaaf, kuch ishq, kuch ijtenab jo judd kar mera kalaam ban gaye...
                </motion.p>

                <div className="mt-6 flex gap-4">
                    <a
                        href="#comingsoon"
                        className="text-[#624300] font-semibold border border-[#624300] md:px-5 px-4 py-2 rounded-full hover:text-white hover:bg-[#624300] transition duration-200"
                    >
                        Explore Works
                    </a>
                    <a
                        href="#wcontact"
                        className="text-[#624300] font-semibold border border-[#624300] px-5 py-2 rounded-full hover:bg-[#624300] hover:text-white transition duration-200" 
                    >
                        Contact
                    </a>
                </div>
            </motion.div>

            {/* RIGHT SECTION (Polaroid Card) */}
            <motion.div
                className="relative md:w-1/2 h-auto md:h-full flex justify-center items-center px-10 md:pr-16 py-10 md:py-0"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.1 }}
            >
                <motion.div
                    className="bg-white shadow-lg rounded-md border border-[#d6c08b]/60 p-4 max-w-xs sm:max-w-sm md:max-w-md flex flex-col items-center text-center transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500 ease-out relative"
                    whileHover={{ scale: 1.05 }}
                >
                    <MdPushPin size={50} className=" absolute top-5 left-5 md:left-18 -rotate-45 z-50 text-[#b48925]" />
                    <div className="relative w-48 h-56 sm:w-56 sm:h-64 md:w-64 md:h-72 border-4 border-white shadow-md overflow-hidden">
                        <Image
                            src="/writerme.jpg"
                            alt="Maroof Ali Syed"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <p className={`mt-4 text-lg sm:text-base text-[#3c3c3c] text-left leading-relaxed px-2 ${fraunces.className}
                    `}>
                        Hey, I’m <span className="font-semibold text-[#92793a]">Maroof Ali Syed</span> a poet, writer, and dreamer,
                        trying write to turn feelings into and moments.
                        Check out my poems, explore my stories, and informative blogs.
                    </p>
                </motion.div>
            </motion.div>

            {/* Floating Feathers */}
            <motion.div
                className="absolute top-25 md:top-20 right-12 text-[#92793a]"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
            >
                <FaFeatherAlt size={35} />
            </motion.div>

            <motion.div
                className="absolute bottom-8 left-12 text-[#92793a]"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
            >
                <FaFeatherAlt size={35} />
            </motion.div>
        </div>
    );
}
