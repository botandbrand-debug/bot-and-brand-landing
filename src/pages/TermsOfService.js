import React from "react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f16] via-[#0d1520] to-[#0f1a29] relative">
      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-12 relative z-10">
        
        {/* Header with branding - matching Waitlist */}
        <div className="mb-10 sm:mb-16 px-1 sm:px-2">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 md:gap-6">
            {/* Decorative element */}
            <div className="flex-shrink-0 mb-3 sm:mb-0">
              <div className="relative group">
                <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-blue-500/30 backdrop-blur-sm">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="space-y-1 sm:space-y-2">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug sm:leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Terms of Service
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 font-light">
                Your agreement with Bot & Brand OS
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

        {/* Effective Date */}
        <div className="mb-8 sm:mb-12 text-center">
          <div className="inline-block bg-[#1a2332] rounded-lg px-4 sm:px-6 py-2 sm:py-3 border border-gray-800">
            <p className="text-gray-400 text-sm sm:text-base">
              Effective Date: <span className="text-white font-medium">February 15, 2026</span>
              <span className="ml-2 text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full">Updated</span>
            </p>
          </div>
        </div>

        {/* Introduction Card */}
        <div className="mb-8 sm:mb-10">
          <div className="bg-gradient-to-br from-blue-900/20 via-blue-800/10 to-cyan-900/20 rounded-xl sm:rounded-2xl border border-blue-500/30 p-5 sm:p-6 md:p-8 backdrop-blur-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2 sm:gap-3">
              <div className="w-1.5 h-6 sm:w-2 sm:h-8 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></div>
              Introduction
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Welcome to Bot & Brand OS. These Terms govern your use of our complete business operations platform, 
              including CRM, Booking System, Order Management System (OMS), automated chatbots, content posting, 
              and integrations with supported platforms. By using our services, you agree to these terms.
            </p>
          </div>
        </div>

        {/* Grid of terms sections */}
        <div className="grid gap-6 sm:gap-8 mb-10 sm:mb-16">
          {[
            {
              title: "Services Provided",
              text: "Bot & Brand OS provides a comprehensive business operations platform including: Customer Relationship Management (CRM) for managing contacts, deals, and interactions; Booking System for scheduling appointments and managing calendars; Order Management System (OMS) for processing, tracking, and fulfilling orders; Content creation, scheduling, and posting; Automated chatbots and customer communication tools; Analytics and reporting across all services. All posting and customer communications are handled through our platform. Manual posting by clients through connected accounts is prohibited."
            },
            {
              title: "CRM Services",
              text: "Our CRM stores customer data including contacts, interaction history, deal pipelines, and communication logs. You retain ownership of your customer data. We use this data to provide analytics, automate communications, and improve service delivery. You are responsible for ensuring you have necessary permissions to store and process customer data in your jurisdiction."
            },
            {
              title: "Booking System",
              text: "Our booking system manages appointments, availability, and calendar synchronization. We process booking confirmations, reminders, and cancellations. You are responsible for setting accurate availability and honoring confirmed bookings. No-shows or cancellations are governed by your business policies which must be communicated to customers."
            },
            {
              title: "Order Management System (OMS)",
              text: "Our OMS handles order processing, inventory tracking, fulfillment coordination, and delivery updates. We integrate with your payment processors and logistics partners. You are responsible for fulfilling orders accurately and on time. Disputes regarding product quality or delivery are your responsibility, though we provide tools to manage them."
            },
            {
              title: "Account Responsibilities",
              text: "Clients are responsible for maintaining the security of their Bot & Brand OS account. You are responsible for all activities that occur under your account. Notify us immediately of any unauthorized access. We manage connected social media accounts, booking calendars, and order systems through authorized OAuth tokens and API integrations."
            },
            {
              title: "OAuth Tokens & Data Access",
              text: "OAuth tokens are stored in encrypted backend systems and used only for authorized purposes across CRM, Booking, and OMS functions. We access only the data necessary to provide our services. Clients can revoke access at any time via the connected platform or through your settings section on your Bot & Brand OS dashboard."
            },
            {
              title: "Data Processing & Storage",
              text: "Customer data from CRM, booking records, and order information is stored securely in our systems. We implement industry-standard security measures. Data is retained as long as your account is active or as needed to provide services. You can request data export or deletion at any time. We do not sell your data or your customers' data."
            },
            {
              title: "Payment Processing",
              text: "Payments for services are processed through our integrated payment partners. For orders and bookings processed through our OMS and Booking systems, funds are handled according to your configured payment gateways. We are not responsible for chargebacks, disputes, or failed transactions, though we provide tools to manage them."
            },
            {
              title: "Acceptable Use",
              text: "You may not use Bot & Brand OS for illegal activities, to harass others, distribute malicious content, or violate platform policies. We reserve the right to suspend accounts that violate these terms. All content and communications are subject to our review to ensure compliance."
            },
            {
              title: "Service Level Agreement",
              text: "We strive for 99.9% uptime for our CRM, Booking, and OMS services. Scheduled maintenance will be communicated in advance. We are not liable for downtime caused by third-party services, internet disruptions, or factors beyond our control. Support response times are outlined in your service plan."
            },
            {
              title: "Intellectual Property",
              text: "The Bot & Brand OS platform, including all software, features, and branding, is our intellectual property. Content created by our team (copy, designs, strategies) remains our property unless otherwise agreed. You retain ownership of your business data, customer information, and any content you provide for processing."
            },
            {
              title: "Limitation of Liability",
              text: "Bot & Brand OS is not liable for indirect, incidental, or consequential damages including lost profits, data loss, or business interruption. Our total liability is limited to the amount paid for services in the last 12 months. We provide the platform 'as-is' with no warranties of uninterrupted service."
            },
            {
              title: "Termination",
              text: "You can terminate your account at any time through your dashboard. Upon termination, your data will be deleted within 30 days unless legal obligations require retention. We may suspend or terminate access for violations of these terms. Critical data can be exported before termination."
            },
            {
              title: "Changes to Terms",
              text: "These terms may be updated as we add new features like CRM, Booking, and OMS capabilities. The latest version will always be available at botandbrand.app/terms-of-service with the updated effective date. Continued use after changes constitutes acceptance."
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

        {/* Contact CTA */}
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
              Questions About Our Terms?
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

        {/* Footer Note */}
        <div className="text-center mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-gray-800 max-w-4xl mx-auto">
          <p className="text-gray-400 mb-2 text-sm sm:text-base">
            By using Bot & Brand OS, you agree to these Terms of Service.
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

export default TermsOfService;