import React from "react";
import moment from "moment";

const Appointments = ({ appointmentdata, GetAppontmentData, index }) => {
  return (
    <>
      <td style={{ padding: 20 }}>{index + 1}</td>
      <td style={{ padding: 20 }}>
        {appointmentdata.name ? appointmentdata.name : "-"}
      </td>
      <td style={{ padding: 20 }}>
        {appointmentdata.email ? appointmentdata.email : "-"}
      </td>
      <td style={{ padding: 20 }}>
        {appointmentdata.phone ? appointmentdata.phone : "-"}
      </td>
      <td style={{ padding: 20 }}>
        {moment(
          appointmentdata.createdAt ? appointmentdata.createdAt : "-"
        ).format("YYYY-MM-DD")}
      </td>
    </>
  );
};

export default Appointments;
