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

// Define router
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/programs", element: <Programs /> },
  { path: "/events", element: <Events /> },
  { path: "/blog", element: <Blog /> },
  { path: "/contact", element: <Contact /> },
  { path: "/program-details", element: <ProgramDetails /> },
  { path: "/blog-details", element: <BlogDetails /> },
  { path: "/event-details", element: <EventDetails /> },
  { path: "*", element: <NotFound /> }, // 404 page
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
