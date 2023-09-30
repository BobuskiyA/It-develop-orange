import { OurAchievement } from './OurAchievement/OurAchievement';
import { Counter } from '../../containers/Counter';
import { Head } from './Head';
import { Add } from './Add';
import { motion } from 'framer-motion';

export const ConsultationPage = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }} 
    className="consultation-page"
  >
    <Head />

    <OurAchievement />

    <Add />

    <Counter />
  </motion.div>
);
