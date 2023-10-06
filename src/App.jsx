import React from 'react';
import {
  HashRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.scss';

import { Header } from './containers/Header';
import { Footer } from './containers/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ConsultationPage } from './pages/ConsultationPage';
import { FormPage } from './pages/Form/FormPage';

export const App = () => (
  <AnimatePresence>
    <HashRouter>
      <div className="app">
        <div className="app__header">
          <Header />
        </div>

        <div className="app__main">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<HomePage />} />  
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/consultation" element={<ConsultationPage />} />
            <Route path='/form' element={<FormPage />} />
          </Routes>            
        </div>

        <div className="app__footer">
          <Footer />
        </div>
      </div>
    </HashRouter>
  </AnimatePresence>
);
