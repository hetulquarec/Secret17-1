import React from "react";
import Logo from "../../assets/images/logo.png";
import Instagram from "../../assets/icons/Instagram.jpg";
import Facebook from "../../assets/icons/Facebook.png";
// import Snapchat from "../../assets/icons/Snapchat.png";
import { Button, Input } from "reactstrap";
import CustomInput from "../../components/Custom/textinput"
// import { Label, Row, Col, Button } from "reactstrap";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Membership } from "../../services/services";
import swal from "sweetalert";

import "./footer.css";


// import "../../styles/sell_machine.css";

const Footer = () => {
  const mambershipSchema = Yup.object().shape({
    number: Yup.string().required("Please enter a number"),
  });
  const handleSubmit = (values) => {
    const data = {
      number: values.number,
    };
    Membership(data)
      .then((response) => {
        swal(
          "Thanks For your response ",
          "You clicked the button.",
          "success"
        );
      })
      .catch((error) => swal("There was an error", error.message, "danger"));
  };

  return (
    <React.Fragment>
      <div className="footer min-w-full">
        {/* <hr className="w-full border-black border " /> */}
        <div className="grid grid-cols-1 md:grid-cols-4 p-5">
          <div className="hidden md:block bg-cotact mt-16">
            <img
              className="h-auto bg-cover bg-center bg-no-repeat"
              src={Logo}
              alt="Logo"
            />
            <label>
              Secret 17 is a unisex <br /> beauty salon based in Ahmedabad.{" "}
              <br /> It is a place where you can pamper <br /> yourself with a
              new look every day
            </label>
          </div>

          <div>
            <div className="animate-fade-in-down mb-1 ml-10 text-xl text-black font-bold mt-2">
              Important Links
            </div>
            <div className="animate-fade-in-down mb-8 ml-10 text-lg text-black flex flex-col">
              <label>Home</label>
              <label>Our Services</label>
              <label>Portfolio</label>
              <label>Blogs</label>
              <label>About Us</label>
              <label>Contact us</label>
            </div>
          </div>

          <div>
            <div className="animate-fade-in-down mb-1  text-xl text-black font-bold font-boldmt-2">
              Contact Us
            </div>
            <div className="animate-fade-in-down mb-8  text-md text-black flex flex-col">
              <label>
                <b>Address:</b> 102, Arista Bussiness Space 3, Sindhu Bhavan
                Marg, opp. HOF Showroom, Ahmedabad, Gujarat 380054
              </label>
              <label>
                <b>Phone:</b> 063573 63574
              </label>
              <label>
                <b>Email I’d:</b> secret7teen@gmail.com
              </label>
            </div>
          </div>

          <div>
            <div className="animate-fade-in-down mb-1 ml-10 text-xl text-black font-bold font-boldmt-2">
              Opening Hours
            </div>
            <div className="animate-fade-in-down mb-8 ml-10 text-md text-black flex flex-col">
              <label>
                <b>Monday to Friday :- </b> 10:00 am to 9:30 pm
              </label>
              <label>
                <b> Saturday :- </b> 10:00 am to 9:30 pm
              </label>
              <label>
                <b>Sunday :- </b> 10:00 am to 9:30 pm
              </label>
            </div>

            <div className="animate-fade-in-down mb-1 ml-10 text-xl text-black font-bold font-boldmt-2">
              Social Links
            </div>
            <div className="flex flex-row ml-10">
              <a href="https://www.instagram.com/secret17ahmedabad/">
              <img src={Instagram} alt="instagram" />
              </a>
              <a href="https://www.facebook.com/Secret17Studio"> 
              <img src={Facebook} alt="facebook" />
              </a>
              {/* <img src={Snapchat} alt="instagram" /> */}
            </div>

            <div className="animate-fade-in-down mb-1 ml-10 mt-8 text-xl text-black font-bold font-boldmt-2">
              Salon Membership
            </div>

            <div className="flex flex-row ml-8">
              <Formik
                initialValues={{ number: "" }}
                validationSchema={mambershipSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched, values, handleChange }) => (

                
                  <Form>
                    <CustomInput
                      type="text"
                      placeholder="Enter Your Phone Number"
                      className="border border-gray-300 w-full text-md px-2 italic"
                      values={values}
                      name="number"
                      handleChange={handleChange}
                      touched={touched}
                      errors={errors}
                    />
                    <Button className="bg-black text-white px-2 rounded-full ml-3 text-md">
                      Submit
                    </Button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <label className="flex justify-center text-black p-2">
            Copyrights © {new Date().getFullYear()} All Rights Reserved |
            Secret17
          </label>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Footer;
