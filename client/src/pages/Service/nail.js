import React from "react";
import { Label,Row,Col,Button } from "reactstrap";
import Contact from "../../assets/images/contactUs.png";
import Nail1 from "../../assets/images/nails/nail1.png";
import Nail2 from "../../assets/images/nails/nail2.png";
import Nail3 from "../../assets/images/nails/nail3.png";


const Nails = () => {
  const HairData = [
    {
      img: Nail1,
      description:
        "Extremely happy with the services.. great ambience and amazing staff and hospitality! Loving my nails done by Toka - she's one of nail artists in town! Extremely happy with the services..great ambience and amazing staff and hospitality Loving my nails done by Toka - she's one of nail artists in town! Extremely happy with the services.. great ambience and amazing staff and hospitality! Loving my nails done by Toka - she's one of  nail artists in town!",
    },
    {
      img: Nail2,
      description:
        "Extremely happy with the services.. great ambience and amazing staff and hospitality! Loving my nails done by Toka - she's one of nail artists in town! Extremely happy with the services..great ambience and amazing staff and hospitality Loving my nails done by Toka - she's one of nail artists in town! Extremely happy with the services.. great ambience and amazing staff and hospitality! Loving my nails done by Toka - she's one of  nail artists in town!",
    },
    {
      img: Nail3,
      description:
        "Extremely happy with the services.. great ambience and amazing staff and hospitality! Loving my nails done by Toka - she's one of nail artists in town! Extremely happy with the services..great ambience and amazing staff and hospitality Loving my nails done by Toka - she's one of nail artists in town! Extremely happy with the services.. great ambience and amazing staff and hospitality! Loving my nails done by Toka - she's one of  nail artists in town!",
    },
    
  ];
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
            <h6 class="w-100 position-absolute text-white my-auto text-4xl">Nails</h6>
          </div>
        </section>
      </div>

      <div>
        <Label className="text-black font-bold text-xl p-8">
          Service Excellence and Creative Expertise defines Secret17. Since
          2022, we have catered to more than 5000 clients with pure skill &
          passion. Owing to our highly skilled, reliable and experienced beauty
          therapists, hairstylists and nail technicians, Secret17 has followed
          suit with more salons opening at various locations across Ahmedabad.
          We have an exhaustive range of services across all branches that
          include hair services such as haircut, hair-color, creative makeovers,
          keratin; bridal makeup services, and spa services using the brands of
          L’Oreal, OPI, QOD, Nashi, and many more internationally renowned
          brands
        </Label>
      </div>
      {HairData && HairData.map((hairdata,key) => {
        return(
            <div className="bg-slate-200">
        <Row>
          <Col className="bg-white col-sm-8 mb-2">
            <Label className="italic text-lg p-5 font-bold text-right">
              {hairdata.description}
            </Label>
            <div className="flex justify-center">
              <Button className="bg-black text-white">Read More...</Button>
            </div>
          </Col>
          <Col className="m-10">
            <img src={hairdata.img} alt="hairblog" />
          </Col>
        </Row>
        <Row>
          <Col className="m-10">
            <img src={hairdata.img} alt="hairblog" />
          </Col>
          <Col className="bg-white col-sm-8 mb-2">
            <Label className="italic text-lg p-5 font-bold text-right">
              {hairdata.description}
            </Label>
            <div className="flex justify-center">
              <Button className="bg-black text-white">Read More...</Button>
            </div>
          </Col>
        </Row>
      </div>
        )
      })}
    </React.Fragment>
  );
};

export default Nails;
