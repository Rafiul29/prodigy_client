import React, { useEffect } from "react";
import { useCreateOrderMutation } from "../../../../../features/orders/ordersApi";

const PayButton = ({ course }) => {
  const [createOrder, { data: responseUrl, isLoading }] = useCreateOrderMutation();
  const handleOrder = (course) => {
    createOrder({
      data:course
    });
  };
  
 useEffect(()=>{
  if(responseUrl?.url){
    window.location.href =responseUrl?.url;
  }
 },[responseUrl?.url])

  return (
    <button
      disabled={isLoading}
      onClick={() => handleOrder(course)}
      className="text-2xl  tracking-widest  font-medium bg-deep-purple-800 px-10 py-2 rounded-lg text-white hover:bg-deep-purple-600 duration-500"
    >
      BUY
    </button>
  );
};

export default PayButton;
