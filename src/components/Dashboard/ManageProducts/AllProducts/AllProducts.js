import React from 'react'
import { FaPlus } from 'react-icons/fa'
import TableTitle from '../../Table/TableTitle'
import { Link } from 'react-router-dom'
import ProductTable from './ProductTable'

const AllProducts = () => {
  return (
    <div className="flex flex-col gap-5">
    <div className="md:flex justify-between">
      <TableTitle text="All Products" />

      <Link
        to="/dashboard/addproduct"
        className=" flex justify-center items-center gap-1 text-sm font-semibold text-white bg-indigo-600 px-4 py-2 rounded-md cursor-pointer "
      >
        <span>
          <FaPlus />
        </span>
        <span> Add Product</span>
      </Link>
    </div>
   <ProductTable/>
  </div>
  )
}

export default AllProducts