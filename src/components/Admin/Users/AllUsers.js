import React, { useState } from "react";
import {
  useGetAllUsersQuery,
  useUpdateUserRoleMutation,
} from "../../../features/users/usersApi";

const AllUsers = () => {
  const { data: users, error: responseError } = useGetAllUsersQuery();

  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const [updateUserRole, { data, error: updateError }] =
    useUpdateUserRoleMutation();
 

  const handleUpdateRole = (id) => {
    setError("");
    updateUserRole({
      userId: id,
      role,
    });
  };

  if (responseError?.data?.message) {
    return (
      <div className="px-4 sm:px-6 lg:px-8 section-padding mt-20 wrapper text-center text-8xl">
        {responseError?.data?.message} access denite
      </div>
    );
  }

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 section-padding mt-10 wrapper ">
        <div className="container mx-auto">
          <div className="sm:flex sm:items-center ">
            <div className="sm:flex-auto">
              <h1 className="text-xl font-semibold text-gray-900">All Users</h1>
            </div>
          </div>
          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Phone
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Order
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Role
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Update user role
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {users &&
                        users.map((user) => (
                          <tr>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                              <div className="flex items-center">
                                <div className="font-medium text-gray-900">
                                  {user?.fullName}
                                </div>
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              <div className="text-gray-900">{user?.email}</div>
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {user?.phoneNumber}
                            </td>

                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {user?.orders?.length}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {user?.role}
                            </td>
                            <td className="whitespace-nowrap flex flex-row gap-4 px-3 py-4 text-sm text-gray-500">
                              <select
                                name="role"
                                onChange={(e) => setRole(e.target.value)}
                                className="mt-1   w-28 rounded-md border-gray-300 py-2  pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm border"
                              >
                                {" "}
                                <option value="">select role</option>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                                <option value="dev">Dev</option>
                              </select>
                              <button
                                onClick={() => handleUpdateRole(user?._id)}
                                className="hidden lg:inline-block hover:text-white border-2 px-5 py-1 border-deep-purple-500 text-lg font-semibold  hover:bg-deep-purple-500 text-deep-purple-600 rounded-md duration-200 hover:cursor-pointer"
                              >
                                <span>update</span>
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllUsers;
