import React from "react";
import moment from "moment";
import Tabcomponent from "../Blogs/tabComponent";
import NailFingure from "../../assets/images/nailsfingure.png";
import { Label } from "reactstrap";

const BlogDetail = (props) => {
  const Data = props.location.state;
  console.log("--------Data-------", Data);
  return (
    <React.Fragment>
      {/* <Tabcomponent /> */}
      <div className="container px-10"></div>
      <div className="container p-10">
        <div className="float-left ...">
          <Label className="mx-10 mb-0">
            {moment(
              Data && Data.createdAt ? Data && Data.createdAt : null
            ).format("DD/MM/YYYY")}
          </Label>
          <div>
            <img
              width="400px"
              height="400px"
              className="mx-10"
              src={Data && Data.articleImage}
              alt="Nails"
            />
          </div>
        </div>

        <p> {Data && Data.article ? Data && Data.article : null}</p>
        <div className="flex justify-end">
          <Label className="font-bold text-lg">
            ~ {Data && Data.authorname ? Data && Data.authorname : null}
          </Label>
        </div>
      </div>
    </React.Fragment>
  );
};
export default BlogDetail;
