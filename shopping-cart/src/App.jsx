import React, { Suspense, lazy } from "react";
// Use React.lazy to dynamically import each module
const Arrivals = lazy(() => import("./modules/arrivals"));
const Features = lazy(() => import("./modules/features"));
const Header = lazy(() => import("./modules/header"));
const HeroCarousel = lazy(() => import("./modules/hero_carousel"));
const Parallax = lazy(() => import("./modules/parallax"));
const Showcase = lazy(() => import("./modules/showcase"));

export default function App() {
  // Wrap your components with Suspense and provide a fallback
  // Fallback can be a spinner, loading indicator, or any placeholder
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
      }
    >
      <>
        <Header />
        <HeroCarousel />
        <Features />
        <Arrivals />
        <Showcase />
        <Parallax />
        <Showcase />
        <Showcase />
      </>
    </Suspense>
  );
}
