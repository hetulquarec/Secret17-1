import React from "react";
import { Col, Label, Row } from "reactstrap";
import HairBlog from "../../assets/images/hairBlog.png";
import NailBlog from "../../assets/images/nailBlog.png";

const BlogDetails = () => {
  return (
    <React.Fragment>
      <div className="bg-slate-200">
        <Row>
          <Col className="bg-white col-sm-8 mb-2">
            <Label className="italic text-lg p-5 font-bold text-right">
              Extremely happy with the services.. <br /> great ambience and
              amazing staff and hospitality! <br /> Loving my nails done by Toka
              - she's one of nail artists in town! Extremely happy with the
              services.. great ambience and amazing staff and hospitality!
              Loving my nails done by Toka - she's one of nail artists in town!
              Extremely happy with the services.. great ambience and amazing
              staff and hospitality! Loving my nails done by Toka - she's one of
              nail artists in town!
            </Label>
          </Col>
          <Col className="m-10">
            <img src={HairBlog} alt="hairblog" />
          </Col>
        </Row>
        <Row>
          <Col className="m-10">
            <img src={NailBlog} alt="hairblog" />
          </Col>
          <Col className="bg-white col-sm-8 mb-2">
            <Label className="italic text-lg p-5 font-bold text-right">
              Extremely happy with the services.. <br /> great ambience and
              amazing staff and hospitality! <br /> Loving my nails done by Toka
              - she's one of nail artists in town! Extremely happy with the
              services.. great ambience and amazing staff and hospitality!
              Loving my nails done by Toka - she's one of nail artists in town!
              Extremely happy with the services.. great ambience and amazing
              staff and hospitality! Loving my nails done by Toka - she's one of
              nail artists in town!
            </Label>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};
export default BlogDetails;
