import React, { useState } from "react";
import Error from "../../ui/Error";
import TextInput from "../../ui/TextInput";
import { useCreateCategoryMutation } from "../../../features/category/categoryApi";
import Success from "../../ui/Success";

const AddCategory = () => {
  const [createCategory, { data, isLoading }] = useCreateCategoryMutation();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const resetForm=()=>{
    setName("");
    setImage("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createCategory({
      name,
      image,
    });
    resetForm();
  };
  
  return (
    <section className="pt-6 mt-20 pb-16 min-h-[calc(100vh-5rem)]">
      <div className="max-w-4xl mx-auto px-5 lg:px-0">
        <div className="w-full">
          <div className="px-4 sm:px-0 pb-4">
            <h3 className="text-4xl mb-1 font-medium leading-6 text-gray-900">
              Add new Category
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Please fillup the form to add new category
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
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

                {data && <Success message="Category was added successfully" />}
                {data?.error && <Error message={data?.error} />}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddCategory;
