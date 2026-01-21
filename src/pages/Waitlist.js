import React, { useState } from "react";
import logo from "../assets/logo.png";
import desktopView from "../assets/desktopview.png";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.REACT_APP_MAILERLITE_API_TOKEN}`,
          "Accept": "application/json"
        },
        body: JSON.stringify({
          email: email,
          groups: ["177227062457665010"] // Your MailerLite group ID
        })
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setEmail("");
      } else {
        // Handle specific MailerLite errors
        if (data.error && data.error.message) {
          if (data.error.message.includes("already subscribed")) {
            setError("This email is already on our waitlist.");
          } else if (data.error.message.includes("invalid email")) {
            setError("Please enter a valid email address.");
          } else {
            throw new Error(data.error.message);
          }
        } else {
          throw new Error("Failed to subscribe. Please try again.");
        }
      }
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
      console.error("MailerLite error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f16] via-[#0d1520] to-[#0f1a29] relative">
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        {/* Header with branding */}
        <div className="mb-16 px-2">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            {/* Logo Container */}
            <div className="flex-shrink-0">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-3 border border-blue-500/30 backdrop-blur-sm">
                  <img 
                    src={logo}
                    alt="Bot & Brand Logo"
                    className="h-14 sm:h-16 w-auto"
                  />
                </div>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Bot & Brand OS
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light">
                Your complete business operations partner
              </p>
              
              {/* Decorative line */}
              <div className="flex items-center gap-3 pt-2">
                <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              </div>
            </div>
          </div>
        </div>

        {/* New Introductory Section */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="space-y-6 text-gray-300">
            <p className="text-xl sm:text-2xl md:text-3xl font-light text-gray-200 leading-relaxed">
              We've created a new kind of business operating system built for African businesses.
            </p>

            <p className="text-lg sm:text-xl text-gray-300">
              A single solution that helps you show up professionally, communicate instantly, sell effortlessly, and deliver services without friction. From how customers discover you, to how you respond, follow up, and close everything works together automatically.
            </p>

            <p className="text-lg sm:text-xl text-gray-300 font-medium">
              If you run a growing business in Africa and want to look bigger, move faster, and operate smarter we are for you.
            </p>
          </div>
        </div>

        {/* Dashboard Image Section */}
        <div className="mb-16">
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-blue-500/30 via-cyan-500/20 to-blue-500/30 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
            
            {/* Main container */}
            <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden border border-gray-700/70 shadow-2xl shadow-blue-500/15 transition-all duration-300 hover:shadow-blue-500/25 hover:border-blue-500/40">
              {/* Browser-like top bar */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-4 py-3 flex items-center gap-3 border-b border-gray-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="ml-3 flex-1 flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-white">BB</span>
                  </div>
                  <span className="text-sm text-gray-300 font-medium">dashboard.botandbrand.com</span>
                </div>
              </div>
              
              {/* Dashboard image */}
              <div className="overflow-hidden">
                <img 
                  src={desktopView}
                  alt="Bot & Brand OS Dashboard Preview"
                  className="w-full h-auto max-h-[70vh] object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="space-y-8 text-base sm:text-lg text-gray-300">
            <p>
              For over a decade, I've watched businesses in Nigeria and across Africa face the same challenge. Ambitious founders spend most of their time running operations instead of growing their businesses.
            </p>

            <p>
              I built my first service business when the available tools were basic. WhatsApp, not even WhatsApp Business, Excel sheets, and endless manual follow ups. During that time, I saw brilliant founders friends, family, and colleagues get buried in operational chaos while their real strengths were left underutilized.
            </p>

            <p>
              As customer expectations evolved, businesses were forced to be everywhere at once. They needed to stay visible on social media, respond instantly to inquiries, process bookings, handle payments, coordinate deliveries, and still deliver their core service.
            </p>

            <p className="text-xl font-medium text-gray-100 mt-12 mb-6">
              Along the way, I learned something important.
            </p>

            <p className="text-2xl font-light text-gray-100 italic mb-8 border-l-4 border-blue-500 pl-6 py-4 bg-blue-500/10 rounded-r-xl">
              Tools are necessary, but they are not the solution.
            </p>

            <p>
              Businesses do not need another app on their devices or another dashboard to learn. They need a done for you service built on solid infrastructure and supported by a reliable team. They need someone to take ownership of their technical and operational execution so they can focus on what they do best.
            </p>

            <p className="text-xl font-medium text-gray-100">
              That is why we built Bot & Brand OS.
            </p>

            <p>
              Not as a tool you need to learn and maintain, but as your technical operations partner. We handle everything from customer visibility to automated deliverables, so you can focus on growth.
            </p>
          </div>
        </div>

        {/* Waitlist Explanation */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-900/20 via-blue-800/10 to-cyan-900/20 rounded-2xl border border-blue-500/30 p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></div>
              Why the wait?
            </h2>
            
            <div className="space-y-6 text-gray-300">
              <p>
                This isn't about scarcity. This is about quality. We're using this initial period to carefully assemble and train the specialist team who will take full responsibility for your business's success.
              </p>

              <p>
                We're also rolling out features gradually to early users, so we can serve everyone most effectively at launch.
              </p>

              <p>
                The wait allows us to onboard the right team members who will treat your business growth as their own. We believe in building deep partnerships, not just adding users to a platform.
              </p>

              <div className="mt-8 p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20">
                <p className="font-medium text-white text-center">
                  We're looking for 20 ambitious businesses to build this alongside us. 
                  As a founding member, you'll help shape the service and enjoy lifetime 
                  partnership benefits.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Waitlist Form */}
        <div className="max-w-md mx-auto">
          {submitted ? (
            <div className="text-center p-10 bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-2xl border border-green-500/30">
              <div className="text-4xl mb-4 text-green-400">✓</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                You're In Our Founding Circle
              </h3>
              <p className="text-gray-300">
                Thank you for joining us. We'll contact you personally within 48 hours 
                to schedule our first conversation about your business.
              </p>
            </div>
          ) : (
            <div className="bg-[#1a2332] rounded-2xl border border-gray-800 p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-2 text-center">
                Join the <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Founding 20</span>
              </h3>
              <p className="text-gray-400 text-center mb-8">
                Be among the first businesses to experience done-for-you operations.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-300 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}
                
                <div>
                  <input
                    type="email"
                    placeholder="Your business email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition backdrop-blur-sm"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 disabled:opacity-50 shadow-lg hover:shadow-blue-500/25 hover:shadow-xl"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      Joining the Circle...
                    </span>
                  ) : (
                    "Join the Founding Circle"
                  )}
                </button>
              </form>
              
              <p className="text-gray-500 text-sm text-center mt-6">
                We respect your privacy. No spam, ever.
              </p>
            </div>
          )}

          {/* Team Callout */}
          <div className="text-center mt-12 pt-8 border-t border-gray-800">
            <p className="text-gray-400 mb-4">
              Interested in joining our team?
            </p>
            <a 
              href="mailto:careers@botandbrand.com" 
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-500/30 text-white rounded-xl hover:bg-gradient-to-r hover:from-blue-800/40 hover:to-cyan-800/40 transition-all hover:border-blue-400/50 hover:scale-105"
            >
              We're hiring early team members
            </a>
          </div>
        </div>

        {/* Closing Note */}
        <div className="text-center mt-20 pt-10 border-t border-gray-800 max-w-4xl mx-auto">
          <p className="text-gray-400 mb-6">
            For over a decade, we've learned from the trenches. Today, we're building 
            the operations partner we wish we had.
          </p>
          <p className="font-medium text-gray-300">
            With care,<br />
            <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Your team at Bot & Brand
            </span>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Waitlist;