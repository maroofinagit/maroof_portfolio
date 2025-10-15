"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast, Toaster } from "sonner";
import { BsTelephone } from "react-icons/bs";
import { CiPen } from "react-icons/ci";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"]
});

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false)

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
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
                toast.error("Error sending message.")
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
            id="wcontact"
            className="min-h-screen w-screen flex flex-col justify-center items-center text-[#3b2f2f] md:px-16 px-6 md:py-20 py-10 relative bg-[#fdf6e3] z-30"
            style={montserrat.style}
        >
            <motion.div className=" absolute top-20 left-10"
                whileHover={{ scale: 1.2, rotate: 5 }}
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
            >
                <BsTelephone size={50} className=" text-[#543100]" />
            </motion.div>

            <motion.div className=" absolute bottom-20 right-10"
                whileHover={{ scale: 1.2, rotate: 5 }}
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
            >
                <CiPen size={50} className=" text-[#543100]" />
            </motion.div>


            <Toaster richColors />

            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-3xl md:text-5xl mt-10 font-bold mb-8 text-center text-[#6e3e00]"
            >
                Get in Touch
            </motion.h2>

            {/* Subheading */}
            <motion.p
                initial={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-[#6e3e00] md:text-lg font-medium text-center w-full md:w-1/2 mb-12 leading-relaxed"
            >
                Have a story, a thought, or an idea to share?
                Drop me a note I’d love to hear from you.
            </motion.p>

            {/* Form */}
            <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="w-full max-w-3xl backdrop-blur-xl bg-[#fff9ed]/70 border border-[#d6c5a7] rounded-2xl shadow-lg p-8 md:p-12 space-y-6 font-serif"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[#f8f1dc] placeholder-[#9c8c76] text-[#4a3a2d] border border-[#d6c5a7] focus:ring-2 focus:ring-[#c5a86a]/50 outline-none transition-all duration-300 shadow-sm"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[#f8f1dc] placeholder-[#9c8c76] text-[#4a3a2d] border border-[#d6c5a7] focus:ring-2 focus:ring-[#c5a86a]/50 outline-none transition-all duration-300 shadow-sm"
                    />
                </div>

                <textarea
                    name="message"
                    rows={6}
                    placeholder="Your Message..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#f8f1dc] placeholder-[#9c8c76] text-[#4a3a2d] border border-[#d6c5a7] focus:ring-2 focus:ring-[#c5a86a]/50 outline-none transition-all duration-300 shadow-sm"
                />

                <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.03 }}>
                    <Button
                        type="submit"
                        disabled={isDisabled || loading}
                        className={`w-full cursor-pointer font-medium py-3 rounded-lg transition-all duration-300 text-lg font-serif ${isDisabled
                            ? "bg-[#f2e8d0] border border-[#c5b692] text-[#9c8c76] cursor-not-allowed"
                            : "bg-[#c5a86a] hover:bg-[#b69557] text-white shadow-md"
                            }`}
                    >
                        Send Message ✉️
                    </Button>
                </motion.div>
            </motion.form>
        </section>
    );
}
