import { FaRegEdit } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";

const Allcourses = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 section-padding mt-10 wrapper min-h-[calc(90vh-5rem)]">
      <div className=" mx-auto">
        <div className="sm:flex sm:items-center ">
          <div className=" w-full md:flex justify-between">
            <h1 className="text-xl font-semibold text-gray-900">All Courses</h1>
            <h5 className="text-sm font-semibold text-white bg-indigo-600 px-4 py-2 rounded-md cursor-pointer flex justify-center items-center gap-1">
              {" "}
              <span><FaPlus/></span>
              <span> Add Courses</span>
            </h5>
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y table-auto divide-gray-300 ">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        SN
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Course Title
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Insturctor Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Category
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        price
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Duration
                      </th>

                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Students
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Add video
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Add requirement
                      </th>

                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Add Includes
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Add Learns
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Should take this course
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        payment details
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Update Courses
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Delete Courses
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-md sm:pl-6">
                        <div className="flex items-center">
                          <div className="font-medium text-gray-900">1</div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-md sm:pl-6">
                        <div className="flex items-center">
                          <div className="font-medium text-gray-900">php</div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-md sm:pl-6">
                        <div className="flex items-center">
                          <div className="font-medium text-gray-900">
                            jon doe
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-md sm:pl-6">
                        <div className="flex items-center">
                          <div className="font-medium text-gray-900">web</div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-md sm:pl-6">
                        <div className="flex items-center">
                          <div className="font-medium text-gray-900">50$</div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-md sm:pl-6">
                        <div className="flex items-center">
                          <div className="font-medium text-gray-900">50h</div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-md sm:pl-6">
                        <div className="flex items-center">
                          <div className="font-medium text-gray-900">200</div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-xl  sm:pl-6">
                        <div className="flex items-center">
                          <div className="font-medium  text-gray-900">
                            <IoMdAddCircleOutline />
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-xl  sm:pl-6">
                        <div className="flex items-center">
                          <div className="font-medium text-gray-900">
                            <IoMdAddCircleOutline />
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-xl sm:pl-6">
                        <div className="flex items-center">
                          <div className="font-medium text-gray-900">
                            <IoMdAddCircleOutline />
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-xl  sm:pl-6">
                        <div className="flex items-center">
                          <div className="font-medium text-gray-900">
                            <IoMdAddCircleOutline />
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-xl  sm:pl-6">
                        <div className="flex items-center">
                          <div className="font-medium text-gray-900">
                            <IoMdAddCircleOutline />
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-xl  sm:pl-6">
                        <div className="flex items-center">
                          <div className="font-medium text-gray-900">
                            <IoMdAddCircleOutline />
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3  text-xl  sm:pl-6">
                        <div className="flex items-center">
                          <div className="font-medium text-gray-900">
                            <FaRegEdit />
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-xl  sm:pl-6">
                        <div className="flex items-center">
                          <div className="font-medium text-red-300 cursor-pointer ">
                            <RiDeleteBin5Line />
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allcourses;
