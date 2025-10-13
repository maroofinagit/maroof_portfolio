"use client";

import ResumeData from "@/data/ResumeData.json";
import { useState, useEffect } from "react";
import * as React from "react";
import { Iceland } from 'next/font/google'

// Import icons (you can add more as needed)
import { MdDevices, MdAnimation } from "react-icons/md";
import { PiTreeStructureBold } from "react-icons/pi";
import { BsFiletypeSql } from "react-icons/bs";
import { TbCloudNetwork } from "react-icons/tb";
import { RiSeoLine } from "react-icons/ri";

import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
  FaGitAlt
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiFramer,
  SiThreedotjs,
  SiPrisma,
  SiPostgresql,
  SiC,
  SiCplusplus,
  SiExpress,
  SiShadcnui,
} from "react-icons/si";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const orbitron = Iceland({
  subsets: ['latin'],
  weight: ['400']
})


// Map skill names to icons
const iconMap: Record<string, { icon: React.JSX.Element; percentage: number }> = {
  "React": { icon: <FaReact size={32} />, percentage: 95 },
  "Next.js": { icon: <SiNextdotjs size={32} />, percentage: 92 },
  "Node.js": { icon: <FaNodeJs size={32} />, percentage: 88 },
  "MongoDB": { icon: <SiMongodb size={32} />, percentage: 90 },
  "Tailwind CSS": { icon: <SiTailwindcss size={32} />, percentage: 94 },
  "Framer Motion": { icon: <SiFramer size={32} />, percentage: 87 },
  "Three.js": { icon: <SiThreedotjs size={32} />, percentage: 89 },
  "PrismaORM": { icon: <SiPrisma size={32} />, percentage: 91 },
  "PostgreSQL": { icon: <SiPostgresql size={32} />, percentage: 93 },
  "Java": { icon: <FaJava size={32} />, percentage: 96 },
  "JavaScript": { icon: <FaJsSquare size={32} />, percentage: 97 },
  "C": { icon: <SiC size={32} />, percentage: 86 },
  "C++": { icon: <SiCplusplus size={32} />, percentage: 88 },
  "CSS3": { icon: <FaCss3Alt size={32} />, percentage: 92 },
  "HTML5": { icon: <FaHtml5 size={32} />, percentage: 94 },
  "Docker": { icon: <FaDocker size={32} />, percentage: 90 },
  "GitHub": { icon: <FaGithub size={32} />, percentage: 95 },
  "UI/UX": { icon: <MdDevices size={32} />, percentage: 89 },
  "Express.js": { icon: <SiExpress size={32} />, percentage: 87 },
  "ShadCn": { icon: <SiShadcnui size={32} />, percentage: 91 },
  "GSAP": { icon: <MdAnimation size={32} />, percentage: 86 },
  "DSA": { icon: <PiTreeStructureBold size={32} />, percentage: 98 },
  "SQL": { icon: <BsFiletypeSql size={32} />, percentage: 93 },
  "APIs": { icon: <TbCloudNetwork size={32} />, percentage: 92 },
  "SEO": { icon: <RiSeoLine size={32} />, percentage: 87 },
  "Git": { icon: <FaGitAlt size={32} />, percentage: 95 },
};


export default function Skills() {
  const paragraph =
    "Skills that matter, that solve problems, that adapt to change, that create impact not just in code, but in the way they shape real solutions.";

  const words = paragraph.split(" ");

  const ref = React.useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // detect screen width
  useEffect(() => {
    setIsMobile(window.innerWidth < 768); // md breakpoint
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: isMobile
      ? ["start 90%", "start 40%"] // faster reveal on mobile
      : ["start 90%", "center 80%"] // desktop,
  });

  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);


  return (
    <section id="skills"
      ref={ref}
      className="relative z-30 min-h-screen py-16 px-4 md:px-24 flex flex-col items-center text-white"
    >

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: "url('/skillbg.jpg')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black from-35% to-black/75 -z-10" />



      <p className="text-3xl md:text-7xl font-medium text-white flex flex-wrap gap-2 mb-12">
        {words.map((word, i) => {
          // each word appears a bit later than the previous
          const start = (i / words.length);
          const end = ((i + 1) / words.length);
          const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
          return (
            <motion.span
              key={i}
              style={{ opacity }}
              className={`${i === 0
                ? "text-red-500" // first word
                : i === 5
                  ? "text-green-600"
                  : i === 9
                    ? "text-blue-600"
                    : i === 12
                      ? "text-yellow-500"
                      : i === 24
                        ? "text-pink-500"
                        : "text-gray-300" // all others
                } transition-colors duration-300 font-bold `}
            >
              {word}
            </motion.span>
          );
        })}
      </p>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
        {Object.entries(ResumeData.technical_skills).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-xl font-bold mb-6 capitalize">
              {category.replaceAll("_", " ")}
            </h3>
            <div className="flex flex-wrap gap-6 align-middle justify-center">
              {skills.map((skill: string, idx: number) => {
                const skillData = iconMap[skill];
                if (!skillData) return null;

                const isHovered = hoveredSkill === skill;

                return (
                  <div className="flex flex-col items-center space-y-2" key={idx}>
                    <motion.div
                      className="skill-icon w-20 aspect-square md:w-24 flex items-center justify-center rounded-full border-2 border-white/30 shadow-lg cursor-pointer bg-white/10 backdrop-blur-xs"
                      whileHover={{ scale: 1.1 }}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <AnimatePresence mode="wait">
                        {!isHovered ? (
                          <motion.div
                            key="icon"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center justify-center w-full h-full text-white"
                          >
                            {iconMap[skill]?.icon}
                          </motion.div>
                        ) : (
                          <motion.div
                            key="percentage"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center justify-center w-full h-full text-white font-bold text-lg"
                          >
                            {skillData.percentage}%
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                    <h2 className=" text-sm">{skill}</h2>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
