import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { stories } from "@/content/stories";
import { ArrowRight } from "lucide-react";

export const GalleryTeaser = () => {
  return (
    <section className="relative bg-background py-24 md:py-32" aria-labelledby="twelve-heading">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <p className="text-eyebrow text-accent-rose mb-4">The Twelve</p>
            <h2 id="twelve-heading" className="text-display-1">
              Each woman, her own <span className="italic">reckoning</span>.
            </h2>
          </div>
          <Link to="/stories" className="text-eyebrow link-underline self-start md:self-auto inline-flex items-center gap-2">
            Read all twelve <ArrowRight size={14} />
          </Link>
        </div>

        {/* Horizontal snap-scroll on mobile, looser grid on desktop */}
        <div className="-mx-6 px-6 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 md:overflow-visible md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-8 md:pb-0">
          {stories.slice(0, 8).map((story, i) => (
            <motion.div
              key={story.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="flex-shrink-0 w-[78vw] sm:w-[55vw] md:w-auto snap-start"
            >
              <Link to={`/stories/${story.slug}`} className="group block">
                <div className="aspect-[4/5] overflow-hidden bg-bg-secondary mb-4">
                  <img
                    src={story.portraitUrl}
                    alt={`Portrait of ${story.name}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div
                  className="h-px w-12 mb-3 transition-all duration-500 group-hover:w-24"
                  style={{ background: story.accentColor }}
                />
                <p className="text-eyebrow text-muted-foreground mb-1">{story.name}</p>
                <h3 className="font-display text-xl md:text-2xl mb-2">{story.title}</h3>
                <p className="text-sm italic text-muted-foreground line-clamp-2">"{story.tease}"</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
