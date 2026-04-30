import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { stories } from "@/content/stories";
import { SEO } from "@/components/SEO";
import {
  Mail,
  ListChecks,
  Ruler,
  Clock,
  User,
  Megaphone,
  AlignLeft,
  Eye,
  EyeOff,
} from "lucide-react";

type Format = (typeof stories)[number]["format"];

const FORMAT_META: Record<Format, { label: string; icon: typeof Mail; blurb: string }> = {
  letter: { label: "Letter", icon: Mail, blurb: "Written by hand" },
  inventory: { label: "Inventory", icon: ListChecks, blurb: "An accounting" },
  blueprint: { label: "Blueprint", icon: Ruler, blurb: "Built to scale" },
  timestamps: { label: "Timestamps", icon: Clock, blurb: "A day, logged" },
  "second-person": { label: "Second Person", icon: User, blurb: "Spoken to you" },
  manifesto: { label: "Manifesto", icon: Megaphone, blurb: "Said out loud" },
  standard: { label: "Prose", icon: AlignLeft, blurb: "Told straight" },
};

const Stories = () => {
  const [showFormats, setShowFormats] = useState(false);
  const [activeFormat, setActiveFormat] = useState<Format | "all">("all");

  const formatCounts = useMemo(() => {
    const counts = new Map<Format, number>();
    stories.forEach((s) => counts.set(s.format, (counts.get(s.format) ?? 0) + 1));
    return counts;
  }, []);

  const visibleStories = useMemo(
    () => (activeFormat === "all" ? stories : stories.filter((s) => s.format === activeFormat)),
    [activeFormat]
  );

  return (
    <>
      <SEO
        title="The Twelve — The Self Love Project"
        description="Twelve portraits. Twelve stories. Read all twelve women of The Self Love Project."
      />
      <main className="pt-6 md:pt-32 pb-tabs md:pb-24">
        <header className="container max-w-4xl text-center mb-16 md:mb-20 hidden md:block">
          <p className="text-eyebrow text-accent-rose mb-6">The Twelve</p>
          <h1 className="text-display-1">Each woman. Her own reckoning.</h1>
          <p className="mt-6 text-muted-foreground text-lg max-w-xl mx-auto">
            Twelve portraits painted in a single hard season. Twelve stories written so each face would have a voice of her own.
          </p>
        </header>
        <p className="md:hidden container text-muted-foreground mb-8 mt-2">
          Twelve portraits. Twelve voices. Read them in any order.
        </p>

        {/* Format preview toggle */}
        <div className="container mb-10 md:mb-14">
          <div className="flex items-center justify-between gap-4 border-y border-border/40 py-4">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground hidden sm:block">
              Form follows the woman
            </p>
            <button
              type="button"
              onClick={() => {
                setShowFormats((v) => !v);
                if (showFormats) setActiveFormat("all");
              }}
              className="group inline-flex items-center gap-3 text-eyebrow text-foreground hover:text-accent-rose transition-colors"
              aria-pressed={showFormats}
            >
              {showFormats ? <EyeOff size={14} /> : <Eye size={14} />}
              <span>{showFormats ? "Hide formats" : "Reveal formats"}</span>
              <span
                className={`inline-block h-4 w-7 rounded-full border border-foreground/40 relative transition-colors ${
                  showFormats ? "bg-accent-rose/80 border-accent-rose" : "bg-transparent"
                }`}
                aria-hidden
              >
                <span
                  className={`absolute top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-foreground transition-all ${
                    showFormats ? "left-[14px] bg-background" : "left-0.5"
                  }`}
                />
              </span>
            </button>
          </div>

          {/* Format filter chips */}
          <AnimatePresence initial={false}>
            {showFormats && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap gap-2 pt-5">
                  <FilterChip
                    label="All"
                    count={stories.length}
                    active={activeFormat === "all"}
                    onClick={() => setActiveFormat("all")}
                  />
                  {(Object.keys(FORMAT_META) as Format[])
                    .filter((f) => formatCounts.get(f))
                    .map((f) => {
                      const Icon = FORMAT_META[f].icon;
                      return (
                        <FilterChip
                          key={f}
                          label={FORMAT_META[f].label}
                          count={formatCounts.get(f) ?? 0}
                          active={activeFormat === f}
                          onClick={() => setActiveFormat(f)}
                          icon={<Icon size={12} />}
                        />
                      );
                    })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {visibleStories.map((story, i) => {
            const meta = FORMAT_META[story.format];
            const Icon = meta.icon;
            const originalIndex = stories.findIndex((s) => s.slug === story.slug);
            return (
              <motion.article
                key={story.slug}
                layout
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

                    {/* Format badge overlay */}
                    <AnimatePresence>
                      {showFormats && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute top-4 left-4 inline-flex items-center gap-2 bg-background/90 backdrop-blur px-3 py-1.5 border border-foreground/10"
                        >
                          <Icon size={12} style={{ color: story.accentColor }} />
                          <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-foreground">
                            {meta.label}
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <p className="text-eyebrow text-muted-foreground mb-2">
                    No. {String(originalIndex + 1).padStart(2, "0")} — {story.name}
                  </p>
                  <h2 className="font-display text-3xl md:text-4xl mb-3">{story.title}</h2>
                  <p className="font-display italic text-muted-foreground text-lg leading-snug">"{story.tease}"</p>

                  {/* Format hint line */}
                  <AnimatePresence>
                    {showFormats && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-4 overflow-hidden"
                      >
                        Form: {meta.label} · {meta.blurb}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </Link>
              </motion.article>
            );
          })}
        </div>

        {visibleStories.length === 0 && (
          <p className="container mt-16 text-center font-display italic text-muted-foreground">
            No stories in this form.
          </p>
        )}
      </main>
    </>
  );
};

const FilterChip = ({
  label,
  count,
  active,
  onClick,
  icon,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`inline-flex items-center gap-2 px-3 py-1.5 border text-[11px] font-mono tracking-[0.15em] uppercase transition-colors ${
      active
        ? "border-foreground bg-foreground text-background"
        : "border-border/60 text-muted-foreground hover:border-foreground hover:text-foreground"
    }`}
    aria-pressed={active}
  >
    {icon}
    <span>{label}</span>
    <span className={active ? "opacity-70" : "opacity-50"}>{String(count).padStart(2, "0")}</span>
  </button>
);

export default Stories;
