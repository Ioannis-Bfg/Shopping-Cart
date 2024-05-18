import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Cart({
  shoppingCart,
  decQuantity,
  incQuantity,
  remove,
  total,
}) {
  if (shoppingCart.length === 0) {
    return (
      <section
        id="empty-cart"
        className="flex justify-center items-center h-[50rem] w-full flex-col gap-5 bg-slate-100"
      >
        <div className="bg-white p-12 gap-8 rounded-md flex flex-col items-center text-lg">
          <div className="text-center">
            <p>It seems like your cart is empty!</p>
            <p>You can start adding items by going to our shop page</p>
          </div>
          <Link
            to={"/shop"}
            className="flex gap-2 items-center bg-sky-500 px-4 py-2 rounded-md text-white"
          >
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
              className="feather feather-shopping-bag stroke-current"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            Shop Now
          </Link>
        </div>
      </section>
    );
  } else {
    return (
      <section
        id="cart"
        className="h-full py-20 w-full flex min-h-[50rem] justify-center items-center bg-slate-100"
      >
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-3 rounded-md flex flex-col gap-4">
            {shoppingCart.map((cartItem) => (
              <div
                key={cartItem.id}
                className="flex justify-between bg-white p-5 pb-10 rounded-md shadow-md "
              >
                <div className="flex gap-4">
                  <div className="size-20 ">
                    <img
                      src={cartItem.item.imageUrl}
                      alt={cartItem.item.model}
                      className="object-cover w-full h-full rounded-md"
                    />
                    <p className="text-sm font-thin mt-2 truncate">
                      Delivered at your house withing 2-3 working days
                    </p>
                  </div>
                  <p className="text-lg font-thin" tabIndex={0}>
                    {cartItem.item.model}
                  </p>
                </div>
                <div className="flex gap-6 items-center ">
                  <div className="flex gap-2 items-center border-2 justify-between border-slate-400 rounded-md">
                    <button
                      className="flex pl-2 w-full h-full justify-center items-center"
                      onClick={() => {
                        decQuantity(cartItem);
                      }}
                    >
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
                        className="feather feather-minus size-4"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </button>
                    <p
                      className="text-lg border-r-2 border-l-2 border-slate-400 px-3"
                      tabIndex={0}
                    >
                      {cartItem.quantity}
                    </p>
                    <button
                      className="flex pr-2 w-full h-full"
                      onClick={() => {
                        incQuantity(cartItem);
                      }}
                    >
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
                        className="feather feather-plus size-4"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      remove(cartItem);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-trash-2 size-5 stroke-current"
                    >
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      <line x1="10" y1="11" x2="10" y2="17"></line>
                      <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                  </button>
                  <p className="text-lg font-semibold" tabIndex={0}>
                    ${cartItem.item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className=" flex-2 rounded-md flex flex-col  gap-4 p-4 justify-start items-center">
            <div className="flex  gap-2 justify-center items-center bg-white p-8 rounded-md">
              <p className="text-3xl" tabIndex={0}>
                Your total is
              </p>
              <p className="text-3xl font-bold" tabIndex={0}>
                ${total}
              </p>
            </div>
            <button className="bg-sky-500 font-semibold hover:bg-sky-600 text-white px-4 py-2 rounded">
              Checkout
            </button>
          </div>
        </div>
      </section>
    );
  }
}
