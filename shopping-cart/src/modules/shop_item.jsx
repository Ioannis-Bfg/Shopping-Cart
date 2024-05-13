import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ShopItem({
  id,
  imageUrl,
  isNew,
  isSale,
  model,
  price,
}) {
  return (
    <Link
      key={id}
      to={`/item/${id}`}
      className=" bg-white  h-[300px] group max-w-60 overflow-hidden min-w-60 p-4 grid grid-rows-10 shadow-sm"
    >
      <div className=" overflow-hidden relative aspect-square w-full bg-black  row-span-4 ">
        <div className=" absolute z-10 left-3 top-3 flex items-center">
          {isNew && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-10 fill-sky-500"
              viewBox="0 0 24 24"
            >
              <title>new-box</title>
              <path d="M20,4C21.11,4 22,4.89 22,6V18C22,19.11 21.11,20 20,20H4C2.89,20 2,19.11 2,18V6C2,4.89 2.89,4 4,4H20M8.5,15V9H7.25V12.5L4.75,9H3.5V15H4.75V11.5L7.3,15H8.5M13.5,10.26V9H9.5V15H13.5V13.75H11V12.64H13.5V11.38H11V10.26H13.5M20.5,14V9H19.25V13.5H18.13V10H16.88V13.5H15.75V9H14.5V14A1,1 0 0,0 15.5,15H19.5A1,1 0 0,0 20.5,14Z" />
            </svg>
          )}
          {isSale && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="size-8  fill-sky-700 "
            >
              <title>sale</title>
              <path d="M18.65,2.85L19.26,6.71L22.77,8.5L21,12L22.78,15.5L19.24,17.29L18.63,21.15L14.74,20.54L11.97,23.3L9.19,20.5L5.33,21.14L4.71,17.25L1.22,15.47L3,11.97L1.23,8.5L4.74,6.69L5.35,2.86L9.22,3.5L12,0.69L14.77,3.46L18.65,2.85M9.5,7A1.5,1.5 0 0,0 8,8.5A1.5,1.5 0 0,0 9.5,10A1.5,1.5 0 0,0 11,8.5A1.5,1.5 0 0,0 9.5,7M14.5,14A1.5,1.5 0 0,0 13,15.5A1.5,1.5 0 0,0 14.5,17A1.5,1.5 0 0,0 16,15.5A1.5,1.5 0 0,0 14.5,14M8.41,17L17,8.41L15.59,7L7,15.59L8.41,17Z" />
            </svg>
          )}
        </div>

        <img
          src={imageUrl}
          alt="arrival_product"
          className="object-cover grayscale-[45%] aspect-square h-full opacity-90 w-full z-0 transition duration-200 ease-in group-hover:opacity-100 group-hover:transition group-hover:duration-[200ms] group-hover:ease-in-out"
        />
      </div>
      <div className="flex items-center justify-between  w-full z-50 row-span-2 row-start-9">
        <div className="flex flex-col items-start">
          <p className=" text-md font-medium text-gray-700">{model}</p>
          <p className="text-gray-600 font-bold text-lg">{price}</p>
        </div>
        {/* <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-shopping-cart stroke-sky-600 hover:fill-sky-600 hover:scale-110 hover:transition hover:ease-out hover:duration-[500ms] transition ease-in duration-200"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </button> */}
      </div>
    </Link>
  );
}
