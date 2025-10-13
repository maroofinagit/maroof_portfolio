"use client";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Button } from "./ui/button";
import { IoMdDownload } from "react-icons/io";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"]
});


export default function Hero() {
  return (
    <section
      id="hero"
      className="sticky top-0 z-10 min-h-screen w-screen flex items-center justify-center pt-20 md:pt-10"
    >
      {/* Background Video - Desktop */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hidden md:block absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/bgvideohr.mp4" type="video/mp4" />
      </video>

      {/* Background Video - Mobile */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="block md:hidden absolute top-0 left-0 w-full h-screen object-cover"
      >
        <source src="/bgvideovr.mp4" type="video/mp4" />
      </video>

      {/* Overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-screen bg-black/80"></div>

      {/* Content */}
      <div className="relative z-0 container mx-auto lg:mx-16 flex flex-col md:flex-row justify-between items-center px-6 ">
        <div className={`text-center flex flex-col justify-center items-center md:items-start md:text-left space-y-4 md:space-y-6
          ${montserrat.className}
          `}>
          <motion.h3
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm md:text-lg text-gray-200"
          >
            Heyyy There! I'm
          </motion.h3>

          <motion.h1
            initial={{ opacity: 0, y: 40, filter: 'blur(5px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-4xl md:text-6xl font-bold text-white drop-shadow"
          >
            Maroof Ali Syed
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl font-medium text-gray-200"
          >
            <Typewriter
              options={{
                strings: [
                  "Full-Stack Developer...",
                  "Content Writer...",
                  "Turning Coffee into code...",
                ],
                autoStart: true,
                loop: true,
                delay: 50,      // typing speed
                deleteSpeed: 20 // backspace speed
              }}
            />
          </motion.h2>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center md:justify-start space-x-6 text-2xl text-white"
          >
            <a href="https://linkedin.com/maroofalysyed" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/maroofinagit" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://instagram.com/maroofalysyed" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://x.com/maroofalysyed" target="_blank" rel="noreferrer">
              <FaSquareXTwitter />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Button
              asChild
              className=" bg-transparent border-2 text-lg border-white/30 text-white hover:bg-white/60 hover:text-black hover:border-transparent shadow-lg flex w-40 justify-center py-6 items-center  transition-all duration-300"
            >
              <a href="/resume.pdf" download>
                Resume
                <IoMdDownload />

              </a>
            </Button>
          </motion.div>
        </div>

        <div className="mt-10 md:mt-0 relative z-10">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            src="/me.jpg"
            alt="Maroof"
            className="w-72 md:w-96 aspect-square object-cover rounded-full shadow-lg border-4 border-white/30"
          />
        </div>
      </div>
    </section>
  );
}
