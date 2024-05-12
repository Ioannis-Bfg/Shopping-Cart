import React, { Suspense, lazy, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const Review = lazy(() => import("./modules/review"));
const Owner = lazy(() => import("./modules/owner"));
const Call = lazy(() => import("./modules/call"));
const Footer = lazy(() => import("./modules/footer"));
const Shop = lazy(() => import("./modules/shop"));
const Arrivals = lazy(() => import("./modules/arrivals"));
const Features = lazy(() => import("./modules/features"));
const Header = lazy(() => import("./modules/header"));
const HeroCarousel = lazy(() => import("./modules/hero_carousel"));
const Parallax = lazy(() => import("./modules/parallax"));
const Showcase = lazy(() => import("./modules/showcase"));

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header scrollY={scrollY} />
          <HeroCarousel />
          <Features />
          <Arrivals />
          <Showcase />
          <Parallax />
          <Review />
          <Owner />
          <Call />
          <Footer />
        </>
      ),
    },
    {
      path: "shop",
      element: (
        <>
          <Header scrollY={scrollY} />
          <Shop />
          <Footer />
        </>
      ),
    },
  ]);

  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
}
