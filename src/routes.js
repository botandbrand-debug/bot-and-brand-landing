// src/routes.js
import { useRoutes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";

function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/services", element: <Services /> },
    { path: "/contact", element: <Contact /> },
    { path: "/testimonials", element: <Testimonials /> },
    { path: "/pricing", element: <Pricing /> },
    { path: "/faq", element: <FAQ /> },
  ]);

  return routes;
}

export default AppRoutes;
