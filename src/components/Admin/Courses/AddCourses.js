import React, { useState } from "react";
import TextArea from "../../ui/TextArea";
import TextInput from "../../ui/TextInput";

const AddCourses = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");
  const [views, setViews] = useState("");

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
            <form>
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
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <TextInput
                        type="text"
                        title="Instructor Photo"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                      />
                    </div>

                    <div className="col-span-6">
                      <TextArea
                        title="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>

                    <div className="col-span-6">
                      <TextInput
                        type="text"
                        title="Thumbnail link"
                        value={thumbnail}
                        onChange={(e) => setThumbnail(e.target.value)}
                      />
                    </div>
                    <div className="col-span-6">
                      <TextInput
                        type="text"
                        title="Category"
                        value={thumbnail}
                        onChange={(e) => setThumbnail(e.target.value)}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <TextInput
                        type="number"
                        title="Number of Students"
                        value={views}
                        onChange={(e) => setViews(e.target.value)}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 ">
                      <TextInput
                        type="number"
                        title="Price"
                        value={views}
                        onChange={(e) => setViews(e.target.value)}
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
                        type="text"
                        title="helplines"
                        value={views}
                        onChange={(e) => setViews(e.target.value)}
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

                {/* {isSuccess && (
                    <Success message="Video was added successfully" />
                )}
                {isError && (
                    <Error message="There was an error adding video!" />
                )} */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddCourses;
