import React from "react";
import Slider from "react-slick";
function Galery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src="./images/photo-2.jpeg" alt="phot" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="./images/photo-2.jpeg" alt="phot" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="./images/photo-2.jpeg" alt="phot" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="./images/photo-2.jpeg" alt="phot" />
          <p className="legend">Legend 4</p>
        </div>
        <div>
          <img src="./images/photo-2.jpeg" alt="phot" />
          <p className="legend">Legend 5</p>
        </div>
        <div>
          <img src="assets/6.jpeg" />
          <p className="legend">Legend 6</p>
        </div>
      </Slider>
    </div>
  );
}

export default Galery;
