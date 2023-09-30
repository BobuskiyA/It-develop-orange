import { Counter } from "../../containers/Counter";
import { AboutOurWork } from "./AboutOurWork/AboutOurWork";
import { Hero } from "./Hero";
import { HomeServices } from "./HomeServices";
import { motion } from 'framer-motion';

export const HomePage = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="home-page"
  >
    <Hero />

    <AboutOurWork />

    <HomeServices />

    <Counter />
  </motion.div>
);