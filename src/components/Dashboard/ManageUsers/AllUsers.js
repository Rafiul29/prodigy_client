import React from "react";
import TableHeader from "../Table/TableTitle";
import UsersTable from "./UsersTable";

const AllUsers = () => {
  return (
    <div className="flex flex-col gap-5">
      <TableHeader text="All Users" />
      <UsersTable />
    </div>
  );
};

export default AllUsers;
