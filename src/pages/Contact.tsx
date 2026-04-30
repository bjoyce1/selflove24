import { useState } from "react";
import { SEO } from "@/components/SEO";
import { toast } from "sonner";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    toast.success("Message received. Cap will read it himself.");
  };
  return (
    <>
      <SEO title="Contact — The Self Love Project" description="Send a message. Tell Cap about the woman in your life he missed." />
      <main className="pt-6 md:pt-32 pb-tabs md:pb-24">
        <div className="container max-w-2xl">
          <p className="text-eyebrow text-accent-rose mb-6 hidden md:block">Contact</p>
          <h1 className="text-display-1 mb-6 hidden md:block">Say something.</h1>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl">
            Press, prints, prayers, or the woman in your life I missed — write to me here.
          </p>
          {sent ? (
            <p className="font-display italic text-2xl">Thank you. I'll read it myself.</p>
          ) : (
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label className="text-eyebrow text-muted-foreground block mb-2">Name</label>
                <input required className="w-full bg-bg-secondary border border-border px-4 py-3 focus:outline-none focus:border-accent-rose transition-colors" />
              </div>
              <div>
                <label className="text-eyebrow text-muted-foreground block mb-2">Email</label>
                <input required type="email" className="w-full bg-bg-secondary border border-border px-4 py-3 focus:outline-none focus:border-accent-rose transition-colors" />
              </div>
              <div>
                <label className="text-eyebrow text-muted-foreground block mb-2">Message</label>
                <textarea required rows={6} className="w-full bg-bg-secondary border border-border px-4 py-3 focus:outline-none focus:border-accent-rose transition-colors resize-none" />
              </div>
              <button type="submit" className="text-eyebrow px-8 py-4 bg-foreground text-background hover:bg-accent-rose transition-colors duration-500">
                Send
              </button>
            </form>
          )}
        </div>
      </main>
    </>
  );
};

export default Contact;
