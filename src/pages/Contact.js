import React from "react";

const Contact = () => {
  return (
    <section className="fadeInUp bg-background text-foreground py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-electricBlue to-neonGreen text-transparent bg-clip-text">
          Get in Touch
        </h2>
        <p className="mb-8 text-muted-foreground">
          Reach us by email, WhatsApp, Instagram, or the form below. We usually respond within 1 business day.
        </p>

        <div className="bg-card border border-border rounded-2xl shadow-xl p-6 md:p-10">
          <form className="grid gap-4 text-left">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="bg-background border border-border px-4 py-3 rounded-lg placeholder:text-muted-foreground"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="bg-background border border-border px-4 py-3 rounded-lg placeholder:text-muted-foreground"
            />
            <textarea
              rows="4"
              placeholder="How can we help?"
              required
              className="bg-background border border-border px-4 py-3 rounded-lg placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              className="bg-electricBlue text-white py-3 rounded-xl hover:opacity-90 transition font-semibold"
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 text-sm text-muted-foreground text-center space-y-2">
            <p>
              Or email us directly at{" "}
              <a
                href="mailto:BotAndBrand@solution4u.com"
                className="text-electricBlue underline"
              >
                BotAndBrand@solution4u.com
              </a>
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href="https://wa.me/27763604655"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-green-400 to-green-500 text-white font-medium shadow hover:scale-105 transition"
              >
                Chat on WhatsApp
              </a>
              <a
                href="https://instagram.com/botandbrand"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-electricBlue to-blue-600 text-white font-medium shadow hover:scale-105 transition"
              >
                DM Us on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
