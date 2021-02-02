import React, { Component } from "react";
import Slider from "react-slick";
import { CarouselItems } from "./AboutCitems";

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
          <Slider {...settings}>
            {CarouselItems.map((item) => {
              return (
                <div className={item.className}>
                  <img src={item.src} alt={item.alt}></img>
                  <div className={item.divclassName}>
                    <p>{item.dishname}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}
