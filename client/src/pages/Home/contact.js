import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomInput from "../../components/Custom/textinput";
import { Button, Row, Col, Label } from "reactstrap";
import SalonImage from "../../assets/images/contactSalon.png";

import swal from "sweetalert";

import { Appointment } from "../../services/services";

const Contact = () => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const contactUsSchema = Yup.object().shape({
    fullname: Yup.string().required("Please enter name"),
    email: Yup.string()
      .required("Please enter email address")
      .email("Enter valid email address"),
    phone: Yup.string()
      .required("Please enter phone number")
      .matches(phoneRegExp, "Please enter valid phone number")
      .min(10, "Phone number must be 10 digits or more.")
      .max(13, "Phone number should not be more than 13 digits"),
  });

  const handleSubmit = (values) => {
    const data = {
      name: values.fullname,
      email: values.email,
      phone: values.phone,
    };

    Appointment(data)
      .then((response) => {
        swal(
          "Thankyou for share your Contact Information",
          "You clicked the button!",
          "success"
        );
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log("Call Contact API Here")
  };

  return (
    <React.Fragment>
      <div className="bg-black "
      // style={{overflowX:"hidden"}}
      >
        <Row>
          <Col>
            <div className="m-10 flex justify-center">
              <img src={SalonImage} alt="salon" />
            </div>
          </Col>

          <Col className="m-10">
            <Formik
              initialValues={{
                fullname: "",
                email: "",
                phone: "",
              }}
              validationSchema={contactUsSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, values, handleChange }) => (
                <Form>
                  <Label className="text-white">Name</Label>
                  <CustomInput
                    type="text"
                    name="fullname"
                    values={values}
                    handleChange={handleChange}
                    touched={touched}
                    errors={errors}
                    placeholder="Enter Your Full Name"
                  />

                  <Label className="text-white">Email</Label>
                  <CustomInput
                    type="text"
                    name="email"
                    values={values}
                    handleChange={handleChange}
                    touched={touched}
                    errors={errors}
                    placeholder="Enter Your Email I'd"
                  />

                  <Label className="text-white">Phone Number</Label>
                  <CustomInput
                    type="text"
                    name="phone"
                    values={values}
                    handleChange={handleChange}
                    touched={touched}
                    errors={errors}
                    placeholder="Enter Your Phone Number"
                  />

                  <Button className="text-black bg-white mt-8 p-2 w-40  font-bold">
                    Request A Call
                  </Button>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};
export default Contact;
