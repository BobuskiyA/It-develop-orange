import { Counter } from "../../containers/Counter";
import { AboutOurWork } from "./AboutOurWork/AboutOurWork";
import { Hero } from "./Hero";
import { HomeServices } from "./HomeServices";

export const HomePage = () => (
  <div className="home-page">
    <Hero />

    <AboutOurWork />

    <HomeServices />

    <Counter />
  </div>
);