import React, { Component } from "react";
import Slider from "react-slick";
import "./Carousel.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
    };
    return (
      <div className="Carousal-container">
        <div className="container">
          <h2> </h2>
          <Slider {...settings}>
            <div className="img-carousel">
              <img src="/images/5M4A9720.jpg" alt="vat" />
              <div className="carousel-info">
                <p>suppp dogg</p>
              </div>
            </div>
            <div className="img-carousel">
              <img src="/images/5M4A9764.jpg" alt="veat" />
              <div className="carousel-info">
                <p>suppp dogg</p>
              </div>
            </div>
            <div className="img-carousel">
              <img src="/images/5M4A9783.jpg" alt="vdat" />
              <div className="carousel-info">
                <p>suppp dogg</p>
              </div>
            </div>
            <div className="img-carousel">
              <img src="/images/5M4A9837.jpg" alt="vda\et" />
              <div className="carousel-info">
                <p>suppp dogg</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
