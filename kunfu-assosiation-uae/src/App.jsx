import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Preloader from "./layouts/Preloader";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Events from "./pages/Events";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import ProgramDetails from "./pages/ProgramDetails";
import BlogDetails from "./pages/BlogDetails";
import EventDetails from "./pages/EventDetails";
import NotFound from "./pages/NotFound"; // Create this page for 404
import Membership from "./pages/Membership";
import Verification from "./pages/Verification";
import Gallery from "./pages/Gallery";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndCondition";

// Define router
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/initiatives", element: <Programs /> },
  { path: "/events", element: <Events /> },
  { path: "/blog", element: <Blog /> },
  { path: "/membership", element: <Membership /> },
  { path: "/verification", element: <Verification /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/contact", element: <Contact /> },
  { path: "/initiatives/:slug", element: <ProgramDetails /> },
  { path: "/blog/:slug", element: <BlogDetails /> },
  { path: "/event-details", element: <EventDetails /> },
  { path: "*", element: <NotFound /> }, // 404 page
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/terms-and-conditions", element: <TermsAndConditions/> }, // 404 page
]);

const App = () => {
  return (
    <>
      <Preloader />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
