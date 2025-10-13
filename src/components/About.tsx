"use client";

import { motion } from "framer-motion";
import resume from "@/data/ResumeData.json"
import Image from "next/image";
import coding from "@/../public/coding.jpg";
import photography from "@/../public/photography.jpg";
import writing from "@/../public/writing.jpg";
import uiux from "@/../public/uiux.jpg";
import StatsCards from "./StatCards";

const AnimatedImage = motion(Image);

const items = [
  {
    title: "Coding",
    text: "In the world of code, I find my rhythm and flow as I love to solve problems and challenges.",
    imgUrl: "coding",
  },
  {
    title: "Writing",
    text: "Through my pen, I weave words into stories, poetries ideas, and emotions that resonate and inspire.",
    imgUrl: "writing",
  },
  {
    title: "UI/UX Design",
    text: "I craft intuitive and visually appealing digital experiences that seamlessly blend form and function.",
    imgUrl: "uiux",
  },
  {
    title: "Photography",
    text: "I capture moments, freeze time, and tell stories through my lens which thrives in nature and landscapes.",
    imgUrl: "photography",
  },
];

const { summarySmall, summaryBig } = resume

export default function AboutSection() {
  return (
    <section className="z-20 relative flex flex-col min-h-screen animate-gradient-corner-about text-white " id="about">

      <div className="flex flex-col md:flex-row w-full">

        {/* Left (Sticky Summary) */}
        <div className="md:w-1/2 py-12 px-8 md:p-12 ">
          <div className="md:sticky md:top-0 md:h-screen flex items-center justify-center">
            <div>

              <span className=" block bg-white/15 w-fit text-white text-xs px-2 py-2 mb-2 rounded-md">
                Scroll to explore
              </span>

              <motion.h2
                initial={{ opacity: 0, x: -20, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                viewport={{ once: false, amount: 0.8 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-4xl font-bold mb-4">My Journey</motion.h2>

              <motion.p
                initial={{ x: -50, opacity: 0 }}           // start off to the left
                whileInView={{ x: 0, opacity: 1 }}        // animate to normal position
                viewport={{ once: false, amount: 0.5 }}   // triggers when 50% visible
                transition={{ duration: 0.6, delay: 0.5 }}
                className="hidden md:block text-gray-300 text-lg"
              >
                {summaryBig}
              </motion.p>


              <motion.p
                initial={{ x: -50, opacity: 0 }}           // start off to the left
                whileInView={{ x: 0, opacity: 1 }}        // animate to normal position
                viewport={{ once: false, amount: 0.5 }}   // triggers when 50% visible
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:hidden text-gray-300 text-base"
              >
                {summarySmall}
              </motion.p>

            </div>
          </div>
        </div>

        {/* Right (Scrollable Content) */}
        <div className="md:w-1/2 space-y-12 p-8 md:p-12 ">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="space-y-4 relative"
            >
              <div className="relative w-full h-64 rounded-xl md:grayscale-75 hover:grayscale-0 overflow-hidden shadow-lg">
                <AnimatedImage
                  src={
                    item.imgUrl === "coding"
                      ? coding
                      : item.imgUrl === "photography"
                        ? photography
                        : item.imgUrl === "writing"
                          ? writing
                          : uiux
                  }
                  alt={item.title}
                  placeholder="blur"
                  className="w-full h-full object-cover object-center"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1, }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />

                {i == 0 && <div className="absolute hidden md:block bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                  Hover to view
                </div>}

              </div>

              <h3
                className="text-2xl font-semibold">{item.title}
              </h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="md:hidden" >

        <StatsCards />
      </div>


    </section>

  );
}
