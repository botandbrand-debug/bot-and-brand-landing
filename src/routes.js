// src/routes.js
import { useRoutes } from "react-router-dom";

// Comment out or remove the pages you don't want accessible
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";
// import Testimonials from "./pages/Testimonials";
// import Pricing from "./pages/Pricing";
// import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Waitlist from "./pages/Waitlist";

function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <Waitlist /> }, // Waitlist is now the homepage
    { path: "/privacy-policy", element: <PrivacyPolicy /> },
    { path: "/terms-of-service", element: <TermsOfService /> },
    // All other routes will show a 404 (or just redirect to Waitlist)
    { path: "*", element: <Waitlist /> } // Redirect any unknown route to Waitlist
  ]);

  return routes;
}

export default AppRoutes;