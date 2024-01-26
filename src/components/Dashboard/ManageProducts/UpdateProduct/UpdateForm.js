import React, { useEffect, useState } from "react";
import TextInput from "../../../ui/TextInput";
import TextArea from "../../../ui/TextArea";
import { useUpdateProductMutation } from "../../../../features/products/productsApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UpdateForm = ({ product }) => {
  const {
    _id,
    title: initialTitle,
    specification: initialSpecication,
    image_link: initialImageLink,
    circuitboard_link: initialCircuitboard_link,
    price: inititalPrice,
    reviews: initialReviews,
  } = product;

  const [title, setTitle] = useState(initialTitle);
  const [specification, setSpecification] = useState(initialSpecication);
  const [image_link, setImage_link] = useState(initialImageLink);
  const [circuitboard_link, setCircuitboard_link] = useState(
    initialCircuitboard_link
  );
  const [price, setPrice] = useState(inititalPrice);
  const [reviews, setReviews] = useState(initialReviews);

  const [updateProduct, { data:resProduct, isError, isLoading }] =
    useUpdateProductMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct({
      pid: _id,
      data: {
        title,
        specification,
        image_link,
        circuitboard_link,
        price,
        reviews,
      },
    });
  };
  // toast messsage;

  const navigate=useNavigate();
  useEffect(() => {
    if (resProduct?._id) {
      toast.info("product update successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/dashboard/manage-products")
    }
    if (!resProduct?._id && isError) {
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
  }, [resProduct, isError,navigate]);
  return (
    <section className="pt-6 mt-6 pb-16 min-h-[calc(100vh-5rem)]">
      <div className="max-w-7xl mx-auto px-5 lg:px-0">
        <div className="w-full">
          <div className="px-4 sm:px-0 pb-4">
            <h3 className="text-4xl mb-1 font-medium leading-6 text-gray-900">
              Add new product
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Please fillup the form to add product
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handleSubmit}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-6 ">
                      <TextInput
                        type="text"
                        title="Product title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <TextInput
                        type="text"
                        title="image link"
                        value={image_link}
                        onChange={(e) => setImage_link(e.target.value)}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <TextInput
                        type="text"
                        title="circuit board  link"
                        value={circuitboard_link}
                        onChange={(e) => setCircuitboard_link(e.target.value)}
                      />
                    </div>

                    <div className="col-span-6">
                      <TextArea
                        title="Technical Specifications"
                        value={specification}
                        onChange={(e) => setSpecification(e.target.value)}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 ">
                      <TextInput
                        type="number"
                        title="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 ">
                      <TextInput
                        type="number"
                        title="reviews"
                        value={reviews}
                        onChange={(e) => setReviews(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    // disabled={isLoading}
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-deep-purple-600 hover:bg-deep-purple-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:deep-purple-500"
                  >
                    Save
                  </button>
                </div>
                {/* 
                {data && <Success message="product was added successfully" />}
            {data?.error && <Error message={data?.error} />} */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateForm;
