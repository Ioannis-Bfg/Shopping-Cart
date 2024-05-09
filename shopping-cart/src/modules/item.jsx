export default function Item({ imageUrl }) {
  return (
    <div className="container shadow-lg rounded-lg bg-white h-[400px]   grid grid-rows-10 hover:scale-105 hover:ease-out hover:transition hover:duration-500 duration-200 transition ease-in">
      <div className="row-span-7">
        <img
          src={imageUrl}
          alt="arrival_product"
          className="object-cover grayscale-[80%] h-full w-full rounded-t-lg"
        />{" "}
      </div>
      <div className="row-span-3 mx-auto my-auto flex items-center py-2 justify-between w-full px-8">
        <div className="flex flex-col items-start">
          <p className=" text-xl font-medium text-gray-700">FUJIFILM X-T10</p>
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
    </div>
  );
}
