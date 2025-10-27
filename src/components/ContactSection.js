import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="py-24 px-6 bg-neonGreen/10 dark:bg-gradient-to-b dark:from-black dark:via-zinc-900 dark:to-black transition-colors duration-500">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#00ffff] to-[#39ff14] bg-clip-text text-transparent leading-snug whitespace-nowrap overflow-x-auto">
          Ready to Autopilot Your Digital Presence?
        </h2>

        <p className="text-lg text-muted-foreground mb-12 font-medium">
          Let’s launch your brand the smart way. Message us anytime, we reply fast.
        </p>

        <div className="flex justify-center gap-6">
          {/* WhatsApp Icon Button */}
          <a
            href="https://wa.me/27716235194"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 rounded-full bg-white dark:bg-zinc-900 hover:scale-110 transition-transform duration-300 shadow-lg"
            title="Chat on WhatsApp"
          >
            <FaWhatsapp className="text-4xl text-[#39ff14]" />
          </a>

          {/* Instagram Icon Button */}
          <a
            href="https://www.instagram.com/botandbrand"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 rounded-full bg-black text-pink-500 hover:scale-110 transition-transform duration-300 shadow-lg"
            title="DM us on Instagram"
          >
            <FaInstagram className="text-4xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
