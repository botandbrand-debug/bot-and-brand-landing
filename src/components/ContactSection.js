import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="py-20 px-6 bg-neonGreen/10 dark:bg-gradient-to-b dark:from-black dark:via-zinc-900 dark:to-black">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00ffff] to-[#39ff14]">
        Ready to Autopilot Your Digital Presence?
      </h2>

      <p className="text-center text-lg text-muted-foreground mb-8 max-w-xl mx-auto font-medium">
        Let’s launch your brand the smart way. Message us anytime — we reply fast.
      </p>

      <div className="flex justify-center gap-4">
        <a
          href="https://wa.me/27763604655"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          <FaWhatsapp className="text-xl text-neonGreen" />
          WhatsApp
        </a>

        <a
          href="https://www.instagram.com/botandbrand"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          <FaInstagram className="text-xl text-pink-500" />
          Instagram
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
