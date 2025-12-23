"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, Variants, easeOut } from "framer-motion";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "./ui/dialog";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { GrView } from "react-icons/gr";



const projects = [
  {
    title: "AI-Powered Auto Study Preparation Tracker",
    description:
      "Developed an AI-driven study tracker that generates personalized study plans and monitors progress. Utilized OpenAI for content generation and Next.js for a seamless user experience.",
    image: "/prepmate.jpg",
    tech: ["Next.js", "OpenAI and Gemeni API", "Tailwind CSS", "PostgreSQL", "PrismaORM",],
    repo: "https://github.com/maroofinagit/prepmate",
    url: "https://useprepmate.vercel.app"
  },
  {
    title: "Motioned Interactive Personal Portfolio Web App",
    description:
      "Built a 3D portfolio with dynamic content via SanityIO and multiple profiles. Integrated Framer Motion for immersive animations and smooth transitions.",
    image: "/portfolioimg.jpg",
    tech: ["Next.js", "Tailwind CSS", "SanityIO", "Framer Motion"],
    repo: "https://github.com/maroofinagit/maroof_portfolio",
    url: "https://maroofalysyed.vercel.app"
  },
  {
    title: "E-commerce Web App with CMS",
    description:
      "Built a responsive e-commerce app with CMS for managing products and categories. Optimized UI for UX and SEO to enhance performance and visibility.",
    image: "/storepage.jpg",
    tech: ["Next.js", "PrismaORM", "MongoDB", "Tailwind CSS"],
    repo: "https://github.com/maroofinagit/Ecommerce",
    url: "https://github.com/maroofinagit/Ecommerce"
  },
];

export default function ProjectSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 20 });

  const IMG_WIDTH = 256;
  const IMG_HEIGHT = 160;
  const OFFSET = 20;

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        staggerChildren: 0.3,
        duration: 0.6,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, delay: 0.3 },
    },
  };

  return (
    <section className="min-h-screen w-screen flex flex-col justify-center items-center text-white md:px-16 px-10 md:pb-0 pb-16 relative z-50 animate-gradient-corner-portfolio" id="portfolio">

      <span className="block mx-auto mt-36 md:mt-0 bg-white/15 w-fit text-white text-xs px-2 py-2 mb-2 rounded-md">
        Hover on project to preview
      </span>

      <motion.h2
        initial={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: false, amount: 0.8 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-3xl md:text-5xl font-bold mb-4 md:mb-12 text-center"
      >
        My Projects
      </motion.h2>

      {/* Project List */}
      <motion.div
        className="flex flex-col gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {projects.map((project, index) => (

          <div key={index}
          >

            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                borderColor: "rgba(255,255,255,0.35)",
                backgroundColor: "rgba(255,255,255,0.05)",
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}

              className="border-l-5 py-4 rounded flex flex-col md:flex-row gap-y-6 justify-between items-center border-transparent md:pl-4 cursor-pointer transition-all duration-300"
            >

              <img src={project.image} alt={project.title} className=" aspect-auto object-cover rounded-lg shadow-lg md:hidden" />

              {/* Left text */}
              <div className="flex flex-col gap-y-2 md:w-2/3"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                onMouseMove={(e) => {
                  const vw = window.innerWidth;
                  const vh = window.innerHeight;

                  let newX = e.clientX + OFFSET;
                  let newY = e.clientY + OFFSET;

                  if (newX + IMG_WIDTH > vw) newX = e.clientX - IMG_WIDTH - OFFSET;
                  if (newY + IMG_HEIGHT > vh) newY = e.clientY - IMG_HEIGHT - OFFSET;

                  mouseX.set(newX);
                  mouseY.set(newY);
                }}
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>

              {/* Right button with ShadCN Dialog */}
              <Dialog>
                <DialogTrigger asChild>

                  <Button className="bg-transparent border-2 text-sm border-white/30 text-white 
                  hover:bg-white/60 hover:text-black hover:border-transparent 
                  shadow-lg py-6 rounded-xl transition-all duration-300"
                    onMouseEnter={() => setHoveredProject(null)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    Full Project
                    <GrView />
                  </Button>

                </DialogTrigger>

                <DialogContent
                  onMouseEnter={() => setHoveredProject(null)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     w-[90%] max-w-xl p-6 rounded-2xl
                     bg-white/5 text-white backdrop-blur-md border border-white/20
                     shadow-2xl shadow-black/40
                     flex flex-col gap-4 mt-8 lg:mt-0"              >
                  <DialogHeader>
                    <DialogTitle className=" text-xl md:text-xl text-left w-3/4">{project.title}</DialogTitle>
                  </DialogHeader>
                  <div className="flex flex-col gap-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full md:h-64 aspect-auto object-cover rounded-xl shadow-lg border-2 border-white/20"
                    />
                    <div>
                      <h4 className="font-semibold mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className=" bg-white/15 text-white text-xs px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-x-6 mt-2">
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="text-xl" />
                      </a>

                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt className="text-xl" />
                      </a>

                    </div>
                  </div>
                </DialogContent>
              </Dialog>

            </motion.div>
            <div className="h-[2px] w-full bg-[linear-gradient(90deg,transparent,rgba(148,163,184,0.9),transparent)]"></div>

          </div>


        ))}

      </motion.div>


      {/* Floating Image Preview: only show if NOT mobile */}
      {!isMobile && hoveredProject !== null && (
        <motion.img
          src={projects[hoveredProject].image}
          alt={projects[hoveredProject].title}
          style={{ x: smoothX, y: smoothY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-0 left-80 h-64 aspect-auto -translate-x-1/2 -translate-y-1/2 object-cover rounded-lg shadow-2xl pointer-events-none z-50"
        />
      )}
    </section>
  );
}
