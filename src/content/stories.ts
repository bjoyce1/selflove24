import portraitHeartWithin from "@/assets/portraits/the-heart-within.jpg";
import portraitMirrorOfTruth from "@/assets/portraits/the-mirror-of-truth.jpg";
import portraitFindingHerVoice from "@/assets/portraits/finding-her-voice.jpg";
import portraitEmbracingAuthenticity from "@/assets/portraits/embracing-authenticity.jpg";
import portraitBreakingTheChains from "@/assets/portraits/breaking-the-chains.jpg";
import portraitWarriorOfTheStreets from "@/assets/portraits/warrior-of-the-streets.jpg";
import portraitStrengthInTheStruggle from "@/assets/portraits/strength-in-the-struggle.jpg";
import portraitRiseFromTheAshes from "@/assets/portraits/rise-from-the-ashes.jpg";
import portraitEyesOfHope from "@/assets/portraits/eyes-of-hope.jpg";
import portraitWhispersOfSelfLove from "@/assets/portraits/whispers-of-self-love.jpg";
import portraitBlueprintsOfTheHeart from "@/assets/portraits/blueprints-of-the-heart.jpg";
import portraitVisionOfLove from "@/assets/portraits/vision-of-love.jpg";

export type StoryFormat =
  | "standard"
  | "letter"
  | "second-person"
  | "timestamps"
  | "blueprint"
  | "inventory"
  | "manifesto";

export interface Story {
  slug: string;
  name: string;
  title: string;
  tease: string;
  excerpt: string;
  body: string[];
  portraitUrl: string;
  accentColor: string; // hex
  format: StoryFormat;
}

const lorem = [
  "She woke before the city did. The hour belonged to her and to the soft weight of her own breath, the kind of weight you only notice when nothing else is asking for your attention.",
  "There is a particular silence that comes after you stop apologizing for taking up space. It is not loud. It is not victorious. It is simply quieter than the noise it replaced.",
  "She had spent years rehearsing the shape of the woman other people needed her to be. The mirror had grown patient, waiting for her to find her own outline again.",
  "And when she did, she did not announce it. She just kept walking — slower this time, on purpose, like someone who had finally remembered the route.",
];

export const stories: Story[] = [
  {
    slug: "the-heart-within",
    name: "Amara",
    title: "The Heart Within",
    tease: "She had spent years rehearsing the shape of the woman other people needed her to be.",
    excerpt: lorem.slice(0, 2).join("\n\n"),
    body: lorem,
    portraitUrl: portraitAmara,
    accentColor: "#D4A5A5",
    format: "standard",
  },
  {
    slug: "the-mirror-of-truth",
    name: "Nia",
    title: "The Mirror of Truth",
    tease: "The mirror had grown patient, waiting for her to find her own outline again.",
    excerpt: lorem.slice(0, 2).join("\n\n"),
    body: lorem,
    portraitUrl: portraitAmara,
    accentColor: "#D4A5A5",
    format: "standard",
  },
  {
    slug: "finding-her-voice",
    name: "Lila",
    title: "Finding Her Voice",
    tease: "Your voice ain't lost. You just been loaning it out for free.",
    excerpt: lorem.slice(0, 2).join("\n\n"),
    body: lorem,
    portraitUrl: portraitAmara,
    accentColor: "#C9A961",
    format: "standard",
  },
  {
    slug: "embracing-authenticity",
    name: "Zuri",
    title: "Embracing Authenticity",
    tease: "She stopped translating herself for rooms that never asked her to stay.",
    excerpt: lorem.slice(0, 2).join("\n\n"),
    body: lorem,
    portraitUrl: portraitAmara,
    accentColor: "#D4A5A5",
    format: "standard",
  },
  {
    slug: "breaking-the-chains",
    name: "Amina",
    title: "Breaking the Chains",
    tease: "She made an inventory of what she'd carry and what she'd finally set down.",
    excerpt: lorem.slice(0, 2).join("\n\n"),
    body: lorem,
    portraitUrl: portraitAmara,
    accentColor: "#C9A961",
    format: "inventory",
  },
  {
    slug: "warrior-of-the-streets",
    name: "Kesha",
    title: "Warrior of the Streets",
    tease: "Don't soft. That was the rule.",
    excerpt: lorem.slice(0, 2).join("\n\n"),
    body: lorem,
    portraitUrl: portraitKesha,
    accentColor: "#4A1F1F",
    format: "standard",
  },
  {
    slug: "strength-in-the-struggle",
    name: "Maya",
    title: "Strength in the Struggle",
    tease: "A day measured in small wins, hour by hour by hour.",
    excerpt: lorem.slice(0, 2).join("\n\n"),
    body: lorem,
    portraitUrl: portraitAmara,
    accentColor: "#D4A5A5",
    format: "timestamps",
  },
  {
    slug: "rise-from-the-ashes",
    name: "Tasha",
    title: "Rise from the Ashes",
    tease: "For everyone who has lost the house and stayed alive.",
    excerpt: lorem.slice(0, 2).join("\n\n"),
    body: lorem,
    portraitUrl: portraitKesha,
    accentColor: "#4A1F1F",
    format: "standard",
  },
  {
    slug: "eyes-of-hope",
    name: "Aisha",
    title: "Eyes of Hope",
    tease: "She wrote the letter she had been waiting to receive.",
    excerpt: lorem.slice(0, 2).join("\n\n"),
    body: lorem,
    portraitUrl: portraitAmara,
    accentColor: "#C9A961",
    format: "letter",
  },
  {
    slug: "whispers-of-self-love",
    name: "Risa",
    title: "Whispers of Self-Love",
    tease: "I am holding it for the same reason a lighthouse holds its light.",
    excerpt: lorem.slice(0, 2).join("\n\n"),
    body: lorem,
    portraitUrl: portraitAmara,
    accentColor: "#D4A5A5",
    format: "second-person",
  },
  {
    slug: "blueprints-of-the-heart",
    name: "Lexa",
    title: "Blueprints of the Heart",
    tease: "Buildings are never finished.",
    excerpt: lorem.slice(0, 2).join("\n\n"),
    body: lorem,
    portraitUrl: portraitAmara,
    accentColor: "#C9A961",
    format: "blueprint",
  },
  {
    slug: "vision-of-love",
    name: "Siah",
    title: "Vision of Love",
    tease: "I am holding it for the same reason a lighthouse holds its light.",
    excerpt: lorem.slice(0, 2).join("\n\n"),
    body: lorem,
    portraitUrl: portraitAmara,
    accentColor: "#D4A5A5",
    format: "manifesto",
  },
];

export const getStoryBySlug = (slug: string) => stories.find((s) => s.slug === slug);
export const getNextStory = (slug: string) => {
  const i = stories.findIndex((s) => s.slug === slug);
  if (i === -1) return null;
  return stories[(i + 1) % stories.length];
};
