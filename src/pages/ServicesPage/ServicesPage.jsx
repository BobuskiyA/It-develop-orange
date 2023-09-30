import { ServicesCard } from './ServicesCard/ServicesCard';
import  ServicesCardContent from '../../components/ServicesCardContent/ServicesCardContent.json';
import './ServicesPage.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import './Swiper/swiper.scss'; // core Swiper
import './Swiper/pagination/pagination.scss'; // Pagination module
import { ServicesPageHead } from './ServicesPageHead/ServicesPageHead';
import { ServicesDescription } from './ServicesDescription/ServicesDescription';
import { motion } from 'framer-motion';

export const ServicesPage = () => (
  <>
    <ServicesPageHead />

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} 
      className="services-page"
    >
      <div className="services-page__content">
        <ServicesDescription />

        <ul className="services-page__list">
          {ServicesCardContent.map(({ id, photo_link, title, content }) => {
            return id !== 4 ? (
              <ServicesCard
                key={id}
                id={id}
                photo_link={photo_link}
                title={title}
                content={content}
              />
            ) : null
          })}
        </ul>

        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="services-page__slider"
        >
          {ServicesCardContent.map(({ id, photo_link, title, content }) => {
            return id !== 4 ? (
              <SwiperSlide key={id}> 
                <ServicesCard
                  id={id}
                  photo_link={photo_link}
                  title={title}
                  content={content}
                />
              </SwiperSlide>
            ) : null;
          })}
        </Swiper>
      </div>
    </motion.div>
  </>
);
