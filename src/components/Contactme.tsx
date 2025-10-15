"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast, Toaster } from "sonner";
import { NextApiResponse } from "next";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        toast.success("Messege sent successfully")
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Error sending messege")
      }
    } catch (err) {
      toast.error("Error sending message.");
    } finally {
      setLoading(false);
    }
  };

  const isDisabled = !formData.name || !formData.email || !formData.message;

  return (
    <section
      id="contact"
      className="min-h-screen w-screen flex flex-col justify-center items-center text-white md:px-16 px-10 md:py-20 py-10 relative z-50 animate-gradient-corner-portfolio"
    >
      <Toaster richColors />
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: "url('/contactbg.jpg')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black from-5% to-black/65 backdrop-blur-[5px] -z-10" />

      {/* Section label */}
      <span className="block mx-auto mt-20 md:mt-10 bg-white/15 w-fit text-white text-xs px-2 py-2 mb-2 rounded-md">
        Contact Me
      </span>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-3xl md:text-5xl font-bold mb-8 text-center"
      >
        Get in Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -20, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-gray-300 md:text-lg text-center w-full md:w-1/3 mb-12"
      >
        Got a project in mind? A quick question? Drop me a message and I’ll get back to you soon.
      </motion.p>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="w-full max-w-3xl backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-lg p-8 md:p-12 space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all duration-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all duration-300"
          />
        </div>

        <textarea
          name="message"
          rows={6}
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all duration-300"
        />

        <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
          <Button
            type="submit"
            disabled={isDisabled || loading}
            className={`w-full cursor-pointer font-medium py-3 rounded-lg transition-all duration-300 ${isDisabled
              ? "bg-transparent border border-white/30 text-gray-200 cursor-not-allowed"
              : "bg-white text-black hover:bg-gray-200"
              }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </motion.div>
      </motion.form>
    </section>
  );
}
