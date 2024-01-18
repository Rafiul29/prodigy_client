import React from "react";

const TableHeader = ({title}) => {
  return (
    <th scope="col" class="px-6 py-3">
     {title}
    </th>
  );
};

export default TableHeader;
