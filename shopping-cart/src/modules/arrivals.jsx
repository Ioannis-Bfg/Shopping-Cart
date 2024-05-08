export default function Arrivals() {
  return (
    <div className="text-center  w-full  flex gap-20 flex-col items-center py-20 px-40 b-inset">
      <h1 className="text-5xl font-bold text-sky-500">New Arrivals</h1>
      <div className="flex justify-center gap-10">
        <div className="container  shadow-lg rounded-lg bg-white h-100  aspect-[4/5] grid grid-rows-10 hover:scale-105 hover:ease-out hover:transition hover:duration-500 duration-200 transition ease-in">
          <div className="row-span-5">
            <img
              src="/arrival1.jpg"
              alt="arrival_product"
              className="object-cover  rounded-t-lg h-full w-full"
            />{" "}
          </div>
          <div className="row-span-2 mx-auto my-auto flex items-center justify-between w-full px-3">
            <p className="self-centers text-xl font-semibold text-gray-700">
              FUJIFILM X-T10
            </p>
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
              className="feather feather-heart stroke-sky-500"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>{" "}
          </div>
          <div className="row-span-3 m-auto flex gap-2 flex-col">
            <p className="self-center text-gray-600">$1,200</p>
            <button className="bg-sky-500 text-white px-6 py-2 rounded-md">
              Add to cart
            </button>
          </div>
        </div>

        <div className="container shadow-lg rounded-lg bg-white h-100 aspect-[4/5] grid grid-rows-10 hover:scale-105 hover:ease-out hover:transition hover:duration-500 duration-200 transition ease-in">
          <div className="row-span-5">
            <img
              src="/arrival2.jpg"
              alt="arrival_product"
              className="object-cover h-full rounded-t-lg w-full"
            />{" "}
          </div>
          <div className="row-span-2 mx-auto my-auto flex items-center justify-between w-full px-3">
            <p className="self-centers text-xl font-semibold text-gray-700">
              FUJIFILM X-T10
            </p>
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
              className="feather feather-heart stroke-sky-500"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>{" "}
          </div>
          <div className="row-span-3 m-auto flex gap-2 flex-col">
            <p className="self-center text-gray-600">$1,200</p>
            <button className="bg-sky-500 text-white px-6 py-2 rounded-md">
              Add to cart
            </button>
          </div>
        </div>

        <div className="container  shadow-lg rounded-lg bg-white h-100  aspect-[4/5] grid grid-rows-10 hover:scale-105 hover:ease-out hover:transition hover:duration-500 duration-200 transition ease-in">
          <div className="row-span-5">
            <img
              src="/arrival3.jpg"
              alt="arrival_product"
              className="object-cover h-full w-full rounded-t-lg"
            />{" "}
          </div>
          <div className="row-span-2 mx-auto my-auto flex items-center justify-between w-full px-3">
            <p className="self-centers text-xl font-semibold text-gray-700">
              FUJIFILM X-T10
            </p>
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
              className="feather feather-heart stroke-sky-500"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>{" "}
          </div>
          <div className="row-span-3 m-auto flex gap-2 flex-col">
            <p className="self-center text-gray-600">$1,200</p>
            <button className="bg-sky-500 text-white px-6 py-2 rounded-md">
              Add to cart
            </button>
          </div>
        </div>

        {/* <div className="container shadow-lg rounded-lg bg-white h-80  aspect-[4/5] grid grid-rows-10 hover:scale-105 hover:ease-out hover:transition hover:duration-500 duration-200 transition ease-in">
          <div className="row-span-5">
            <img
              src="/arrival4.jpg"
              alt="arrival_product"
              className="object-cover h-full w-full rounded-t-lg"
            />{" "}
          </div>
          <div className="row-span-2 mx-auto my-auto flex items-center justify-between w-full px-3">
            <p className="self-centers text-xl font-semibold text-gray-700">
              FUJIFILM X-T10
            </p>
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
              className="feather feather-heart stroke-sky-500"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>{" "}
          </div>
          <div className="row-span-3 m-auto flex gap-2 flex-col">
            <p className="self-center text-gray-600">$1,200</p>
            <button className="bg-sky-500 text-white px-6 py-2 rounded-md">
              Add to cart
            </button>
          </div>
        </div> */}

        <div className="container shadow-lg rounded-lg bg-white h-[400px]   grid grid-rows-10 hover:scale-105 hover:ease-out hover:transition hover:duration-500 duration-200 transition ease-in">
          <div className="row-span-7">
            <img
              src="/arrival5.jpg"
              alt="arrival_product"
              className="object-cover h-full w-full rounded-t-lg"
            />{" "}
          </div>
          <div className="row-span-3 mx-auto my-auto flex items-center py-2 justify-between w-full px-8">
            <div className="flex flex-col items-start">
              <p className=" text-3xl font-medium text-gray-700">
                FUJIFILM X-T10
              </p>
              <p className="text-gray-600 font-bold text-xl">$1,200</p>
            </div>
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
              className="feather feather-shopping-cart stroke-sky-600"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </div>
          {/* <div className="row-span-3 m-auto flex gap-2 flex-col">
            <button className="bg-sky-500 text-white px-6 py-2 rounded-md">
              Add to cart
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
