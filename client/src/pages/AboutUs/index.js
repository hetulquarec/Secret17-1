import React from "react";
import { Row, Col, Label } from "reactstrap";
import Contact from "../../assets/images/contactUs.png";
import AboutNail from "../../assets/images/nails/aboutnail.png"
import DownSlide from "../Home/downSlide";
const AboutUs = () => {
  return (
    <React.Fragment>
      <div class="container-fluid">
        <section class="row no-gutter align-items-center">
          <div class="col-lg-12 text-center p-0 d-flex align-items-center">
            <img
              class="img-fluid position-relative col-lg-12"
              src={Contact}
              alt="contact"
            />
            <h6 class="w-100 position-absolute text-white my-auto text-4xl">
              About Us
            </h6>
          </div>
        </section>
      </div>

      <div>
        <Row>
          <Col className="p-20">
            <div className="w-fit">
            <Label className="text-2xl">Who We Are?</Label>
            <Label className="mt-20 text-lg">
              With a view to providing a Luxurious experience for one’s styling
              needs-for Best Hair and Best Nail Art, we have stepped into this
              industry where we cater Premium Salon services in Ahmedabad for
              Nails and Hair. One will love to have Our Luxurious Nail and Hair
              Salon Services in Ahmedabad. Our Hair and Nail Expert always try
              their best so that our client can cherish their “Me Time” with our
              Studio Experts and get the best Salon service in Ahmedabad.
            </Label>
            </div>
          </Col>
          <Col>
          <div className="flex justify-center m-10">
          <img src={AboutNail} alt="nail" width="60%" height="60%"/>
          </div>
          </Col>
        </Row>

        <Row>
        <Col>
          <div className="flex justify-center m-10">
          <img src={AboutNail} alt="nail" width="60%" height="60%"/>
          </div>
          </Col>
          <Col className="p-20">
            <div className="w-fit">
            <Label className="text-2xl flex justify-end">Our Story</Label>
            <Label className="mt-20 text-lg">
              With a view to providing a Luxurious experience for one’s styling
              needs-for Best Hair and Best Nail Art, we have stepped into this
              industry where we cater Premium Salon services in Ahmedabad for
              Nails and Hair. One will love to have Our Luxurious Nail and Hair
              Salon Services in Ahmedabad. Our Hair and Nail Expert always try
              their best so that our client can cherish their “Me Time” with our
              Studio Experts and get the best Salon service in Ahmedabad.
            </Label>
            </div>
          </Col>
          
        </Row>
      </div>

      <DownSlide/>
    </React.Fragment>
  );
};

export default AboutUs;
