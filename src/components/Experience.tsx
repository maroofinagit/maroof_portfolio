"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// You can keep this in a data.json file too
const timelineData = [
    {
        type: "experience",
        title: "Student Placement Coordinator",
        place: "Jamia Millia Islamia, New Delhi",
        duration: "August 2024 - June 2026",
    },
    {
        type: "education",
        title: "M.C.A - Masters in Computer Application",
        place: "Jamia Millia Islamia, New Delhi",
        duration: "August 2024 - ongoing",
    },
    {
        type: "education",
        title: "B.C.A. Hons - Bachelors in Computer Application",
        place: "Bundelkhand University, Jhansi",
        duration: "November 2020 - July 2023",
    },
    {
        type: "experience",
        title: "Freelance Web Developer",
        place: "Self-employed",
        duration: "2022 - Present",
    },
];

export default function Timeline() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 40%", "end 80%"],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);
    const lineWidth = useTransform(
        scrollYProgress,
        [0, 0.9, 1],
        ["4px", "4px", "1px"]
    );

    return (
        <section
            ref={ref}
            className="relative z-40 w-screen min-h-screen py-20 px-6 md:px-0 text-white "
            id="experience"
        >
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center -z-10"
                style={{ backgroundImage: "url('/expbg.jpg')" }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black from-10% to-black/75 backdrop-blur-[4px] -z-10" />

            <span className="block w-fit mx-auto text-center bg-white/15 text-white text-xs px-2 py-2 mb-2 rounded-md">
                Unfolding My Path
            </span>

            <motion.h2
                initial={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: false, amount: 0.8 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-3xl md:text-5xl font-bold mb-12 text-center">
                Experience & Education
            </motion.h2>

            <div className="relative max-w-3xl mx-auto">
                {/* Vertical Line */}
                <motion.div
                    style={{ height: lineHeight, width: lineWidth }}
                    className="absolute left-1/2 -translate-x-1/2 w-[4px] bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full origin-top"
                />

                {/* Timeline Items */}
                <div className="flex flex-col gap-20">
                    {timelineData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.4 }}
                            transition={{ duration: 0.5, delay: index * 0.3 }}
                            className="relative w-full flex flex-col items-center md:flex-row md:items-start"
                        >
                            {/* Circle Marker */}
                            <div
                                className={`
    w-6 h-6 rounded-full shadow-md z-10
    mx-auto mb-4
    md:mb-0 md:absolute md:left-1/2 md:-translate-x-1/2
    ${item?.type === "education"
                                        ? "bg-indigo-500 shadow-indigo-400"
                                        : "bg-purple-500 shadow-purple-400"}
  `}
                            />


                            {/* Card */}
                            <div
                                className={`
    max-w-[85%] sm:max-w-[70%] md:max-w-[45%] 
    mx-auto text-center 
    md:mx-0 
    ${index % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"}
  `}
                            >
                                <div
                                    className={`
      overflow-hidden backdrop-blur-xs gap-y-2 flex-col flex border rounded-xl p-6 shadow-lg transition duration-300 ease-in-out
      ${item?.type === "education"
                                            ? "bg-white/10 border-indigo-400/20 hover:shadow-indigo-400/40"
                                            : "bg-white/10 border-purple-400/20 hover:shadow-purple-400/40"
                                        }
    `}
                                >
                                    <h3
                                        className={`text-lg md:text-xl font-semibold ${item?.type === "education"
                                            ? "text-indigo-400"
                                            : "text-purple-400"
                                            }`}
                                    >
                                        {item?.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-300">
                                        {item?.place}
                                    </p>
                                    <p className="text-xs md:text-sm text-gray-400 mt-2">
                                        {item?.duration}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
