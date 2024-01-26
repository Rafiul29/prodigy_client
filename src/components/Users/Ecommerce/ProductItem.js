import React from "react";
import { useParams } from "react-router-dom";
import Error from "../../ui/Error";
import Loader from "../../ui/Loaders/Loader";
import { useGetSingleProductQuery } from "../../../features/products/productsApi";
import { StarIcon } from "@heroicons/react/20/solid";
import { currencyFormatter } from "../../../utils/currencyFormatter";
import PayButton from "../Courses/CourseItem/CourseItemRight/components/PayButton";

const ProductItem = () => {
  const { pid } = useParams();
  const { data: product, isLoading, isError } = useGetSingleProductQuery(pid);

  // decide what to render
  let content = null;
  if (isLoading) {
    content = (
      <>
        <Loader />
        <Loader />
        <Loader />
      </>
    );
  }
  if (!isLoading && isError) {
    content = <Error message="Product not found" />;
  }

  if (!isLoading && !isError && product?._id) {
    content = (
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h1 className="lg:text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl my-4">
            {product?.title}
          </h1>
          <h2 className="text-sm font-semibold tracking-tight text-gray-800 sm:text-4xl">
            Technical Specifications
          </h2>
          <p className="mt-4 text-gray-800">{product?.specification}</p>

          <h1 className="text-base font-semibold tracking-tight text-gray-900 sm:text-4xl mt-4">
            Circuit Board
          </h1>

          <img
            src={product?.circuitboard_link}
            alt=""
            className="rounded-lg bg-gray-100"
          />
        </div>
        <div className="">
          <img
            src={product?.image_link}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />

          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product?.title}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                {currencyFormatter(product?.price)}
              </p>
              {/* Reviews */}
              {/* <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          reviews.average > rating
                            ? "text-gray-900"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                  <a
                    href={reviews.href}
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {reviews.totalCount} reviews
                  </a>
                </div>
              </div> */}
              
            </div>
           
          </div>
          <div className="flex w-full gap-8">    
            <PayButton course={product}/>
          </div>
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default ProductItem;
