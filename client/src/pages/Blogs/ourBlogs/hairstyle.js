import React, { useEffect, useState } from "react";
import { Label, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { GetBlogDetail } from "../../../services/services";

const HairStyle = () => {
  const [hairStyleData, setHairStyledata] = useState([]);

  const getBlogData = () => {
    GetBlogDetail()
      .then((response) => {
        const result =
          response &&
          response.data.filter((item) => item.category === "hairstyles");
        setHairStyledata(result);
      })
      .catch((err) => {
        console.log("----err----", err);
      });
  };

  useEffect(() => {
    getBlogData();
  }, []);

  const blogArtical = (article) => {
    if (article !== undefined) {
      let Blogarticle = article.slice(0, 150) + "....";
      return Blogarticle;
    }
    return article;
  };

  return (
    <React.Fragment>
      <div className="m-10">
        <Row>
          {hairStyleData &&
            hairStyleData.map((data, key) => {
              return (
                <Col>
                  <div className="drop-shadow-lg flex justify-center">
                    <img
                      src={data && data.articleImage}
                      alt="nails"
                      className="w-96 h-96"
                    />
                  </div>
                  <div className="flex justify-center">
                    <div className="w-96 p-2  my-3 drop-shadow-lg bg-gradient-to-b from-black via-stone-800 to-stone-400 ...">
                      <Label className="text-xl flex justify-center text-white">
                        {data && data.title}
                      </Label>
                      <Label className="flex justify-center text-white">
                        {data && data.article && blogArtical(data.article)}
                      </Label>
                      <div className="flex justify-center">
                        <Link to={{ pathname: "/blogs-detail", state: data }}>
                          <Button
                            className="bg-black"
                            // onClick={() => history.push("/blogs-detail")}
                          >
                            Read More...
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
        </Row>
      </div>
    </React.Fragment>
  );
};
export default HairStyle;
