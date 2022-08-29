import React from "react";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import Slide1Image from "../../assets/images/slide1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const UpperSlide = () => {
  const history = useHistory();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };

  const Images = [
    {
      imageSrc: Slide1Image,
    },
    {
      imageSrc: Slide1Image,
    },
    {
      imageSrc: Slide1Image,
    },
  ];
  return (
    <React.Fragment>
      <div >
        <Slider {...settings}>
          {Images.map((picture, i) => {
            return (
              <div class="container-fluid">
                <section class="row no-gutter align-items-center">
                  <div class="text-center p-0 d-flex align-items-center justify-end">
                    <img
                      class="img-fluid position-relative col-lg-12"
                      src={picture && picture.imageSrc}
                      alt="contact"
                    />
                    <a href="/contact" className="position-absolute">
                      <Button className=" text-white text-2xl mt-64 mr-80 bg-black">
                        Book Appointment
                      </Button>
                    </a>
                  </div>
                </section>
              </div>
              //   <section class="row no-gutter align-items-center">
              //   <div class="col-lg-12 text-center p-0 d-flex align-items-center">
              //     <img
              //       class="img-fluid position-relative col-lg-12"
              //       src={picture && picture.imageSrc}
              //       alt="contact"
              //     />
              //     <div className="flex justify-end position-absolute">
              //     <h3 class=" text-white my-auto text-4xl ">
              //       Contact Us
              //     </h3>
              //     </div>
              //   </div>
              // </section>

              // <div>
              //   <img
              //     src={picture && picture.imageSrc}
              //     alt="machine_image"
              //     className="w-full"
              //   />
              //   <div className="absolute">
              //     <label>Need Proper Solution For Your Roughy Hairs ? </label>
              //   </div>
              // </div>
            );
          })}
        </Slider>
      </div>
      <div>
        <label className="text-3xl font-medium flex justify-center p-8">
          Secret 17 - One Step Solution For Your Hairs & Nails
        </label>

        <div className="flex justify-center">
          <p className="text-lg w-50 text-center">
            With a view to providing a Luxurious experience for one’s styling
            needs-for Best Hair and Best Nail Art, we have stepped into this
            industry where we cater Premium Salon services in Ahmedabad for
            Nails and Hair. One will love to have Our Luxurious Nail and Hair
            Salon Services in Ahmedabad Our Hair and Nail Expert always try
            their best Salon service in Ahmedabad.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};
export default UpperSlide;
