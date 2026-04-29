import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { stories } from "@/content/stories";
import { SEO } from "@/components/SEO";

const Stories = () => {
  return (
    <>
      <SEO
        title="The Twelve — The Self Love Project"
        description="Twelve portraits. Twelve stories. Read all twelve women of The Self Love Project."
      />
      <main className="pt-32 pb-24">
        <header className="container max-w-4xl text-center mb-20 md:mb-28">
          <p className="text-eyebrow text-accent-rose mb-6">The Twelve</p>
          <h1 className="text-display-1">Each woman. Her own reckoning.</h1>
          <p className="mt-6 text-muted-foreground text-lg max-w-xl mx-auto">
            Twelve portraits painted in a single hard season. Twelve stories written so each face would have a voice of her own.
          </p>
        </header>

        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {stories.map((story, i) => (
            <motion.article
              key={story.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, delay: (i % 2) * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className={i % 3 === 0 ? "md:mt-12" : ""}
            >
              <Link to={`/stories/${story.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-bg-secondary mb-6">
                  <img
                    src={story.portraitUrl}
                    alt={`Portrait of ${story.name}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                  />
                  <div
                    className="absolute bottom-0 left-0 h-1 transition-all duration-700 ease-out w-16 group-hover:w-full"
                    style={{ background: story.accentColor }}
                  />
                </div>
                <p className="text-eyebrow text-muted-foreground mb-2">No. {String(i + 1).padStart(2, "0")} — {story.name}</p>
                <h2 className="font-display text-3xl md:text-4xl mb-3">{story.title}</h2>
                <p className="font-display italic text-muted-foreground text-lg leading-snug">"{story.tease}"</p>
              </Link>
            </motion.article>
          ))}
        </div>
      </main>
    </>
  );
};

export default Stories;
