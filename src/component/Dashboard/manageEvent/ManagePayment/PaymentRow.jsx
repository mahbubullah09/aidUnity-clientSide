import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";

const PaymentRow = ({ payment }) => {
  console.log(payment);

  //   const {
  //     title,
  //     _id

  //   } = event;

  const id = payment?._id;
  console.log(id);

  return (
    <tr>
      <th>
        <div className="  space-x-3">{payment?.aid}</div>
      </th>

      <td>
        <div className="text-center">{payment?.aidInfo?.category}</div>
      </td>
      <td>
        <div className="text-center">{payment?.email}</div>
      </td>
      <td>
        <div className="text-center">{payment?.transactionId}</div>
      </td>
      <th>
        <div className="text-center">${payment?.aidInfo?.price}</div>
      </th>
    </tr>
  );
};

export default PaymentRow;
