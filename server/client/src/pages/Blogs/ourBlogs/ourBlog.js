import React, { useState } from "react";
import { TabPane, TabContent, Nav, NavItem, NavLink, Label } from "reactstrap";

import NailArt from "./nailArt";
import Womens from "./women";
import Men from "./men";
import HairSpa from "./hairspa";
import HairStyle from "./hairstyle";
import Products from "./products";

import "../../../index.css";
const OurBlog = () => {
  const [blogActiveTab, setBlogActiveTab] = useState(1);

  const toggle = (tab) => {
    if (blogActiveTab !== tab) {
      setBlogActiveTab(tab);
    }
  };

  return (
    <React.Fragment>
      <div className="blog-texture">
        <div className="flex justify-center">
          <Label className="text-white bg-black px-8 py-2 m-10 uppercase ">
            Our Blogs
          </Label>
        </div>
        <div className="flex justify-center mt-10">
          <Nav fill pills className="flex flex-row">
            <NavItem className="text-white mx-2 ">
              <NavLink
                className={{ active: blogActiveTab === 1 }}
                onClick={() => toggle(1)}
                style={{
                  cursor: "pointer",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                Women
              </NavLink>
            </NavItem>
            <NavItem className="text-white mx-2">
              <NavLink
                className={{ active: blogActiveTab === 2 }}
                onClick={() => toggle(2)}
                style={{
                  cursor: "pointer",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                Men
              </NavLink>
            </NavItem>
            <NavItem className="text-white mx-2">
              <NavLink
                className={{ active: blogActiveTab === 3 }}
                onClick={() => toggle(3)}
                style={{
                  cursor: "pointer",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                Products
              </NavLink>
            </NavItem>
            <NavItem className="text-white mx-2">
              <NavLink
                className={{ active: blogActiveTab === 4 }}
                onClick={() => toggle(4)}
                style={{
                  cursor: "pointer",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                Nailarts
              </NavLink>
            </NavItem>
            <NavItem className="text-white mx-2">
              <NavLink
                className={{ active: blogActiveTab === 5 }}
                onClick={() => toggle(5)}
                style={{
                  cursor: "pointer",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                Hairstyles
              </NavLink>
            </NavItem>
            <NavItem className="text-white mx-2">
              <NavLink
                className={{ active: blogActiveTab === 6 }}
                onClick={() => toggle(6)}
                style={{
                  cursor: "pointer",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                Hair Spa
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <div>
          <TabContent activeTab={blogActiveTab}>
            <TabPane tabId={1}>
              <Womens />
            </TabPane>
            <TabPane tabId={2}>
              <Men />
            </TabPane>
            <TabPane tabId={3}>
              <Products />
            </TabPane>
            <TabPane tabId={4}>
              <NailArt />
            </TabPane>
            <TabPane tabId={5}>
              <HairStyle />
            </TabPane>
            <TabPane tabId={6}>
              <HairSpa />
            </TabPane>
          </TabContent>
        </div>
      </div>
    </React.Fragment>
  );
};
export default OurBlog;
