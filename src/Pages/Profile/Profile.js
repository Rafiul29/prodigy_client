import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import UserProfile from "../../components/Users/UserProfile.js/UserProfile";
import Error from "../../components/ui/Error";
import { userLoggedOut } from "../../features/auth/authSlice";
import {
  useDeleteUserAccountMutation,
  useGetUsersProfileQuery,
} from "../../features/users/usersApi";

const Profile = () => {
  const { data: user, isError, isLoading } = useGetUsersProfileQuery();

  const navigate = useNavigate();

  const [deleteUserAccount] = useDeleteUserAccountMutation();

  const dispatch = useDispatch();
  const handleDelete = () => {
    deleteUserAccount();
    // store clear
    dispatch(
      userLoggedOut({
        token: undefined,
        user: undefined,
      })
    );
    // delete local storage
    localStorage.removeItem("auth");
    navigate("/");
  };

  let content = null;

  if (isLoading) {
    content = <Error message="Loading .........." />;
  }
  if (!isLoading && isError) {
    content = <Error message="User not found" />;
  }

  if (!isLoading && !isError && user?._id) {
    content = <UserProfile user={user} />;
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 section-padding mt-10 wrapper ">
      <div className="container mx-auto">
        <div className=" flex justify-center items-center gap-10">
          {content}
        </div>
        <div className="mt-5 flex flex-row justify-center items-center gap-5">
          <Link
            className="text-xl bg-deep-purple-600 px-5 py-2 rounded-md text-gray-200 font-medium hover:bg-deep-purple-400 duration-500 hover:text-gray-300"
            to="/update-profile"
          >
            Edit Profile
          </Link>

          <button
            onClick={handleDelete}
            className="text-xl bg-deep-purple-600 px-5 py-2 rounded-md text-gray-200 font-medium hover:bg-deep-purple-400 duration-500 hover:text-gray-300"
            to="/update-profile"
          >
            Delete Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
