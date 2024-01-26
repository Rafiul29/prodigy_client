import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useGetOwnCategoryQuery } from "../../../../features/category/categoryApi";
import { useUpdateCourseMutation } from "../../../../features/courses/coursesApi";
import TextArea from "../../../ui/TextArea";
import TextInput from "../../../ui/TextInput";

const Form = ({ course }) => {
  const {
    _id,
    title: initialTitle,
    instructor_name: inititialInstructor_name,
    instructor_photo: initialInstructor_photo,
    description: initialDescription,
    thumbnail: initialThumbnail,
    category: initialCategory,
    price: initialPrice,
    duration: initialDuration,
    rating: initialRating,
    students: initialStudents,
    helpLines: initialHelplines,
  } = course;

  const [title, setTitle] = useState(initialTitle);
  const [instructor_name, setInstructor_name] = useState(
    inititialInstructor_name
  );
  const [instructor_photo, setInstructor_photo] = useState(
    initialInstructor_photo
  );
  const [description, setDescription] = useState(initialDescription);
  const [thumbnail, setThumbnail] = useState(initialThumbnail);
  const [category, setCategory] = useState(initialCategory?._id);
  const [price, setPrice] = useState(initialPrice);
  const [duration, setDuration] = useState(initialDuration);
  const [rating, setRating] = useState(initialRating);
  const [students, setStudents] = useState(initialStudents);
  const [helpLines, setHelpLines] = useState(initialHelplines);

  // const {
  //   data: categories
  // } = useGetAllCategoriesQuery();

  const { data: categories}=useGetOwnCategoryQuery()
  const [updateCourse, { data: resCourse, error, isLoading }] =
    useUpdateCourseMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCourse({
      cid: _id,
      data: {
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
      },
    });
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (resCourse?._id) {
      toast.info("course update successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/dashboard/manage-courses");
    }
    if (!resCourse?._id && error?.data?.error) {
      toast.error(`${error?.data?.error}`, {
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
  }, [resCourse, error?.data?.error, navigate]);

  return (
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
                value={category?._id}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1  block w-full rounded-md border-gray-300 py-2  pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm border"
              >
                <option>--select category--</option>
                {categories?.length>0 && categories?.map((category) => (
                  <option key={category?._id} value={category?._id}>
                    {category?.name}
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
      </div>
    </form>
  );
};

export default Form;
