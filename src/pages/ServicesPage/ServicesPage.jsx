import { ServicesCard } from './ServicesCard/ServicesCard';
import  ServicesCardContent from '../../components/ServicesCardContent/ServicesCardContent.json';
import './ServicesPage.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import './Swiper/swiper.scss'; // core Swiper
import './Swiper/pagination/pagination.scss'; // Pagination module

export const ServicesPage = () => (
  <div className="services-page">
    <div className="services-page__content">
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
  </div>
);
