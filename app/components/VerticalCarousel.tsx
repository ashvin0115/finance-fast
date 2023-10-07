import React from 'react';
import Carousel from 'react-elastic-carousel';
import CaroItem from './CaroItem';

type CarouselProps = {
  lists: string[];
}

const MyCarousel: React.FC<CarouselProps> = ({lists}) => {
  return (
    <Carousel verticalMode itemsToShow={10}>
      {lists.map((image, index) => (
        <CaroItem key={index} value={image} />
      ))}
    </Carousel>
  );
};

export default MyCarousel;