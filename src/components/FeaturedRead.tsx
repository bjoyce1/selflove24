import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getStoryBySlug } from "@/content/stories";
import { ArrowRight } from "lucide-react";

export const FeaturedRead = () => {
  const story = getStoryBySlug("whispers-of-self-love");
  if (!story) return null;
  return (
    <section className="relative py-24 md:py-32 bg-bg-secondary border-y border-border/50" aria-labelledby="featured">
      <div className="container max-w-3xl">
        <p className="text-eyebrow text-accent-rose mb-4">A Sample Read</p>
        <h2 id="featured" className="text-display-1 mb-2">{story.title}</h2>
        <p className="font-display italic text-muted-foreground mb-12">— {story.name}</p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1 }}
          className="prose-story relative"
        >
          {story.body.slice(0, 3).map((p, i) => (
            <p key={i} className="text-foreground/90">{p}</p>
          ))}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-bg-secondary pointer-events-none" />
        </motion.div>

        <Link
          to={`/stories/${story.slug}`}
          className="mt-12 inline-flex items-center gap-2 text-eyebrow link-underline"
        >
          Read the full story <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
};
