// src/components/SlickCarousel.js
import React from 'react';
import Slider from 'react-slick';

const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="path/to/your/image1.jpg" alt="Slide 1" />
        <h3>Slide 1</h3>
      </div>
      <div>
        <img src="path/to/your/image2.jpg" alt="Slide 2" />
        <h3>Slide 2</h3>
      </div>
      <div>
        <img src="path/to/your/image3.jpg" alt="Slide 3" />
        <h3>Slide 3</h3>
      </div>
    </Slider>
  );
};

export default SlickCarousel;
