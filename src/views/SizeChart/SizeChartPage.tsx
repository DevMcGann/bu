import * as React from 'react';
import SizeChartImage from './SizeChartImage';
import './scss/index.scss';
import { default as women } from '../../images/size-chart-women.jpg';
import { default as men } from '../../images/size-chart-men.jpg';
import { default as kids } from '../../images/size-chart-kids.png';

const SizeChartPage: React.FC = () => {
  const images = [
    {
      id: 'women',
      image: women,
    },
    {
      id: 'men',
      image: men,
    },
    {
      id: 'kids',
      image: kids,
    },
  ];

  return (
    <div className="sizeChartPage">
      <div className="sizeChartPage__title">
        <h1>Tabla de Talles</h1>
      </div>
      <div className="sizeChartPage__body">
        {images.map((image) => {
          return (
            <SizeChartImage
              key={image.id}
              imageUrl={image.image}
              altText={image.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SizeChartPage;
