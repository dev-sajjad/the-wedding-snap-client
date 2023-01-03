import React from "react";
import { BsStarFill } from "react-icons/bs";

const Reviews = ({ review }) => {
  const {customer_name, text, image, rating } = review;

  return (
    <div className="border border-warning  rounded-3xl shadow-md hover:shadow-xl p-4">
      <div className="flex items-center justify-center">
        <div className="text-xl font-semibold">
          <h4>{rating}</h4>
        </div>
        <div className="flex items-end text-amber-300 text-xl ml-1">
          <BsStarFill />
          <BsStarFill /> <BsStarFill /> <BsStarFill />
          <BsStarFill />
        </div>
      </div>
      <div>
        <blockquote className="text-xl italic  font-semibold text-gray-900">
          <svg
            aria-hidden="true"
            className="w-10 h-10 text-gray-400 dark:text-gray-600"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <p>
            "{text}"
          </p>
        </blockquote>
          </div>
          <div className="flex flex-col mt-3 items-center">
              <img className="w-28 h-28 rounded-full ring ring-warning ring-offset-2" src={image} alt="customer img" />
              <h3 className="text-xl mt-2 font-mono ">{customer_name}</h3>
          </div>
    </div>
  );
};

export default Reviews;
