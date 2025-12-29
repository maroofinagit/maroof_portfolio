"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "next/navigation";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"]
});

export default function DockNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Detect if current route is part of the writer section
  const isWriterPage = pathname.startsWith("/writer");

  // === Derive role directly from pathname ===
  const selectedRole = pathname.startsWith("/writer")
    ? "writer"
    : pathname.startsWith("/techie")
      ? "techie"
      : "techie"; // default to techie


  // Handle switching between writer & techie
  const handleRoleChange = (value: string) => {
    if (value === "writer") router.push("/writer");
    else router.push("/");
  };

  // Nav links for both sections
  const techieNavLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const writerNavLinks = [
    { name: "Home", href: "/writer" },
    { name: "Books", href: "/writer/books" },
    { name: "Poetries", href: "/writer/poetries" },
    { name: "Blogs", href: "/writer/blogs" },
    { name: "Contact", href: "/writer#wcontact" },
  ];

  // Choose links based on route
  const navLinks = isWriterPage ? writerNavLinks : techieNavLinks;

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] ${montserrat.className}`}>
      <nav
        className={`mx-auto w-[90%] transition-all duration-300 ease-in-out mt-4 flex items-center justify-between px-6 md:px-8 py-3 rounded-2xl backdrop-blur-md border shadow-lg hover:shadow-xl
        ${isWriterPage
            ? "g-gradient-to-b from-white/15 to-white/5 border-black/20 text-[#5f3000]"
            : "bg-gradient-to-b from-white/15 to-white/5 border-white/20 shadow-white/10 text-white"
          }`}
      >
        {/* Left Logo + Selector */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <Link href="/" className="font-bold text-xl">
            Maroof
          </Link>

          <div className="no-cursor">
            <Select value={selectedRole} onValueChange={handleRoleChange}>
              <SelectTrigger
                className={`no-cursor w-[130px] md:w-[140px]
                  ${isWriterPage
                    ? "bg-black/10 border text-black border-black/30"
                    : "bg-white/20 border border-white/30"
                  }`}
              >
                <SelectValue placeholder={`as a ${selectedRole}`} />
              </SelectTrigger>

              <SelectContent
                className={`z-[100] no-cursor backdrop-blur-md shadow-lg 
                  ${isWriterPage
                    ? "bg-black/10 border border-black/30 text-black"
                    : "bg-white/10 border text-white border-white/30"
                  }`}
              >
                <SelectItem
                  value="techie"
                  className={`no-cursor ${isWriterPage ? "focus:bg-black/20" : ""}`}
                >
                  as a Techie
                </SelectItem>
                <SelectItem
                  value="writer"
                  className={`no-cursor ${isWriterPage ? "focus:bg-black/20" : ""}`}
                >
                  as a Writer
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          {navLinks.map((navLink) => (
            <Link
              key={navLink.href}
              href={navLink.href}
              className={`text-base font-semibold transition ease-in-out ${isWriterPage
                ? "text-amber-950/70 hover:text-black"
                : "text-gray-400 hover:text-white"
                }`}
            >
              {navLink.name}
            </Link>
          ))}
        </div>

        {/* Hamburger Button (Mobile) */}
        <div className="md:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            size={25}
            color={isWriterPage ? "black" : "white"}
          />
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
            className={`md:hidden mx-auto w-[90%] mt-2 px-8 py-4 rounded-2xl backdrop-blur-md shadow-lg ${isWriterPage
              ? " bg-white/40 border border-black/20"
              : "bg-white/20 border border-white/30"
              }`}
          >
            <div
              className={`flex flex-col space-y-4 text-lg font-medium ${isWriterPage ? "text-[#604200]" : "text-white"
                }`}
            >
              {navLinks.map((navLink) => (
                <motion.div
                  key={navLink.href}
                  variants={linkVariants}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <Link href={navLink.href} onClick={() => setIsOpen(false)}>
                    {navLink.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
