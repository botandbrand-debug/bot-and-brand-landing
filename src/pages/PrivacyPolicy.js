import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-gradient-to-b from-[#eaffea] via-white to-[#eaffea] dark:from-black dark:via-zinc-900 dark:to-black text-black dark:text-white px-6 py-16 transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center 
          text-black 
          dark:bg-gradient-to-r dark:from-neonGreen dark:to-electricBlue dark:text-transparent dark:bg-clip-text">
          Privacy Policy
        </h1>

        <p className="mb-8 text-center text-lg text-zinc-800 dark:text-gray-200">
          Effective Date: October 15, 2025
        </p>

        <div className="grid gap-8">
          {[
            {
              title: "Introduction",
              text:
                "Bot and Brand provides digital solutions that help businesses manage customer relationships, automate conversations, and grow their online presence. This Privacy Policy explains how we collect, use, and protect data when users interact with our services, including integrations with Facebook, Instagram, WhatsApp, TikTok, LinkedIn, websites, and other supported platforms.",
            },
            {
              title: "Our Services",
              text:
                "We provide automated chatbots, branded social media content, scheduling and posting, strategy, and analytics. Clients connect their social media accounts via OAuth, and all posting is handled by Bot and Brand. Personal posting by clients through the system is prohibited.",
            },
            {
              title: "Information We Collect",
              text:
                "Depending on the platform, we may collect public profile information, email addresses (if granted), messaging data, engagement metrics, and OAuth tokens. We also collect information provided directly via website forms or chat interactions.",
            },
            {
              title: "How We Use Your Information",
              text:
                "We use collected data to automate customer interactions, manage social media content posting, provide analytics, and personalize services. OAuth tokens are stored securely and only used for the authorized purposes.",
            },
            {
              title: "Data Security",
              text:
                "OAuth tokens are stored in encrypted backend systems. We never store passwords. Clients can revoke access at any time via the connected platform. Data is retained only as long as necessary and protected with technical and organizational safeguards.",
            },
            {
              title: "Data Sharing",
              text:
                "We may share data with essential service providers and legal authorities when required. We do not sell or trade personal data. All actions comply with platform policies and applicable law.",
            },
            {
              title: "Your Rights",
              text:
                "You can access, correct, or request deletion of your data. Contact us at hello@botandbrand.app for any requests. Revoking platform permissions also stops our access.",
            },
            {
              title: "Policy Updates",
              text:
                "We may update this Privacy Policy periodically. The latest version will always be available at botandbrand.app/privacy-policy with the updated effective date.",
            },
            {
              title: "Contact Us",
              text:
                "For questions or concerns regarding this Privacy Policy, email us at hello@botandbrand.app or visit botandbrand.app.",
            },
          ].map(({ title, text }, i) => (
            <div
              key={i}
              className="bg-white/80 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-bold mb-2 text-electricBlue dark:text-neonGreen">
                {title}
              </h2>
              <p className="text-base text-zinc-800 dark:text-gray-200">{text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="mailto:hello@botandbrand.app"
            className="inline-flex items-center gap-2 bg-neonGreen text-black dark:text-white dark:bg-green-700 hover:dark:bg-green-600 hover:scale-105 transition-all px-6 py-3 rounded-full font-semibold shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
