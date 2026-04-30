import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero/self-love-hero.jpg";
import revealPortrait from "@/assets/portraits/whispers-of-self-love.jpg";

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 0.32]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-180%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.6, 0]);

  const portraitY = useTransform(scrollYProgress, [0.3, 1], ["15%", "0%"]);
  const portraitOpacity = useTransform(scrollYProgress, [0.3, 0.85], [0, 1]);
  const portraitScale = useTransform(scrollYProgress, [0.3, 1], [1.15, 1]);

  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[180vh]"
      aria-label="Hero"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        {/* Background mural */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Self Love mural — twelve portraits by Mr. CAP"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/50" />
        </div>

        {/* Portrait reveal */}
        <motion.div
          style={{ y: portraitY, opacity: portraitOpacity, scale: portraitScale }}
          className="absolute inset-0 z-[1] pointer-events-none flex items-center justify-center"
        >
          <img
            src={revealPortrait}
            alt="Whispers of Self Love — portrait by Mr. CAP"
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </motion.div>

        {/* Title block */}
        <motion.div
          style={{ scale: titleScale, y: titleY, opacity: titleOpacity }}
          className="relative z-10 text-center px-6"
        >
          <p className="text-eyebrow text-accent-rose mb-6 animate-fade-in">A Digital Art Book by Mr. CAP</p>
          <h1 className="text-hero">
            Self<span className="italic font-light"> Love</span>
          </h1>
          <p className="mt-8 font-display italic text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto">
            Twelve women. Twelve stories. One reckoning.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/stories"
              className="text-eyebrow px-8 py-4 bg-foreground text-background hover:bg-accent-rose hover:text-background transition-colors duration-500"
            >
              Read the Twelve
            </Link>
            <Link
              to="/about"
              className="text-eyebrow px-8 py-4 border border-foreground/40 text-foreground hover:border-foreground transition-colors duration-500"
            >
              The Story Behind It
            </Link>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          style={{ opacity: indicatorOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
        >
          <span className="text-eyebrow text-muted-foreground">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};
