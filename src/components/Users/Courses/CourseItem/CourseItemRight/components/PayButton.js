import React, { useEffect } from "react";
import { useCreateOrderMutation } from "../../../../../../features/orders/ordersApi";
// import { useSelect } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PayButton = ({ course }) => {
  const [createOrder, { data: responseUrl, isLoading }] =
    useCreateOrderMutation();

  const auth = useSelector((state) => state.auth);
  const location = useLocation();

  const handleOrder = (course) => {
    if (auth?.token) {
      createOrder({
        data: course,
      });
    }
    if(!auth?.token){
      console.log("first");
       <Navigate to='/login' state={{form:location}}/>;
       return
    }
  };

  useEffect(() => {
    if (responseUrl?.url) {
      window.location.href = responseUrl?.url;
    }
  }, [responseUrl?.url]);

  return (
    <button
      disabled={isLoading}
      onClick={() => handleOrder(course)}
      className="rounded-md border border-transparent bg-deep-purple-500 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      BUY
    </button>
  );
};

export default PayButton;
