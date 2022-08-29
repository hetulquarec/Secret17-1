import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DownSlide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };

  const SliderData = [
    {
      line1: "Extremely happy with the services..",
      line2: " great ambience and amazing staff and hospitality!",
      line3:
        "Loving my nails done by Toka - she's one of the best nail artists in town!",
      by: "---Maanini shah",
    },
    {
      line1: "Extremely happy with the services..",
      line2: " great ambience and amazing staff and hospitality!",
      line3:
        "Loving my nails done by Toka - she's one of the best nail artists in town!",
      by: "---Maanini shah",
    },
    {
      line1: "Extremely happy with the services..",
      line2: " great ambience and amazing staff and hospitality!",
      line3:
        "Loving my nails done by Toka - she's one of the best nail artists in town!",
      by: "---Maanini shah",
    },
  ];
  return (
    <React.Fragment>
      <div
        className="b-white my-20"
        // style={{ overflowX: "hidden", overflowY: "hidden" }}
      >
        <label className="text-3xl flex justify-center">
          What Our Customer Says For Us.
        </label>
        <Slider {...settings}>
          {SliderData.map((data, i) => {
            return (
              <div className="mt-5">
                <div className="bg-black p-10 w-auto mx-5 italic rounded-full ">
                  <div className="p-5">
                    <label className="text-white text-center flex justify-center text-xl">
                      {" "}
                      {data.line1}
                    </label>
                    <label className="text-white text-center flex justify-center text-xl">
                      {" "}
                      {data.line2}
                    </label>
                    <label className="text-white text-center flex justify-center text-xl">
                      {" "}
                      {data.line3}
                    </label>
                    <label className="float-right text-white p-2">
                      {data.by}
                    </label>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </React.Fragment>
  );
};

export default DownSlide;
