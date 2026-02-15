import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f16] via-[#0d1520] to-[#0f1a29] relative">
      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-12 relative z-10">
        
        {/* Header with branding - matching Waitlist */}
        <div className="mb-10 sm:mb-16 px-1 sm:px-2">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 md:gap-6">
            {/* Decorative element instead of logo */}
            <div className="flex-shrink-0 mb-3 sm:mb-0">
              <div className="relative group">
                <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-blue-500/30 backdrop-blur-sm">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="space-y-1 sm:space-y-2">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug sm:leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Privacy Policy
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 font-light">
                How we protect and handle your data
              </p>
              
              {/* Decorative line */}
              <div className="flex items-center gap-2 sm:gap-3 pt-1 sm:pt-2">
                <div className="w-8 sm:w-10 md:w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-400"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Effective Date - UPDATED with hardcoded date */}
        <div className="mb-8 sm:mb-12 text-center">
          <div className="inline-block bg-[#1a2332] rounded-lg px-4 sm:px-6 py-2 sm:py-3 border border-gray-800">
            <p className="text-gray-400 text-sm sm:text-base">
              Effective Date: <span className="text-white font-medium">February 15, 2026</span>
              <span className="ml-2 text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full">Updated</span>
            </p>
          </div>
        </div>

        {/* Introduction Card - Special styling for first item */}
        <div className="mb-8 sm:mb-10">
          <div className="bg-gradient-to-br from-blue-900/20 via-blue-800/10 to-cyan-900/20 rounded-xl sm:rounded-2xl border border-blue-500/30 p-5 sm:p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2 sm:gap-3">
              <div className="w-1.5 h-6 sm:w-2 sm:h-8 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></div>
              Introduction
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Bot and Brand provides digital solutions that help businesses manage customer relationships, 
              automate conversations, and grow their online presence. This Privacy Policy explains how we 
              collect, use, and protect data when users interact with our services, including integrations 
              with Facebook, Instagram, WhatsApp, TikTok, LinkedIn, websites, and other supported platforms.
            </p>
          </div>
        </div>

        {/* Grid of policy sections */}
        <div className="grid gap-6 sm:gap-8 mb-10 sm:mb-16">
          {[
            {
              title: "Our Services",
              text: "We provide automated chatbots, branded social media content, scheduling and posting, strategy, and analytics. Clients connect their social media accounts via OAuth, and all posting is handled by Bot and Brand. Personal posting by clients through the system is prohibited."
            },
            {
              title: "Information We Collect",
              text: "Depending on the platform, we may collect public profile information, email addresses (if granted), messaging data, engagement metrics, and OAuth tokens. We also collect information provided directly via website forms or chat interactions."
            },
            {
              title: "How We Use Your Information",
              text: "We use collected data to automate customer interactions, manage social media content posting, provide analytics, and personalize services. OAuth tokens are stored securely and only used for the authorized purposes."
            },
            {
              title: "Data Security",
              // UPDATED text with the requested change
              text: "OAuth tokens are stored in encrypted backend systems. We never store passwords. Clients can revoke access at any time via the connected platform or via your settings section on your Bot & Brand dashboard. Data is retained only as long as necessary and protected with technical and organizational safeguards."
            },
            {
              title: "Data Sharing",
              text: "We may share data with essential service providers and legal authorities when required. We do not sell or trade personal data. All actions comply with platform policies and applicable law."
            },
            {
              title: "Your Rights",
              text: "You can access, correct, or request deletion of your data. Contact us at hello@botandbrand.app for any requests. Revoking platform permissions via the connected platform or your Bot & Brand dashboard also stops our access."
            },
            {
              title: "Policy Updates",
              text: "We may update this Privacy Policy periodically. The latest version will always be available at botandbrand.app/privacy-policy with the updated effective date."
            },
            {
              title: "Contact Us",
              text: "For questions or concerns regarding this Privacy Policy, email us at hello@botandbrand.app or visit botandbrand.app."
            }
          ].map((section, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl sm:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Main content card */}
              <div className="relative bg-[#1a2332] rounded-xl sm:rounded-2xl border border-gray-800 p-5 sm:p-6 md:p-8 hover:border-blue-500/30 transition-all duration-300">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                  <span className="w-1 h-5 sm:w-1.5 sm:h-6 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></span>
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {section.title}
                  </span>
                </h2>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {section.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA - Matching Waitlist style */}
        <div className="max-w-md mx-auto">
          <div className="bg-[#1a2332] rounded-xl sm:rounded-2xl border border-gray-800 p-6 sm:p-8 shadow-xl sm:shadow-2xl text-center">
            <div className="mb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
              Questions About Your Privacy?
            </h3>
            
            <p className="text-gray-400 text-sm sm:text-base mb-6">
              We're here to help. Reach out to our team anytime.
            </p>
            
            <a
              href="mailto:hello@botandbrand.app"
              className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-2.5 sm:py-3 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:shadow-xl text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hello@botandbrand.app
            </a>
            
            <p className="text-gray-500 text-xs sm:text-sm text-center mt-4">
              We typically respond within 24 hours
            </p>
          </div>
        </div>

        {/* Footer Note - Matching Waitlist style */}
        <div className="text-center mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-gray-800 max-w-4xl mx-auto">
          <p className="text-gray-400 mb-2 text-sm sm:text-base">
            Your trust is our priority. We're committed to protecting your data.
          </p>
          <p className="font-medium text-gray-300 text-sm sm:text-base">
            <span className="text-base sm:text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Bot & Brand
            </span>
          </p>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;