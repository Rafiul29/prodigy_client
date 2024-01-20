import React from "react";

const Helplines = ({ helpLines }) => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-4xl font-medium text-gray-800">Help Lines</h2>
      <div>
      {helpLines?.split("").map((s)=>(
        <span className={`${(s>=0 && s<=9)|| s==="+" ?"text-purple-600 font-semibold":""}`}>{s}</span>
      ))}
      </div>
    </div>
  );
};

export default Helplines;
