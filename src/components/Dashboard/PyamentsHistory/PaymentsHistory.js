import React from "react";
import TableTitle from "../Table/TableTitle";
import PaymentHistroyTable from "./PaymentHistroyTable";

const PaymentsHistory = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="md:flex justify-between">
        <TableTitle text="Payment History" />
      </div>
      <PaymentHistroyTable/>
    </div>
  );
};

export default PaymentsHistory;
