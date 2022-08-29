import React from "react";
import Slide2 from "../../assets/images/slide2.png";
import { Label } from "reactstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MiddleSlide = () => {
  const settings = {
    className: "center",
    dots: true,
    centerMode: true,
    infinite: true,
    arrow: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };

  const Images = [
    {
      imageSrc: Slide2,
    },
    {
      imageSrc: Slide2,
    },
    {
      imageSrc: Slide2,
    },
  ];
  return (
    <React.Fragment>
      <div
        className="bg-black"
        // style={{ overflowX: "hidden", overflowY: "hidden" }}
      >
        <Label className="text-white text-3xl flex justify-center p-8">
          Luxury Experience at Secret 17
        </Label>
        {/* <div> */}
        <Slider {...settings}>
          {Images.map((picture, i) => {
            return (
              <div className="flex justify-center w-fit">
                <img
                  src={picture && picture.imageSrc}
                  alt="machine_image"
                  // className="p-20"
                  className="flex justify-center w-auto p-20"
                />
                {/* <div className="absolute">
                  <label>Need Proper Solution For Your Roughy Hairs ? </label>
                </div> */}
              </div>
            );
          })}
        </Slider>
      </div>
      {/* </div> */}
    </React.Fragment>
  );
};

export default MiddleSlide;
