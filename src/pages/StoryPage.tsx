import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { getNextStory, getStoryBySlug, type Story } from "@/content/stories";
import { SEO } from "@/components/SEO";
import NotFound from "./NotFound";
import { ArrowRight } from "lucide-react";

/* ---------- Format renderers ---------- */

const StandardBody = ({ story }: { story: Story }) => (
  <div className="prose-story">
    {story.body.map((p, i) => (
      <p key={i} className={i === story.body.length - 1 ? "italic" : ""} style={i === story.body.length - 1 ? { color: story.accentColor } : undefined}>
        {p}
      </p>
    ))}
  </div>
);

const LetterBody = ({ story }: { story: Story }) => (
  <div className="bg-[#f5f1ea] text-[#1a1a1a] p-8 md:p-14 max-w-[65ch] shadow-2xl">
    <p className="font-mono text-xs mb-8 opacity-60">— a letter, undated —</p>
    <div className="prose-story font-display" style={{ fontWeight: 400 }}>
      {story.body.map((p, i) => <p key={i}>{p}</p>)}
    </div>
    <p className="mt-10 font-display italic">— A.</p>
  </div>
);

const SecondPersonBody = ({ story }: { story: Story }) => (
  <div className="prose-story max-w-[55ch] text-foreground/85" style={{ fontSize: "1.125rem", lineHeight: 1.95 }}>
    {story.body.map((p, i) => (
      <p key={i} className="mb-10">{p}</p>
    ))}
  </div>
);

const TimestampsBody = ({ story }: { story: Story }) => {
  const times = ["05:42", "09:17", "13:30", "21:08"];
  return (
    <div className="prose-story">
      {story.body.map((p, i) => (
        <div key={i} className="grid grid-cols-[64px_1fr] gap-6 mb-10 pb-10 border-b border-border/40 last:border-0">
          <span className="text-eyebrow text-muted-foreground pt-2">{times[i % times.length]}</span>
          <p className="m-0">{p}</p>
        </div>
      ))}
    </div>
  );
};

const InventoryBody = ({ story }: { story: Story }) => (
  <div>
    <div className="grid grid-cols-2 gap-8 mb-12 pb-12 border-b border-border/40">
      <div>
        <p className="text-eyebrow text-accent-rose mb-4">What She Took</p>
        <ul className="font-display text-lg space-y-2">
          {["Her grandmother's ring", "Two notebooks", "The good kitchen knife", "Her name", "A photograph"].map((x) => (
            <li key={x} className="border-b border-border/30 pb-2">{x}</li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-eyebrow text-muted-foreground mb-4">What She Left</p>
        <ul className="font-display text-lg space-y-2 text-muted-foreground italic">
          {["The ring he gave her", "Every apology she'd rehearsed", "His mother's china", "Her smaller voice", "The version of her he liked"].map((x) => (
            <li key={x} className="border-b border-border/30 pb-2">{x}</li>
          ))}
        </ul>
      </div>
    </div>
    <div className="prose-story">
      {story.body.map((p, i) => <p key={i}>{p}</p>)}
    </div>
  </div>
);

const BlueprintBody = ({ story }: { story: Story }) => (
  <div className="relative">
    <div className="absolute inset-0 blueprint-grid opacity-60 pointer-events-none -z-0" />
    <div className="relative space-y-12">
      {["FOUNDATION", "LOAD-BEARING WALLS", "WIRING & WATER", "ROOF"].map((header, i) => (
        <section key={header}>
          <p className="font-mono text-xs tracking-widest text-accent-gold mb-4">§ {String(i + 1).padStart(2, "0")} — {header}</p>
          <p className="prose-story m-0">{story.body[i % story.body.length]}</p>
        </section>
      ))}
    </div>
  </div>
);

const ManifestoBody = ({ story }: { story: Story }) => (
  <div className="text-center max-w-2xl mx-auto">
    {story.body.map((p, i) => (
      <p key={i} className="font-display text-xl md:text-2xl leading-relaxed mb-10 italic">
        {p}
      </p>
    ))}
    <div className="mt-16 pt-10 border-t border-accent-rose/40 font-display text-lg space-y-2">
      <p>I am holding it.</p>
      <p>I am holding it for the same reason</p>
      <p>a lighthouse holds its light.</p>
      <p>Because someone is still out there.</p>
    </div>
  </div>
);

const renderBody = (story: Story) => {
  switch (story.format) {
    case "letter": return <LetterBody story={story} />;
    case "second-person": return <SecondPersonBody story={story} />;
    case "timestamps": return <TimestampsBody story={story} />;
    case "inventory": return <InventoryBody story={story} />;
    case "blueprint": return <BlueprintBody story={story} />;
    case "manifesto": return <ManifestoBody story={story} />;
    default: return <StandardBody story={story} />;
  }
};

/* ---------- Page ---------- */

const StoryPage = () => {
  const { slug = "" } = useParams();
  const story = getStoryBySlug(slug);
  if (!story) return <NotFound />;
  const next = getNextStory(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: story.title,
    name: story.name,
    description: story.tease,
    image: story.portraitUrl,
    author: { "@type": "Person", name: "Cornelius A. Pratt" },
    publisher: { "@type": "Organization", name: "The Self Love Project" },
  };

  return (
    <>
      <SEO
        title={`${story.title} — ${story.name} | The Self Love Project`}
        description={story.tease}
        image={story.portraitUrl}
        type="article"
        jsonLd={jsonLd}
      />
      <main className="pt-24 pb-24">
        {/* Title block */}
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="container max-w-4xl text-center py-16 md:py-24"
        >
          <p className="text-eyebrow mb-6" style={{ color: story.accentColor }}>{story.name}</p>
          <h1 className="text-display-1">{story.title}</h1>
          <p className="mt-8 font-display italic text-xl text-muted-foreground max-w-xl mx-auto">"{story.tease}"</p>
        </motion.header>

        {/* Sticky portrait + body */}
        <div className="container grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-24">
            <div className="aspect-[4/5] overflow-hidden bg-bg-secondary">
              <img src={story.portraitUrl} alt={`Portrait of ${story.name}`} className="w-full h-full object-cover" />
            </div>
            <div className="h-px mt-6" style={{ background: story.accentColor }} />
            <p className="mt-3 text-xs text-muted-foreground font-mono">Mr. CAP · Oil on linen · 2024</p>
          </div>
          <article className="pt-2">
            {renderBody(story)}
          </article>
        </div>

        {/* Next */}
        {next && (
          <section className="container mt-32 pt-16 border-t border-border/40">
            <p className="text-eyebrow text-muted-foreground mb-6">Next</p>
            <Link to={`/stories/${next.slug}`} className="group grid md:grid-cols-[120px_1fr] gap-8 items-center">
              <div className="aspect-square w-32 overflow-hidden">
                <img src={next.portraitUrl} alt={next.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div>
                <p className="text-eyebrow text-muted-foreground mb-2">{next.name}</p>
                <h3 className="text-display-2 inline-flex items-center gap-3">
                  {next.title}
                  <ArrowRight className="transition-transform duration-500 group-hover:translate-x-2" />
                </h3>
              </div>
            </Link>
          </section>
        )}
      </main>
    </>
  );
};

export default StoryPage;
