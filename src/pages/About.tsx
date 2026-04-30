import mrCap from "@/assets/mr-cap.png";
import { SEO } from "@/components/SEO";

const About = () => (
  <>
    <SEO
      title="About — The Self Love Project"
      description="The story behind the stories. Mr. CAP on why he made twelve women, the girls inside them, and why each one needed her own voice."
    />
    <main className="pt-6 md:pt-32 pb-tabs md:pb-24">
      <header className="container max-w-3xl hidden md:block">
        <p className="text-eyebrow text-accent-rose mb-6">About</p>
        <h1 className="text-display-1">The story behind the stories.</h1>
      </header>

      <div className="container max-w-5xl mt-16">
        <div className="aspect-[16/10] overflow-hidden bg-bg-secondary">
          <img
            src={mrCap}
            alt="Cornelius A. Pratt — Mr. CAP"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      <article className="container max-w-2xl mt-20 prose-story">
        <p>
          I'm Mr. CAP. Cornelius Pratt. From Houston.
        </p>
        <p>
          I'm a storyteller who works across mediums. Music. Digital art. Tech. Whatever the story asks for, that's what I reach for.
        </p>
        <p>
          The Self Love Project is what happened when I needed all three at once — twelve women who came out of a hard season.
        </p>
        <p className="font-display italic" style={{ color: "hsl(var(--accent-rose))" }}>
          There was no other way through it.
        </p>

        <h2 className="text-display-2 mt-16 mb-6">Why twelve.</h2>
        <p>
          Because I couldn't render myself.
        </p>
        <p>
          The women in my life — the ones who raised me, the ones I tried to raise, the ones I'd hurt, the ones who'd hurt me — were the ones I owed something. Not an apology. A <em>witness</em>. I made twelve so I'd have to keep going. So one face wouldn't be enough to say what I needed to say.
        </p>

        <h2 className="text-display-2 mt-16 mb-6">The names came first.</h2>
        <p>
          Amara. Nia. Lila. Zuri. Amina. Kesha. Maya. Tasha. Aisha. Risa. Lexa. Siah.
        </p>
        <p>
          Each name carries something. Each one is somebody. The face came after the name. The story came after the face.
        </p>

        <h2 className="text-display-2 mt-16 mb-6">About the faces.</h2>
        <p>The portraits are of little girls.</p>
        <p>The stories are about the women they became.</p>
        <p>
          That's on purpose. Every woman in this series — the warrior, the engineer, the teacher with lupus, the one leaving the marriage at 4 a.m. — was once a little girl with her whole self still inside her. Before the world got to her. Before the rules came down. Before the rooms taught her how to be small.
        </p>
        <p>
          I made the girl. I wrote the woman.
        </p>
        <p>You're meant to see both at the same time.</p>
        <p
          className="font-display italic"
          style={{ color: "hsl(var(--accent-rose))" }}
        >
          The woman is the proof that the girl survived. The girl is the proof that the woman is still in there.
        </p>

        <h2 className="text-display-2 mt-16 mb-6">Then the stories.</h2>
        <p>
          The first version was written by an AI. Technically fine. Also identical — twelve different names, one story.
        </p>
        <p>So I tore them down.</p>
        <p>
          The stories you read here now are real. Each woman has her own voice, her own city, her own catalyst, her own ending.
        </p>

        <h2 className="text-display-2 mt-16 mb-6">What you do with it.</h2>
        <p>
          Read them slow. Out loud, if you can. Look at the face while you read. Notice when the girl in the portrait shows up in the woman in the story — and when she goes quiet.
        </p>
        <p>
          Pass one to somebody who needs it. Send me the woman in your life I missed, and I'll think about adding a thirteenth.
        </p>

        <p
          className="mt-12 font-display italic text-2xl"
          style={{ color: "hsl(var(--accent-rose))" }}
        >
          The work is yours now.
        </p>
        <p className="mt-2 text-muted-foreground">— Cap</p>
      </article>
    </main>
  </>
);

export default About;
