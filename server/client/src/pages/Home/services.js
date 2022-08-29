import React from "react";
import { Button, Card, Row, Col } from "reactstrap";
import { useHistory } from "react-router-dom";
import Hair from "../../assets/images/hair.png";
import Nail from "../../assets/images/nail.png";

const Services = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <div className="bg-gray-300 mt-10 pb-40">
        <label className="flex justify-center text-3xl font-medium p-8">
          Our Services
        </label>
        <div className="container">
          <Row className="col-sm-12">
            <Col>
              <div className="flex justify-center relative">
                <img src={Hair} alt="hair" width="auto" height="auto" />
                <div className="absolute">
                <Card className="mt-96 bg-gradient-to-t from-gray-300 to-transparent opacity-70 ...  flex flex-col w-80">
                <label className="text-3xl mx-5 mt-5 flex justify-center text-black">
                  Hairstyles
                </label>
                <label className="text-xl m-2 flex justify-center text-center text-black">
                  A hairstyle is the way hair is cut and styled. A haircut may
                  be just practical, but a hairdo suggests professional styling
                </label>
                <Button className="bg-black text-white my-8 mt-20 mx-4" onClick={() => history.push("/hairs")}>
                  {" "}
                  See More...
                </Button>
              </Card>
                </div>
              </div>
            </Col>

            <Col>
              <div className="flex justify-center relative">
                <img src={Nail} alt="nail" width="auto" height="auto" />
                <div className="absolute">
                <Card className="mt-96 bg-gradient-to-t from-gray-300 to-transparent opacity-70 ...  flex flex-col w-80">
                <label className="text-3xl mx-5 mt-5 flex justify-center text-black">
                Nailarts
                </label>
                <label className="text-xl m-2 flex justify-center text-center text-black">
                  A hairstyle is the way hair is cut and styled. A haircut may
                  be just practical, but a hairdo suggests professional styling
                </label>
                <Button className="bg-black text-white my-8 mt-20 mx-4" onClick={() => history.push("/hairs")}>
                  {" "}
                  See More...
                </Button>
              </Card>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        
      </div>
    </React.Fragment>
  );
};
export default Services;
