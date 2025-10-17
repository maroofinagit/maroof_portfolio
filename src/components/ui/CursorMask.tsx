"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorMask() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth follow
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const [isTextHover, setIsTextHover] = useState(false);
  const [isHidden, setIsHidden] = useState(false); // hide on skill icon hover
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Detect screen size
  useEffect(() => {
    if (!mounted) return;
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [mounted]);

  // Track mouse position + hover detection dynamically
  useEffect(() => {
    if (!mounted) return;

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 24); // offset half size
      mouseY.set(e.clientY - 24);

      const el = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;

      if (el) {
        // Hide cursor on .no-cursor or .skill-icon
        setIsHidden(el.closest(".no-cursor, .skill-icon") !== null);

        // Scale/unblur cursor on text, buttons, images, SVGs
        setIsTextHover(
          el.matches("p, h1, h2, h3, h4, h5, h6, span, a, img, button, svg , input , textarea, blockquote, figcaption") ||
          el.closest("p, h1, h2, h3, h4, h5, h6, span, a, img, button, svg , input, textarea, blockquote, figcaption") !== null
        );
      } else {
        setIsHidden(false);
        setIsTextHover(false);
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mounted, mouseX, mouseY]);

  // 🚫 Skip rendering on server + mobile
  if (!mounted || isMobile) return null;

  return (
    <motion.div
      style={{ x: smoothX, y: smoothY }}
      className="fixed left-0 top-0 z-[9999] pointer-events-none"
      animate={{ opacity: isHidden ? 0 : 1 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="w-16 aspect-square rounded-full bg-white/10 border border-white/20 shadow-xl"
        animate={{
          scale: isTextHover ? 2 : 1,
          backgroundColor: isTextHover
            ? "rgba(255,255,255,0)"
            : "rgba(255,255,255,0.15)",
          backdropFilter: isTextHover
            ? "none"
            : "blur(2px) saturate(100%)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </motion.div>
  );
}
