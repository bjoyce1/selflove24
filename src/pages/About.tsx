import mrCap from "@/assets/mr-cap.png";
import { SEO } from "@/components/SEO";

const About = () => (
  <>
    <SEO title="About — The Self Love Project" description="The story behind the stories. Mr. CAP on why he painted twelve women, and why each one needed her own voice." />
    <main className="pt-6 md:pt-32 pb-tabs md:pb-24">
      <header className="container max-w-3xl hidden md:block">
        <p className="text-eyebrow text-accent-rose mb-6">About</p>
        <h1 className="text-display-1">The story behind the stories.</h1>
      </header>

      <div className="container max-w-5xl mt-16">
        <div className="aspect-[16/10] overflow-hidden bg-bg-secondary">
          <img src={mrCap} alt="Cornelius A. Pratt — Mr. CAP" className="w-full h-full object-cover object-top" />
        </div>
      </div>

      <article className="container max-w-2xl mt-20 prose-story">
        <p>
          I'm Mr. CAP. Cornelius Pratt. From Houston, Texas — South Park Coalition since the beginning, blood ties to Johnny "Guitar" Watson, thirty-something years in this music. I have made my living telling stories about other people for a long time. The Self Love Project is the first time I tried to tell stories about <em>people I painted into existence</em> — twelve women who came out of a hard season I had no other way through.
        </p>

        <h2 className="text-display-2 mt-16 mb-6">Why twelve women.</h2>
        <p>
          Because I couldn't paint myself. Because the women in my life — my mama, my sister, the women in the SPC family, the women I'd hurt and the women who'd hurt me, the women who raised me and the women I tried to raise — were the ones I owed something. Not an apology exactly. A <em>witness</em>. I painted twelve so I'd have to keep going. So one face wouldn't be enough to say what I needed to say.
        </p>

        <h2 className="text-display-2 mt-16 mb-6">The names came first.</h2>
        <p>Amara. Nia. Lila. Zuri. Amina. Kesha. Maya. Tasha. Aisha. Risa. Lexa. Siah. Each name carries something. Each one is somebody. I painted the face after I knew the name.</p>

        <h2 className="text-display-2 mt-16 mb-6">Then the stories.</h2>
        <p>
          The first version of these stories was written by an AI. They were technically fine. They were also identical. Twelve different names, one story. So I tore them down. The stories you read here now are real. Each woman has her own voice, her own city, her own catalyst, her own ending.
        </p>

        <h2 className="text-display-2 mt-16 mb-6">What you do with it.</h2>
        <p>
          Read the stories. Slow. Out loud if you can. Pass one to somebody who needs it. Send me the woman in your life I missed and I'll think about adding a thirteenth.
        </p>

        <p className="mt-12 font-display italic text-2xl" style={{ color: "hsl(var(--accent-rose))" }}>
          The work is yours now.
        </p>
        <p className="mt-2 text-muted-foreground">— Cap</p>
      </article>
    </main>
  </>
);

export default About;
