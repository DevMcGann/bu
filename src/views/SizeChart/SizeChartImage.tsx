import React from 'react';
import './scss/index.scss';

interface SizeChartImageProps {
  imageUrl: string;
  altText: string;
}

const SizeChartImage: React.FC<SizeChartImageProps> = ({
  imageUrl,
  altText,
}) => {
  return <img className="sizeChartImage__image" src={imageUrl} alt={altText} />;
};

export default SizeChartImage;
