import { Link } from "react-router-dom";
import mrCap from "@/assets/mr-cap.png";
import { ArrowRight } from "lucide-react";

export const AboutTeaser = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="container grid md:grid-cols-2 gap-12 md:gap-16 items-center">
      <div className="aspect-[4/5] max-w-md w-full overflow-hidden bg-bg-secondary">
        <img src={mrCap} alt="Cornelius A. Pratt — Mr. CAP" loading="lazy" className="w-full h-full object-cover" />
      </div>
      <div>
        <p className="text-eyebrow text-accent-rose mb-4">The Story Behind</p>
        <blockquote className="font-display text-2xl md:text-3xl leading-snug">
          "I made these portraits during the hardest season of my life. Twelve faces I created because I couldn't paint my own."
        </blockquote>
        <p className="mt-6 text-muted-foreground">
          — Cornelius A. Pratt, Mr. CAP
        </p>
        <Link to="/about" className="mt-10 inline-flex items-center gap-2 text-eyebrow link-underline">
          Read the full story <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  </section>
);
