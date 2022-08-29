import React from "react";
import { Label ,Row,Col,Card} from "reactstrap";
import Contact from "../../assets/images/contactUs.png"
import Services from "../Home/services";



const Service = () => {
    return(
        <React.Fragment>
<div class="container-fluid">
        <section class="row no-gutter align-items-center">
          <div class="col-lg-12 text-center p-0 d-flex align-items-center">
            <img
              class="img-fluid position-relative col-lg-12"
              src={Contact}
              alt="contact"
            />
            <h3 class="w-100 position-absolute text-white my-auto text-4xl">
            Services
            </h3>
          </div>
        </section>
      </div>

      <div >
        <Label className="text-black font-bold text-xl p-8">Service Excellence and Creative Expertise defines Secret17. Since 2022, we have catered to more than 5000 clients with pure skill & passion. Owing to our highly skilled, reliable and experienced beauty therapists, hairstylists and nail technicians, Secret17 has followed suit with more salons opening at various locations across Ahmedabad. We have an exhaustive range of services across all branches that include hair services such as haircut, hair-color, creative makeovers, keratin; bridal makeup services, and spa services using the brands of L’Oreal, OPI, QOD, Nashi, and many more internationally renowned brands</Label>
      </div>

      <Services/>
        </React.Fragment>
    )
}

export default Service