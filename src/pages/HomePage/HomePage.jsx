import { AboutOurWork } from "./AboutOurWork/AboutOurWork";
import { Hero } from "./Hero";

export const HomePage = () => (
  <div className="home-page">
    <Hero />

    <AboutOurWork />
  </div>
);