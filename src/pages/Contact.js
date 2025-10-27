import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="fadeInUp bg-background text-foreground py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Page Header */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">
          Contact Us
        </h1>

        <p className="mb-10 text-muted-foreground">
          Reach us by email, WhatsApp, Instagram, or the form below. We usually respond fast.
        </p>

        {/* Contact Form */}
        <div className="bg-card border border-border rounded-2xl shadow-xl p-6 md:p-10 mb-8">
          <form
            className="grid gap-4 text-left"
            onSubmit={(e) => {
              e.preventDefault();
              const name = e.target[0].value;
              const email = e.target[1].value;
              const message = e.target[2].value;
              window.location.href = `mailto:hello@botandbrand.app?subject=Contact%20from%20${encodeURIComponent(
                name
              )}&body=${encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
              )}`;
            }}
          >
            <input
              type="text"
              placeholder="Enter name"
              required
              className="bg-background border border-border px-4 py-3 rounded-lg placeholder:text-muted-foreground"
            />
            <input
              type="email"
              placeholder="Enter email"
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
              className="w-full bg-black text-white dark:bg-white dark:text-black py-3 rounded-xl shadow-lg hover:opacity-90 transition font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* WhatsApp & Instagram Icon Buttons */}
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://wa.me/27716235194"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 rounded-full bg-white dark:bg-zinc-900 hover:scale-110 transition-transform duration-300 shadow-lg"
            title="Chat on WhatsApp"
          >
            <FaWhatsapp className="text-3xl text-[#39ff14]" />
          </a>
          <a
            href="https://www.instagram.com/botandbrand"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 rounded-full bg-black hover:scale-110 transition-transform duration-300 shadow-lg"
            title="DM us on Instagram"
          >
            <FaInstagram className="text-3xl text-pink-500" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
