import React from "react";
import { useGetAllOrdersQuery } from "../../../features/orders/ordersApi";
import { currencyFormatter } from "../../../utils/currencyFormatter";
import Error from "../../ui/Error";
import Loader from "../../ui/Loaders/Loader";
import TableData from "../Table/TableData";
import TableHeader from "../Table/TableHeader";

const PaymentHistroyTable = () => {
  const { data: orders, isLoading, isError } = useGetAllOrdersQuery();
  console.log(orders);
  // decide what to do render
  let content = null;
  if (isLoading) {
    content = (
      <>
        <Loader />
        <Loader />
        <Loader />
        <Loader />
      </>
    );
  }

  if (!isLoading && isError) {
    content = <Error message="Order not found" />;
  }

  if (!isLoading && !isError && orders?.length === 0) {
    content = <Error message={"Orders not found"} />;
  }

  if (!isLoading && !isError && orders?.length > 0) {
    content = (
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-sm text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <TableHeader title="SN" />
              <TableHeader title="Order Id" />
              <TableHeader title="Course Name" />
              <TableHeader title="User Email" />
              <TableHeader title="price" />
              <TableHeader title="payment status" />
              <TableHeader title="Date" />
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 &&
              orders.map((order, i) => (
                <tr
                  key={order._id}
                  class="text-xs bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600 "
                >
                  <TableData data={1 + i} />
                  <TableData data={order?._id} />
                  <TableData data={order?.course?.title} />
                  <TableData data={order?.shipping?.email} />
                  <TableData data={currencyFormatter(order?.course?.price)} />
                  
                    <TableData data={order?.payment_status} />
                
                  <TableData
                    data={new Date(order?.createdAt).toLocaleDateString()}
                  />
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }

  return <>{content}</>;
};

export default PaymentHistroyTable;
