import React, { useEffect } from "react";
import { useCreateOrderMutation } from "../../../../../features/orders/ordersApi";

const PayButton = ({ course }) => {
  const [createOrder, { data: Order, isLoading }] = useCreateOrderMutation();
  const handleOrder = (course) => {
    createOrder({
      data:course
    });
    // window.location.href =Order?.url;
  };
  
 useEffect(()=>{
  if(Order?.url){
    window.location.href =Order?.url;
  }
 
 },[Order?.url])

  return (
    <button
      disabled={isLoading}
      onClick={() => handleOrder(course)}
      className="text-xl bg-deep-purple-700 px-5 py-2 rounded-lg text-white hover:bg-deep-purple-900 duration-500"
    >
      BUY
    </button>
  );
};

export default PayButton;
