import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What exactly does Bot & Brand do?",
    answer:
      "We create branded content, post it consistently on your social media, and set up chat/voice bots that act like your virtual assistant, answering DMs, booking appointments, and more.",
  },
  {
    question: "Do I need to give you my passwords?",
    answer:
      "No. We use secure collaborator access for platforms like Instagram and Facebook. You stay in control, always.",
  },
  {
    question: "How do the bots work?",
    answer:
      "Once we set up your automated system, it can respond to messages, send reminders, handle bookings, and even follow up, all based on your business flow.",
  },
  {
    question: "What if I want to change my content or pause?",
    answer:
      "You're in charge. You can request updates anytime, and our monthly plans are flexible. Pause or cancel as needed.",
  },
  {
    question: "Is this for individuals or businesses?",
    answer:
      "Both. Whether you're a solo creator or a growing business, we help you look professional and stay active online without burning out.",
  },
  {
    question: "Do I need to be tech-savvy?",
    answer:
      "Not at all. We handle the setup, management, and content. You just approve and enjoy the results.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="fadeInUp bg-background text-foreground py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-black dark:text-white">
          Frequently Asked Questions
        </h2>
        <div className="w-24 h-1 mx-auto bg-black dark:bg-white rounded-full mb-8" />
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
          Everything you need to know before getting started with Bot & Brand.
        </p>

        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggle(index)}
              className="bg-card border border-border rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg text-black dark:text-white">
                  {faq.question}
                </h3>
                <span className="transition-transform duration-300 text-black dark:text-white">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-[500px] mt-3" : "max-h-0"
                }`}
              >
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
