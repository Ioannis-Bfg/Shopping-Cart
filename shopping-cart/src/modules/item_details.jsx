import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ShopItem from "./shop_item";

export default function ItemDetails({ shopItems, addToCart }) {
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
    <div className="h-full py-20 w-full bg-slate-200 flex flex-col justify-center gap-10 items-center relative">
      <Link
        to="/shop"
        className="absolute z-50 top-4 md:left-20 flex gap-2 items-center justify-center text-white bg-sky-600 hover:bg-sky-700 p-3 rounded-full opacity-80 hover:opacity-100"
        tabIndex={0}
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
      <div className="flex justify-center items-center  flex-col xl:flex-row px-20">
        <div className="flex flex-col justify-center items-center shadow-lg z-10 md:size-[30rem] size-[20rem]  rounded-md">
          <img
            src={camera.imageUrl}
            alt=""
            className="w-full h-full rounded-md object-cover"
          />
        </div>
        <div className="bg-white xl:px-20 py-10 xl:pl-32 px-8 flex flex-col xl:-translate-x-24 z-1 justify-between gap-3 shadow-md rounded-md">
          <div>
            <p className="text-3xl font-semibold" tabIndex={0}>
              {camera.model}
            </p>
            <p className="text-xl" tabIndex={0}>
              ${camera.price}
            </p>
          </div>
          <p className="max-w-[68ch]">
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
          <button
            className="bg-sky-500 font-semibold hover:bg-sky-600 text-white px-4 py-2 rounded self-center active:translate-y-1 active:transition-all"
            onClick={() => addToCart(camera)}
          >
            Add to cart
          </button>
          <p className="font-thin text-md text-gray-700 self-center">
            In stock: Delivery withing 2-3 working days
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col gap-10 py-10 px-20 items-center bg-sky-500  text-white ">
        <div className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="fill-current size-10"
          >
            <title>list-box-outline</title>
            <path d="M11 15H17V17H11V15M9 7H7V9H9V7M11 13H17V11H11V13M11 9H17V7H11V9M9 11H7V13H9V11M21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5M19 5H5V19H19V5M9 15H7V17H9V15Z" />
          </svg>
          <p className="text-3xl font-bold " tabIndex={0}>
            Specifications
          </p>
        </div>
        <div className="flex  lg:flex-row flex-col gap-6 items-center">
          <div className="flex flex-col gap-3">
            <p className="text-2xl font-semibold" tabIndex={0}>
              Header
            </p>
            <p className="max-w-[68ch]">
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

        <div className="flex lg:flex-row-reverse flex-col gap-6 items-center">
          <div className="flex flex-col gap-3">
            <p className="text-2xl font-semibold" tabIndex={0}>
              Header
            </p>
            <p className="max-w-[68ch]">
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

        <div className="flex lg:flex-row flex-col gap-6 items-center">
          <div className="flex flex-col gap-3">
            <p className="text-2xl font-semibold" tabIndex={0}>
              Header
            </p>
            <p className="max-w-[68ch]">
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
        <p className="text-2xl font-semibold" tabIndex={0}>
          Users also bought
        </p>
        <div className="flex justify-center flex-wrap items gap-10">
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
