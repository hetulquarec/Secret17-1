import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const Tabcomponent = () => {
  return (
    <React.Fragment>
      <div className="bg-black pt-20">
        <label className="text-3xl text-white flex justify-center">
          Secret17
        </label>
        <label className="text-white flex justify-center">
          We'll style while you smile!
        </label>
        <div className="flex justify-center m-5">
          <Nav className="flex flex-row ">
            <NavItem>
              <NavLink
                href="/"
                // className={{ active: activeTab === 1 }}
                // onClick={() => toggle(1)}
                style={{ cursor: "pointer", color: "white" }}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#"
                // className={{ active: activeTab === 2 }}
                // onClick={() => toggle(2)}
                style={{ cursor: "pointer", color: "white" }}
              >
                Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#"
                // className={{ active: activeTab === 3 }}
                // onClick={() => toggle(3)}
                style={{ cursor: "pointer", color: "white" }}
              >
                Portfolio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#"
                // className={{ active: activeTab === 4 }}
                // onClick={() => toggle(4)}
                style={{ cursor: "pointer", color: "white" }}
              >
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#"
                // className={{ active: activeTab === 5 }}
                // onClick={() => toggle(5)}
                style={{ cursor: "pointer", color: "white" }}
              >
                Contact Us
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Tabcomponent;
