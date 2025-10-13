"use client";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
    { number: 3, label: "Years of Experience", image: "/coding.jpg" },
    { number: 25, label: "Completed Projects", image: "/projects.jpg" },
    { number: 10, label: "Technologies Mastered", image: "/technology.jpg" },
    { number: 500, label: "DSA Problems Solved", image: "/dsa.jpg" },
];

const StatsCards: React.FC = () => {
    return (
        <div className="z-0 grid grid-cols-2 lg:grid-cols-4 gap-6 w-full p-8 md:px-16 bg-gradient-to-l md:bg-gradient-to-r from-black to-amber-950">
            {stats.map((stat, index) => (
                <motion.div
                    key={index}
                    className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"

                >
                    {/* Background Image */}
                    <img
                        src={stat.image}
                        alt={stat.label}
                        className="absolute md:hidden inset-0 w-full h-full object-cover"
                    />

                    {/* Dark overlay */}
                    <div className="absolute md:hidden inset-0 bg-black/60"></div>

                    {/* Glass content */}
                    <div className="relative z-10 bg-white/10 backdrop-blur-xs border border-white/20 p-6 flex flex-col justify-center items-center rounded-2xl text-center text-white">
                        <h2 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
                            <CountUp
                                end={stat.number}
                                duration={2}
                                enableScrollSpy
                                scrollSpyDelay={2}
                                scrollSpyOnce={false}
                                suffix="+"
                            />
                        </h2>
                        <p className="mt-2 text-xs md:text-lg font-medium opacity-90">
                            {stat.label}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default StatsCards;
