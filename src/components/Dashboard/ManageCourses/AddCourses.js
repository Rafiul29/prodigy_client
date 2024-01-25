import React, { useState } from "react";
import { useCreateCourseMutation } from "../../../features/courses/coursesApi";
import TextArea from "../../ui/TextArea";
import TextInput from "../../ui/TextInput";
import {useGetOwnCategoryQuery } from "../../../features/category/categoryApi";
import Success from "../../ui/Success";
import Error from "../../ui/Error";

const AddCourses = () => {
  const [title, setTitle] = useState("");
  const [instructor_name, setInstructor_name] = useState("");
  const [instructor_photo, setInstructor_photo] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [rating, setRating] = useState("");
  const [students, setStudents] = useState("");
  const [helpLines, setHelpLines] = useState("");

  // const {
  //   data: categories,
  //   error: responseError,
  //   isLoading: fetchIsLoading,
  // } = useGetAllCategoriesQuery();

  const { data: categories, isLoading: fetchIsLoading, error: responseError, }=useGetOwnCategoryQuery()

  const [createCourse, { data, isLoading }] = useCreateCourseMutation();

  const resetForm = () => {
    setTitle("");
    setInstructor_name("");
    setInstructor_photo("");
    setDescription("");
    setThumbnail("");
    setCategory("");
    setPrice("");
    setDuration("");
    setRating("");
    setStudents("");
    setHelpLines("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createCourse({
      title,
      instructor_name,
      instructor_photo,
      description,
      thumbnail,
      category,
      price,
      duration,
      rating,
      students,
      helpLines,
    });
    resetForm();
  };
  if (fetchIsLoading && categories?.length === 0) {
    return (
      <div className="px-4 sm:px-6 lg:px-8 section-padding mt-20 wrapper text-center text-8xl">
        Loading ..................
      </div>
    );
  }
  return (
    <section className="pt-6 mt-6 pb-16 min-h-[calc(100vh-5rem)]">
      <div className="max-w-7xl mx-auto px-5 lg:px-0">
        <div className="w-full">
          <div className="px-4 sm:px-0 pb-4">
            <h3 className="text-4xl mb-1 font-medium leading-6 text-gray-900">
              Add new Course
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Please fillup the form to add new course
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
                        title="Course title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <TextInput
                        type="text"
                        title="Instructor Name"
                        value={instructor_name}
                        onChange={(e) => setInstructor_name(e.target.value)}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <TextInput
                        type="text"
                        title="Instructor Photo"
                        value={instructor_photo}
                        onChange={(e) => setInstructor_photo(e.target.value)}
                      />
                    </div>

                    <div className="col-span-6">
                      <TextArea
                        title="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>

                    <div className="col-span-6 ">
                      <TextInput
                        type="text"
                        title="Thumbnail link"
                        value={thumbnail}
                        onChange={(e) => setThumbnail(e.target.value)}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label className="block text-md   font-medium text-gray-700">
                        Category
                      </label>
                      <select
                        name="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="mt-1  block w-full rounded-md border-gray-300 py-2  pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm border"
                      >
                        <option>-- Select Category --</option>
                        {categories?.map((category) => (
                          <option key={category?._id} value={category?._id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <TextInput
                        type="number"
                        title="Number of Students"
                        value={students}
                        onChange={(e) => setStudents(e.target.value)}
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
                        title="Video Duration"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 ">
                      <TextInput
                        type="number"
                        title="Course rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 ">
                      <TextInput
                        type="text"
                        title="helplines"
                        value={helpLines}
                        onChange={(e) => setHelpLines(e.target.value)}
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

                {data && <Success message="course was added successfully" />}
                {data?.error && <Error message={data?.error} />}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddCourses;
