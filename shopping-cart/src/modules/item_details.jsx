import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ShopItem from "./shop_item";

export default function ItemDetails({ shopItems }) {
  const { id } = useParams();
  const camera = shopItems.find((item) => item.id === Number(id));
  const currentItemId = Number(id);

  const currentItemIndex = shopItems.findIndex(
    (item) => item.id === currentItemId,
  );
  let startIndex = (currentItemIndex + 1) % shopItems.length;
  let nextShopItems = [];

  for (let i = 0; i < 5; i++) {
    nextShopItems.push(shopItems[(startIndex + i) % shopItems.length]);
  }

  return (
    <div className="h-full py-60 w-full bg-slate-100 flex flex-col justify-center gap-10 items-center relative">
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center shadow-lg z-10  rounded-md">
          <img
            src={camera.imageUrl}
            alt=""
            className="w-full h-full rounded-md"
          />
        </div>
        <div className="bg-white px-20 py-10 pl-32 flex flex-col -translate-x-24 z-1 justify-between gap-3 shadow-md rounded-md">
          <div>
            <p className="text-3xl font-semibold">{camera.model}</p>
            <p className="text-xl">{camera.price}</p>
          </div>
          <p className="w-[68ch]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            saepe voluptatibus excepturi, sed facere iure. Suscipit id numquam
            consectetur corporis molestiae tenetur illum recusandae. Nam rem
            eius cum maxime vero?
          </p>
          <div>
            <ul className="list-disc translate-x-4 font-thin">
              <li>Spec 1</li>
              <li>Spec 2</li>
              <li>Spec 3</li>
            </ul>
          </div>
          <button className="bg-sky-500 font-semibold hover:bg-sky-600 text-white px-4 py-2 rounded self-center">
            Add to cart
          </button>
        </div>
      </div>

      <Link
        to="/shop"
        className="fixed z-50 top-32 left-32 flex gap-2 items-center justify-center text-white bg-sky-500 hover:bg-sky-600 p-3 rounded-full"
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
          className="feather feather-arrow-left-circle"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 8 8 12 12 16"></polyline>
          <line x1="16" y1="12" x2="8" y2="12"></line>
        </svg>
        <p className="text-current -translate-y-0.5">Shop</p>
      </Link>

      <div className="flex flex-col gap-20 py-10 items-center ">
        <p className="text-3xl font-bold ">Specifications</p>
        <div className="flex gap-12 items-center">
          <div className="flex flex-col gap-3">
            <p className="text-2xl font-semibold">Header</p>
            <p className="w-[68ch]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In quae
              nostrum aut ullam veniam facilis quo eveniet quaerat dignissimos
              distinctio? Consequuntur hic nisi recusandae commodi amet fugit,
              tempore quisquam adipisci.
            </p>
          </div>
          <div className="size-40 shadow-md">
            <img
              className="object-cover w-full h-full rounded-md"
              src="/desc1.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-row-reverse gap-12 items-center">
          <div className="flex flex-col gap-3">
            <p className="text-2xl font-semibold">Header</p>
            <p className="w-[68ch]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In quae
              nostrum aut ullam veniam facilis quo eveniet quaerat dignissimos
              distinctio? Consequuntur hic nisi recusandae commodi amet fugit,
              tempore quisquam adipisci.
            </p>
          </div>
          <div className="size-40 shadow-md">
            <img
              className="object-cover w-full h-full rounded-md"
              src="/desc2.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="flex gap-12 items-center">
          <div className="flex flex-col gap-3">
            <p className="text-2xl font-semibold">Header</p>
            <p className="w-[68ch]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In quae
              nostrum aut ullam veniam facilis quo eveniet quaerat dignissimos
              distinctio? Consequuntur hic nisi recusandae commodi amet fugit,
              tempore quisquam adipisci.
            </p>
          </div>
          <div className="size-40 shadow-md">
            <img
              className="object-cover w-full h-full rounded-md"
              src="/desc3.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 items-center">
        <p className="text-2xl font-semibold">Users also bought</p>
        <div className="flex justify-center items gap-10">
          {nextShopItems.map((item) => (
            <ShopItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function getRandomShopItems(shopItems, count) {
  // Shuffle array using the Fisher-Yates algorithm
  const shuffled = shopItems
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  // Get the first 'count' elements
  return shuffled.slice(0, count);
}
