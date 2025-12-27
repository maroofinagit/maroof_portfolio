"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaBookOpen, FaPenNib } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Montserrat } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";


const montserrat = Montserrat({
    subsets: ["latin"]
});

const upcomingBooks = [
    {
        title: "Barkat",
        description:
            "A novel which explores the idea of divine blessing through a modern love story where a girl enters a boy’s life not as a distraction, but as barkat turning his restlessness into peace and his ordinary days into grace",
        status: "Writing in progress",
        release: "Expected Monsoon 2026",
        cover: "/barkatcover.jpg",
    },
    {
        title: "Jayeza",
        description: "“Jayeza” ~ A poetry collection that explores the idea of self-reflection through verses woven with love, loss, and faith where every poem becomes a mirror, turning silence into meaning and ordinary emotions into grace.",
        status: "Editing phase",
        release: "Expected Spring 2026",
        cover: "/jaizacover.jpg",
    },
];

const promoPoetry = [
    {
        book: "Jayeza",
        content: `Jin dars-gahon m kiya dakhila jauhar e qabiliyat ke khatir,
        Inhi idaron n mera hunar maar diya...`,

    },
    {
        book: "Jayeza",
        content: `Baad din bhar roze ke niwale cheen liye mun se,
                Ab dawat bhi mil jaye pr bhook kahaan se lagegi...`
    },
]

const upcomingBlogs = [
    {
        title: "Ink & Introspection",
        description:
            "How writing poetry became my way of understanding silence, people, and prayer.",
        date: "Coming soon",
    },
    {
        title: "Between Code and Kalam",
        description:
            "A reflection on balancing art and logic what being a developer-poet really feels like.",
        date: "Coming soon",
    },
];

export default function ComingSoon() {
    return (
        <section id="comingsoon" className={`w-full z-50 relative min-h-screen bg-gradient-to-b from-amber-50 to-white text-zinc-800 py-16 px-8 md:px-16 ${montserrat.className}`}>

            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center -z-2"
                style={{ backgroundImage: "url('/comingsoonbg.jpg')" }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 backdrop-blur-sm bg-white/25 -z-1" />

            <div className="max-w-6xl mx-auto space-y-16">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center space-y-3"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#562e00]">
                        Upcoming Works
                    </h2>
                    <p className="text-zinc-700 md:text-lg max-w-2xl mx-auto">
                        A glimpse into what’s brewing books and blogs that carry pieces of my thoughts.
                    </p>
                </motion.div>

                <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    speed={1200}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    navigation
                    className="w-full relative no-cursor"

                >
                    {promoPoetry.map((poetry, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative bg-white/50 backdrop-blur-sm border border-white/70 hover:bg-white/60 hover:backdrop-blur-xl hover:shadow-xl transition-all duration-500 rounded-2xl shadow-lg overflow-hidden p-6 flex flex-col justify-between max-w-xl mx-auto h-full">
                                {/* Poetry Section */}
                                <div>
                                    <h3 className="text-2xl font-semibold text-zinc-900 mb-3">
                                        From <span className="italic text-amber-700">{poetry.book}</span>
                                    </h3>
                                    <p className="text-zinc-800 text-sm md:text-base leading-relaxed whitespace-pre-line italic">
                                        "{poetry.content}"
                                    </p>
                                </div>

                                {/* Divider */}
                                <div className="my-4 h-px bg-gradient-to-r from-transparent via-amber-700/40 to-transparent"></div>

                                {/* Footer / CTA */}
                                <div className="flex items-center justify-between">
                                    <p className="text-sm text-zinc-700">
                                        Read more soulful verses in{" "}
                                        <span className="font-semibold text-amber-700">Jaiza</span> — coming soon.
                                    </p>
                                    <button className="px-4 py-1.5 rounded-full border border-amber-700/40 bg-white/40 backdrop-blur-md text-amber-800 text-xs font-medium hover:bg-amber-700 hover:text-white transition-all duration-300">
                                        Stay Tuned
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>



                {/* Books Section */}
                <div>
                    <div className="flex items-center gap-2 mb-8">
                        <FaBookOpen className="text-xl text-amber-600" />
                        <h3 className="text-2xl font-semibold text-[#562e00]">Books in Progress</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {upcomingBooks.map((book, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.15 }}
                                viewport={{ once: true }}
                            >
                                <div className="bg-white/50 backdrop-blur-sm border border-white/40 hover:bg-white/70 hover:backdrop-blur-lg transition-all duration-300 rounded-2xl overflow-hidden shadow-lg p-4 flex flex-col gap-y-4">
                                    {/* Top section: image + title */}
                                    <div className="grid grid-cols-2 gap-4 items-center justify-between">
                                        <div className="relative w-full md:h-96 h-36 rounded-xl overflow-hidden">
                                            <Image
                                                src={book.cover}
                                                alt={book.title}
                                                fill
                                                className="object-contain object-center"
                                            />
                                        </div>
                                        <div className=" flex-col flex gap-1 text-center">
                                            <h1 className=" text-2xl md:text-3xl font-semibold text-center text-[#562e00]">{book.title}</h1>
                                            <p className=" text-sm md:text-base mt-2">{book.status}</p>
                                            <p className=" text-sm md:text-base font-medium">{book.release}</p>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-[#562e00] mt-3 text-sm md:text-base font-medium">
                                        {book.description}
                                    </p>
                                </div>


                            </motion.div>
                        ))}
                    </div>
                </div>



                {/* Blogs Section */}
                <div>
                    <div className="flex items-center gap-2 mb-8">
                        <FaPenNib className="text-xl text-amber-600" />
                        <h3 className="text-2xl font-semibold text-[#422300]">Upcoming Blogs</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {upcomingBlogs.map((blog, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <Card className="bg-white/50 border border-zinc-200 hover:shadow-md hover:shadow-amber-100 transition-all duration-300 rounded-2xl">
                                    <CardHeader>
                                        <CardTitle className="text-xl font-semibold text-[#562e00]">
                                            {blog.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-2 md:text-base text-sm font-medium text-zinc-700">
                                        <p className=" italic">{blog.description}</p>
                                        <p className="pt-2 text-sm text-zinc-500">
                                            <span className="font-medium text-zinc-800">Release:</span>{" "}
                                            {blog.date}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
