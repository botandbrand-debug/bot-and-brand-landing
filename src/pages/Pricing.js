import { useState } from "react";

const pricingData = {
  USA: {
    currency: "$",
    tiers: {
      Essentials: [140, 378, 714],
      Growth: [260, 702, 1326],
      Autopilot: [450, 1215, 2295],
    },
  },
  Canada: {
    currency: "CAD$",
    tiers: {
      Essentials: [175, 364, 688],
      Growth: [345, 729, 1377],
      Autopilot: [595, 1188, 2244],
    },
  },
  Nigeria: {
    currency: "₦",
    tiers: {
      Essentials: [80000, 216000, 408000],
      Growth: [160000, 432000, 816000],
      Autopilot: [265000, 715500, 1351500],
    },
  },
  Ghana: {
    currency: "GHS",
    tiers: {
      Essentials: [1400, 3780, 7140],
      Growth: [2800, 7560, 14280],
      Autopilot: [4600, 12420, 23460],
    },
  },
  "South Africa": {
    currency: "ZAR",
    tiers: {
      Essentials: [1950, 5265, 9945],
      Growth: [3600, 9720, 18360],
      Autopilot: [6200, 16740, 31620],
    },
  },
  Kenya: {
    currency: "KES",
    tiers: {
      Essentials: [14500, 39150, 73950],
      Growth: [26500, 71550, 135150],
      Autopilot: [45000, 121500, 229500],
    },
  },
};

const flags = {
  USA: "🇺🇸",
  Canada: "🇨🇦",
  Nigeria: "🇳🇬",
  Ghana: "🇬🇭",
  "South Africa": "🇿🇦",
  Kenya: "🇰🇪",
};

const durations = ["Monthly", "3 Months", "6 Months"];
const discounts = {
  "3 Months": 10,
  "6 Months": 15,
};

const features = {
  Essentials: [
    "✅ 3 branded posts per week (image or carousel)",
    "✅ Captions with hashtags, tailored to your brand tone",
    "✅ Scheduled publishing — hands-off posting",
    "✅ Basic chatbot (handles simple FAQs or lead collection)",
    "🚫 No voice or call automation",
    "🚫 No custom reporting",
    "A great start for anyone needing a steady, professional online presence — without doing the heavy lifting.",
  ],
  Growth: [
    "✅ 5 branded posts per week (images, carousels, or reels)",
    "✅ Custom captions + niche-relevant hashtags",
    "✅ Scheduled posts with weekly preview",
    "✅ Advanced chatbot (automated responses, lead capture, welcome flows)",
    "✅ Smart voice/call automation (auto-replies, basic bookings or voice prompts)",
    "🚫 No custom reports or tailored features",
    "Perfect for growing brands who want to stay consistent and respond like a pro, even when offline.",
  ],
  Autopilot: [
    "✅ Daily content (5–7 posts/week in various formats)",
    "✅ Brand-specific captions, designs & strategy",
    "✅ Advanced chatbot (multi-step flows, reminders, follow-ups)",
    "✅ Smart call/voice automation (appointment handling, audio responses, reminders)",
    "✅ Monthly performance dashboard",
    "✅ Tailored service — we adjust the strategy to your industry, market, and style",
    "✅ Priority support",
    "This is your brand, online and on autopilot — from posts to DMs to voice calls, fully handled.",
  ],
};

const Pricing = () => {
  const [region, setRegion] = useState("USA");
  const [duration, setDuration] = useState("Monthly");

  const getPriceIndex = () => {
    switch (duration) {
      case "3 Months":
        return 1;
      case "6 Months":
        return 2;
      default:
        return 0;
    }
  };

  const { currency, tiers } = pricingData[region];
  const index = getPriceIndex();

  return (
    <section className="bg-background text-foreground py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-electricBlue to-neonGreen bg-clip-text text-transparent mb-4">
          Choose Your Plan
        </h1>
        <p className="mb-10 text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
          Local pricing. Global quality. Built to grow with your brand.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
          {/* Region Dropdown */}
          <div className="relative">
            <select
              className="pl-8 pr-10 py-1.5 text-xs rounded bg-card border text-foreground appearance-none min-w-[140px]"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            >
              {Object.keys(pricingData).map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>

            <div className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none text-lg">
              {flags[region]}
            </div>

            <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-muted text-foreground shadow-sm">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Duration Buttons */}
          <div className="flex gap-2">
            {durations.map((d) => (
              <button
                key={d}
                onClick={() => setDuration(d)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition border shadow-sm ${
                  duration === d
                    ? "bg-gradient-to-r from-electricBlue to-green-400 text-white"
                    : "bg-muted text-muted-foreground hover:bg-muted/70"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-6 text-left">
          {Object.entries(tiers).map(([tier, prices]) => {
            const price = prices[index];
            const hasDiscount = duration !== "Monthly";
            const discount = discounts[duration] || 0;

            return (
              <div
                key={tier}
                className="bg-card border shadow-xl p-6 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-2xl font-bold mb-1">
                    {tier === "Essentials" && "💼"}
                    {tier === "Growth" && "🚀"}
                    {tier === "Autopilot" && "🤖"} {tier}
                  </h2>
                  <p className="text-3xl font-semibold mb-1">
                    {currency}
                    {price.toLocaleString()}
                  </p>
                  {hasDiscount && (
                    <p className="text-sm text-green-500 font-medium mb-4">
                      Save {discount}% with {duration}
                    </p>
                  )}
                  <ul className="text-sm space-y-2 mb-6">
                    {features[tier].map((item, i) => (
                      <li
                        key={i}
                        className={
                          item.startsWith("✅")
                            ? "text-green-400"
                            : item.startsWith("🚫")
                            ? "text-red-400"
                            : "text-muted-foreground italic"
                        }
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="https://wa.me/27763604655"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-auto bg-electricBlue hover:bg-electricBlue-dark text-white font-semibold px-6 py-2 rounded-full"
                >
                  Start Now
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
