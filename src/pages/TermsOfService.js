import React from "react";

const TermsOfService = () => {
  return (
    <section className="bg-gradient-to-b from-[#eaffea] via-white to-[#eaffea] dark:from-black dark:via-zinc-900 dark:to-black text-black dark:text-white px-6 py-16 transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center 
          text-black
          dark:bg-gradient-to-r dark:from-neonGreen dark:to-electricBlue dark:text-transparent dark:bg-clip-text"
        >
          Terms of Service
        </h1>

        <div className="grid gap-8">
          {[
            {
              title: "Introduction",
              text: "Welcome to Bot and Brand. These Terms govern your use of our services including automated chatbots, content posting, and integrations with supported platforms.",
            },
            {
              title: "Services Provided",
              text: "We handle content creation, scheduling, posting, automation, and strategy for clients. Clients cannot post directly through connected accounts.",
            },
            {
              title: "Account Responsibilities",
              text: "Clients maintain account security, while Bot and Brand manages all posting and automation. Manual posting by clients is prohibited.",
            },
            {
              title: "OAuth Tokens & Data",
              text: "OAuth tokens are stored securely and used only as authorized. Clients can revoke access at any time.",
            },
            {
              title: "Acceptable Use",
              text: "All content is posted by Bot and Brand personnel or automated systems. Compliance with platform rules and content policies is our responsibility.",
            },
            {
              title: "Data & Privacy",
              text: "Handled according to our Privacy Policy. Clients can request deletion or revoke access at any time.",
            },
            {
              title: "Intellectual Property",
              text: "All content created by Bot and Brand remains our property unless agreed otherwise. Clients grant us a limited license to use supplied materials for service delivery.",
            },
            {
              title: "Service Availability",
              text: "We strive for reliable services but cannot guarantee uninterrupted access. Services are provided 'as-is'.",
            },
            {
              title: "Limitation of Liability",
              text: "Bot and Brand is not liable for indirect, incidental, or consequential damages. Contact us for any issues.",
            },
            {
              title: "Termination",
              text: "You can revoke access or terminate accounts at any time. We may suspend or terminate access for violations.",
            },
            {
              title: "Changes to Terms",
              text: "Terms may be updated periodically. Latest versions are available at https://botandbrand.app/terms-of-service",
            },
            {
              title: "Contact Us",
              text: "Email hello@botandbrand.app for any questions or concerns regarding these Terms.",
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

export default TermsOfService;
