import Arrivals from "./modules/arrivals";
import Features from "./modules/features";
import Header from "./modules/header";
import HeroCarousel from "./modules/hero_carousel";
import Showcase from "./modules/showcase";

export default function App() {
  return (
    <>
      <Header />
      <HeroCarousel />
      <Features />
      <Arrivals />
      <Showcase />
    </>
  );
}
