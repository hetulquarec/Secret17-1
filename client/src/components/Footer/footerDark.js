import React from "react";
import Logo from "../../assets/images/logoDark.png";
import Instagram from "../../assets/icons/InstagramDark.png";
import Facebook from "../../assets/icons/Facebook.png";
// import Snapchat from "../../assets/icons/Snapchat.png";
import { Button, Input } from "reactstrap";
import "./footer.css"

// import "../../styles/sell_machine.css";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer min-w-full bg-black">
        {/* <hr className="w-full border-black border " /> */}
        <div className="grid grid-cols-1 md:grid-cols-4 p-5">
          <div className="hidden md:block bg-cotact">
            <img
              className="h-auto bg-cover bg-center bg-no-repeat"
              src={Logo}
              alt="Logo"
            />
            <label className="text-white mt-10">
              Secret 17 is a unisex beauty salon based in Ahmedabad. It is a
              place where you can pamper yourself with a new look every day
            </label>
          </div>

          <div>
            <div className="animate-fade-in-down mb-1 ml-10 text-xl text-white font-bold mt-2">
              Important Links
            </div>
            <div className="animate-fade-in-down mb-8 ml-10 text-lg text-white flex flex-col">
              <label>Home</label>
              <label>Our Services</label>
              <label>Portfolio</label>
              <label>Blogs</label>
              <label>About Us</label>
              <label>Contact us</label>
            </div>
          </div>

          <div>
            <div className="animate-fade-in-down mb-1  text-xl text-white font-bold font-boldmt-2">
              Contact Us
            </div>
            <div className="animate-fade-in-down mb-8  text-md text-white flex flex-col">
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
            <div className="animate-fade-in-down mb-1 ml-10 text-xl text-white font-bold font-boldmt-2">
              Opening Hours
            </div>
            <div className="animate-fade-in-down mb-8 ml-10 text-md text-white flex flex-col">
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

            <div className="animate-fade-in-down mb-1 ml-10 text-xl text-white font-bold font-boldmt-2">
              Social Links
            </div>
            <div className="flex flex-row ml-10">
              <img src={Instagram} alt="instagram" width={30} height={30}/>
              <img src={Facebook} alt="instagram" />
              {/* <img src={Snapchat} alt="instagram" /> */}
            </div>

            <div className="animate-fade-in-down mb-1 ml-10 mt-8 text-xl text-white font-bold font-boldmt-2">
              Salon Membership
            </div>
            <div className="flex flex-row ml-8">
              <Input
                type="text"
                placeholder="Enter Your Phone Number"
                className="border border-gray-300 w-full text-md px-2 italic"
              />
              <Button className="bg-black text-white px-2 rounded-full ml-3 text-md">
                Submit
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-black">
          <label className="flex justify-center text-white p-5">
            Copyrights © {new Date().getFullYear()} All Rights Reserved |
            Secret17
          </label>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Footer;
