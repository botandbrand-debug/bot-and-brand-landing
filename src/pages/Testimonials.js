import React from "react";

const testimonials = [
  {
    name: "Ashley R.",
    feedback:
      "Bot & Brand transformed our online presence. Clients now reach out daily, and our DMs run on autopilot!",
  },
  {
    name: "Adewale A.",
    feedback:
      "I no longer worry about posting. Every week, our pages look alive, clean, and consistent — thanks to them.",
  },
  {
    name: "Zinzi K.",
    feedback:
      "Their voice bot handles our calls, bookings, and even follow-ups. A real game changer!",
  },
];

const getInitials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

const Testimonials = () => {
  return (
    <section className="fadeInUp max-w-6xl mx-auto px-6 py-20 text-center">
      <div className="mb-12">
        <h2 className="text-4xl font-extrabold mb-2 text-[#00ffff] dark:text-[#39ff14]">
          What Our Clients Say
        </h2>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-[#00ffff] to-[#39ff14] rounded-full mb-4" />
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Hear from business owners who’ve launched and scaled with Bot & Brand.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-2xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 group"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="h-14 w-14 flex items-center justify-center rounded-full bg-gradient-to-br from-[#00ffff] to-[#39ff14] text-black font-bold text-xl shadow-inner">
                {getInitials(item.name)}
              </div>
            </div>
            <p className="text-muted-foreground mb-4 text-base leading-relaxed italic">
              “{item.feedback}”
            </p>
            <h4 className="font-semibold text-lg text-[#00ffff] dark:text-[#39ff14]">
              {item.name}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
