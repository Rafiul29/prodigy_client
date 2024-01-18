import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useUpdateCategoryMutation } from "../../../../features/category/categoryApi";
import TextInput from "../../../ui/TextInput";
import { useNavigate } from "react-router-dom";

const Form = ({ category }) => {

  const {
    _id,
    name: initialName,
    image: initialImage,
    workshops: initailWorkshop,
  } = category;

  const [name, setName] = useState(initialName);
  const [image, setImage] = useState(initialImage);
  const [workshops, setWorkshop] = useState(initailWorkshop);

  const [updateCategor, { data: resCategory, isLoading, isError }] =
    useUpdateCategoryMutation();

    const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    updateCategor({
      cid: _id,
      data: {
        name,
        image,
        workshops,
      },
    });
  };

  useEffect(() => {
    if (resCategory?._id) {
      toast.info("category update successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/dashboard/manage-category")
    }
    if (!resCategory?._id && isError) {
      toast.error("category update not successfully", {
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
  }, [resCategory, isError,navigate]);
  return (
    <form onSubmit={handleSubmit}>
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 ">
              <TextInput
                type="text"
                title="Category name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="col-span-6">
              <TextInput
                type="text"
                title="Category imgae"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div className="col-span-6">
              <TextInput
                type="number"
                title="Number of workshop"
                value={workshops}
                onChange={(e) => setWorkshop(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            disabled={isLoading}
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-deep-purple-600 hover:bg-deep-purple-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:deep-purple-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
