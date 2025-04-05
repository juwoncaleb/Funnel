import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MultiRowCarousel() {
  const settings = {
    dots: false, 
    infinite: true,
    speed: 3000, // Speed of transition
    autoplay: true,
    autoplaySpeed: 0, // Continuous scrolling
    slidesToShow: 3, // Display 3 slides at once
    slidesToScroll: 3, // Scroll 3 slides at once
    rows: 3, // 3 rows
    slidesPerRow: 3, // 3 slides per row
    cssEase: "linear",
    arrows: false, 
    pauseOnHover: false,
  };

  return (
    <div className="slider-container" style={{ margin: "40px 0" }}>
      <Slider {...settings}>
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "lightblue",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "200px",
              textAlign: "center",
            }}
          >
            <h3>Card {index + 1}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MultiRowCarousel;
