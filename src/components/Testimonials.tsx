"use client"
import { cn } from "@/lib/utils"
import { Marquee } from "./ui/marquee"
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { motion, useMotionValue, useSpring, Variants, easeOut } from "framer-motion";



const reviews = [
    {
        name: "Adiba fatma",
        username: "@adibafatma",
        body: "His work is always impressive and beyond expectations. I love it.",
        img: "/adibafatma.jpg",
        rating: 5,
    },
    {
        name: "Zaki Nafees",
        username: "@zakinafees",
        body: "Good attention to detail. The final product exceeded my expectations.",
        img: "/zakinafees.jpg",
        rating: 4.5,
    },
    {
        name: "Mohd Sohail",
        username: "@mohdsohail",
        body: "Truly exceptional work! I am thoroughly impressed with the quality and dedication shown.",
        img: "/mohdsohail.jpg",
        rating: 4,
    },
    {
        name: "Sadia Aijaz",
        username: "@sadiaijaz",
        body: "This is such an amazing service. Really appreciate it.",
        img: "/sadiaaijaz.jpg",
        rating: 4.5,
    },
    {
        name: "Mohd Shonez",
        username: "@mohdshonez",
        body: "Great service and amazing quality! Highly recommended.",
        img: "/mohdshonez.jpg",
        rating: 5,
    },
    {
        name: "Farheen Jabeen",
        username: "@farheenjabeen",
        body: "Recommending this to everyone I know! It's been a game-changer.",
        img: "/farheenjabeen.jpg",
        rating: 4,
    },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const renderStars = (rating: number) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            stars.push(<FaStar key={i} size={20} className="text-yellow-300" />)
        } else if (rating >= i - 0.5) {
            stars.push(<FaStarHalf key={i} size={20} className="text-yellow-300" />)
        } else {
            stars.push(<FaStar key={i} size={20} className="text-gray-500" />)
        }
    }
    return <div className="flex gap-1 mt-3">{stars}</div>
}

const ReviewCard = ({
    img,
    name,
    username,
    body,
    rating
}: {
    img: string
    name: string
    username: string
    body: string
    rating: number
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-64  cursor-pointer overflow-hidden rounded-2xl p-5 shadow-lg",
                // Liquid glass style
                "backdrop-blur-xs bg-white/10 border border-white/20",
                // Hover glow border
                "transition-all duration-500 hover:scale-[1.03] hover:border-white/40 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
            )}
        >
            {/* Glow border gradient effect */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-tr from-indigo-400/20 via-purple-400/20 to-pink-400/20 opacity-40 blur-xl" />

            <div className="relative flex flex-row items-center gap-3">
                <img
                    className="rounded-full h-16 object-cover aspect-square border border-white/20"

                    alt={name}
                    src={img}
                />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-semibold text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium text-white/60">{username}</p>
                </div>
            </div>

            <blockquote className="relative mt-3 text-sm text-white/80 leading-relaxed">
                “{body}”
            </blockquote>

            {/* Rating stars */}
            {renderStars(rating)}

        </figure>
    )
}

export function Testimonials() {
    return (
        <div className="relative z-50 h-3/4 flex w-full flex-col items-center justify-center overflow-hidden py-20 text-white">

            {/* Background Video - Desktop */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="block absolute top-0 left-0 w-full h-full object-cover -z-10"
            >
                <source src="/testimonialbg.mp4" type="video/mp4" />
            </video>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/90 -z-0" />

            <span className="block z-50 mx-auto md:mt-0 bg-white/15 w-fit text-white text-xs px-2 py-2 mb-2 rounded-md">
                Testimonials
            </span>

            <motion.h2
                initial={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: false, amount: 0.8 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-3xl md:text-5xl font-bold mb-4 text-center"
            >
                "What My Clients Say"
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: false, amount: 0.8 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-base md:text-md w-3/4
                 md:w-1/2 text-center mb-8 md:mb-12 text-white/80"
            >
                Real feedback from people I've worked with. Their experiences tell you more about my approach than I ever could.
            </motion.p>

            <Marquee pauseOnHover className="[--duration:30s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:30s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>

            {/* Fading edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-black" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-black" />
        </div>
    )
}
