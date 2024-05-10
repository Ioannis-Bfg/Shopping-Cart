export default function Item({ imageUrl }) {
  return (
    <div className="container shadow-lg rounded-lg bg-white h-[400px] group grid grid-rows-10 ">
      <div className="row-span-7 overflow-hidden relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-12 translate-y-1 fill-sky-500 absolute z-10 left-2 top-2"
          viewBox="0 0 24 24"
        >
          <title>new-box</title>
          <path d="M20,4C21.11,4 22,4.89 22,6V18C22,19.11 21.11,20 20,20H4C2.89,20 2,19.11 2,18V6C2,4.89 2.89,4 4,4H20M8.5,15V9H7.25V12.5L4.75,9H3.5V15H4.75V11.5L7.3,15H8.5M13.5,10.26V9H9.5V15H13.5V13.75H11V12.64H13.5V11.38H11V10.26H13.5M20.5,14V9H19.25V13.5H18.13V10H16.88V13.5H15.75V9H14.5V14A1,1 0 0,0 15.5,15H19.5A1,1 0 0,0 20.5,14Z" />
        </svg>
        <img
          src={imageUrl}
          alt="arrival_product"
          className="object-cover grayscale-[95%] h-full w-full rounded-t-lg transition duration-200 ease-in group-hover:scale-110 group-hover:transition group-hover:duration-[200ms] group-hover:ease-in-out"
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
