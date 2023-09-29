import './HomeServices.scss';

import { HomeServicesCard } from './HomeServicesCard';
import { HomeServicesHead } from './HomeServicesHead';

import ServicesCardContent from "../../../components/ServicesCardContent/ServicesCardContent.json";

export const HomeServices = () => (
  <div className="home-services container">
    <HomeServicesHead />

  <ul className="home-services__cards">
    {ServicesCardContent.map(({ id, title, content }) => (
      <HomeServicesCard
        key={id}
        id={id}
        title={title}
        content={content}
      />
    ))}
  </ul>
  </div>
);