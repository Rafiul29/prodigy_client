import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  useGetAllUsersQuery,
  useUpdateUserRoleMutation,
} from "../../../features/users/usersApi";
import Error from "../../ui/Error";
import Loader from "../../ui/Loaders/Loader";
import TableHeader from "../Table/TableHeader";

const UsersTable = () => {
  const { data: users, error, isLoading, isError } = useGetAllUsersQuery();

  // role updated
  const [role, setRole] = useState("");

  const [updateUserRole, { data: user, error: updateError }] =
    useUpdateUserRoleMutation();

  const handleUpdateRole = (id) => {
    updateUserRole({
      userId: id,
      role,
    });
  };

  // tost error
  useEffect(() => {
    if (user) {
      toast.info("user role update successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    if (!user && updateError?.data.message) {
      toast.error("user role update not successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [user, updateError]);

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
    content = <Error message={`${error?.data?.message} access denite`} />;
  }

  if (!isLoading && !isError && users?.length === 0) {
    content = <Error message={"User not Found"} />;
  }

  if (!isLoading && !isError && users?.length > 0) {
    content = (
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-sm text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <TableHeader title="SN" />
              <TableHeader title="Name" />
              <TableHeader title="Email" />
              <TableHeader title="Role" />
              <TableHeader title="Select" />
              <TableHeader title="Action" />
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr
                key={user._id}
                class="text-xs bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td class="px-6 py-4">{i + 1}</td>
                <td class="px-6 py-4">{user.fullName}</td>
                <td class="px-6 py-4">{user.email}</td>
                <td class="px-6 py-4">{user.role}</td>
                <td class="px-6 py-4">
                  <select
                    name="role"
                    onChange={(e) => setRole(e.target.value)}
                    className="mt-1   w-28 rounded-md border-gray-300 p-1  pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm border"
                  >
                    {" "}
                    <option value="">select role</option>
                    <option value="user">user</option>
                    <option value="admin">admin</option>
                    <option value="dev">dev</option>
                  </select>
                </td>
                <td class="px-6 py-4">
                  <button
                    onClick={() => handleUpdateRole(user._id)}
                    className="hidden lg:inline-block hover:text-white border-2 px-3  border-deep-purple-500 text-lg font-semibold  hover:bg-deep-purple-500 text-deep-purple-600 rounded-md duration-200 hover:cursor-pointer"
                  >
                    update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return <>{content}</>;
};

export default UsersTable;
