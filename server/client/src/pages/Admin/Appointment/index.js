import React, { useEffect } from "react";
import { Table, Card, CardBody } from "reactstrap";
import { GetAppointment } from "../../../services/services";
import Appointments from "./appointments";

const AppointmentData = () => {
  const [appointmentdata, setAppointmentData] = React.useState([]);

  const GetAppontmentData = () => {
    GetAppointment()
      .then((response) => {
        setAppointmentData(response && response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    GetAppontmentData();
  }, []);

  return (
    <React.Fragment>
      <div className="wrapper">
        <Card className="container shadow-lg  border-0 my-5 ">
          <CardBody>
            <h3 className="flex justify-center text-2xl">Appointments</h3>
            <div className="table-responsive">
              <Table hover className="mb-0">
                <thead className="thead-light">
                  <tr className="text-center">
                    <th style={{ padding: 20 }}>Sr No.</th>
                    <th style={{ padding: 20 }}>Name</th>
                    <th style={{ padding: 20 }}>Email</th>
                    <th style={{ padding: 20 }}>Phone Number</th>
                    <th style={{ padding: 20 }}>Appointment Date</th>
                  </tr>
                </thead>
                <tbody>
                  {appointmentdata &&
                    appointmentdata.map((data, key) => {
                      return (
                        <tr key={key} className="text-center">
                          <Appointments
                            index={key}
                            appointmentdata={data}
                            GetAppontmentData={GetAppontmentData}
                          />
                        </tr>
                      );
                    })}
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default AppointmentData;
