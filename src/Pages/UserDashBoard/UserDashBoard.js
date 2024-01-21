import React from "react";
import Error from "../../components/ui/Error";
import Loader from "../../components/ui/Loaders/Loader";
import { useGetOrderExitingUserQuery } from "../../features/orders/ordersApi";
import { useGetUsersProfileQuery } from "../../features/users/usersApi";
import EntrollCourses from "./EntrollCourses";

const UserDashBoard = () => {
  const { data: user } = useGetUsersProfileQuery();

  const { data: Orders, isLoading, isError } = useGetOrderExitingUserQuery();

  let content = null;

  if (isLoading) {
    content = (
      <>
        <Loader />
        <Loader />
        <Loader />
      </>
    );
  }
  if (!isLoading && isError) {
    content = <Error message="Course not found" />;
  }

  if (!isLoading && !isError && Orders?.length === 0) {
    content = <Error message="Course not found" />;
  }
  if (!isLoading && !isError && Orders?.length > 0) {
    content = Orders?.map((order) => (
      <EntrollCourses key={order?._id} order={order} />
    ));
  }
  return (
    <div className="px-4 sm:px-6 lg:px-8 section-padding mt-10 wrapper min-h-[calc(90vh-5rem)]">
      <div className="lg:w-[50%] mx-auto">
        <div className="flex flex-col gap-5">
        <h2 className="text-3xl font-medium">
            {user?._id && (
              <span>
                Welcome to the{" "}
                <span className="text-purple-900 font-semibold">
                  {user.fullName},{" "}
                </span>{" "}
                ready for your course
              </span>
            )}
          </h2>
          {content}
        </div>
      </div>
    </div>
  );
};

export default UserDashBoard;
