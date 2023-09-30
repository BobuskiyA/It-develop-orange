import { Logo } from "../../components/Logo";
import { HeaderNavigation } from "./HeaderNavigation";

import './Header.scss';
import { HeaderMenu } from "./HeaderMenu/HeaderMenu";

import { motion } from 'framer-motion';

export const Header = () => (
  <motion.header  
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }} 
    className="header container"
  >
    <Logo />

    <HeaderNavigation />

    <div className="header--menu">
      <HeaderMenu />
    </div>
  </motion.header>
);
