export default function Showcase() {
  return (
    <div className="px-40 py-10 w-full gap-10 grid grid-cols-10">
      <div className="h-[700px] rounded-lg col-span-2  shadow-xl container flex justify-center items-center bg-[url('/sale.jpg')] group/wrap">
        <div className=" w-80 aspect-[5/3]  border-4 border-white p-1 transition-all duration-200 ease-out cursor-pointer group-hover/wrap:scale-105 group-hover/wrap:transition-all group-hover/wrap:duration-500 group-hover/wrap:ease-out">
          <div className="bg-white h-full w-full  flex flex-col gap-1 items-center justify-center hover:bg-gray-800 group transition duration-500 ease-out">
            <p className="text-6xl font-black text-gray-900 transition duration-200 ease-out group-hover:text-white group-hover:transition group-hover:duration-500 group-hover:ease-out ">
              SALE
            </p>
            <p className="text-3xl font-medium text-gray-700 transition duration-200 ease-out group-hover:text-white group-hover:transition group-hover:duration-500 group-hover:ease-out">
              up to 30%
            </p>
          </div>
        </div>
      </div>
      <div className="h-[700px] rounded-lg col-span-8 shadow-xl grid grid-cols-10 px-40 py-12 bg-[rgba(221,221,221,0.23)] border-2 border-[#ffffff10] backdrop-blur-sm">
        <div className="col-span-5 flex justify-start items-center ">
          <img
            src="/showcase.png"
            alt=""
            className="size-[28rem] min-h-[25rem] min-w-[25rem] object-fit aspect-square grayscale duration-500 ease-in hover:grayscale-0 hover:saturate-150 hover:scale-105 hover:transition hover:duration-500 hover:ease-out"
          />
        </div>
        <div className="col-span-5 py-10 px-10 flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-5xl font-semibold">Smena 8M</p>
            <p className="w-[72ch]">
              The Lomographic Society is proud to offer an exclusive, limited
              quantity of this gem. Purchased from our esteemed colleague, a
              total of 120 pieces have been preserved in perfect working
              condition with their original packaging and documentation
            </p>
          </div>
          <p className="text-5xl font-bold text-gray-900">$480</p>
          <div className="flex gap-4 ">
            <div className="size-20 rounded-md border-2 border-gray-400  flex flex-col items-center">
              <p className="text-md font-semibold p-2 text-gray-600 ">40mm</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="size-6 fill-gray-600 opacity-50"
              >
                <title>camera</title>
                <path d="M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z" />
              </svg>
            </div>
            <div className="size-20 rounded-md border-2 border-gray-400  flex flex-col items-center">
              <p className="text-md font-semibold p-2 text-gray-600 ">35mm</p>
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
                className="feather feather-film stroke-gray-500 opacity-50"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="2.18"
                  ry="2.18"
                ></rect>
                <line x1="7" y1="2" x2="7" y2="22"></line>
                <line x1="17" y1="2" x2="17" y2="22"></line>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <line x1="2" y1="7" x2="7" y2="7"></line>
                <line x1="2" y1="17" x2="7" y2="17"></line>
                <line x1="17" y1="17" x2="22" y2="17"></line>
                <line x1="17" y1="7" x2="22" y2="7"></line>
              </svg>
            </div>
            <div className="size-20 rounded-md border-2 border-gray-400  flex flex-col items-center">
              <p className="text-md font-semibold p-2 text-gray-600 ">
                f4 / f16
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
                className="feather feather-aperture stroke-gray-500 opacity-50"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
                <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
                <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
                <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
                <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
                <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
              </svg>
            </div>
            <div className="size-20 rounded-md border-2 border-gray-400 flex flex-col items-center">
              <p className="text-md font-semibold p-2 text-gray-600 ">8MP</p>
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
                className="feather feather-image stroke-gray-500 opacity-50"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>
          </div>
          <button className="bg-sky-500 text-white px-5 py-2 rounded-lg text-xl self-center transition scale-100 duration-200 ease-in hover:scale-110 hover:transition hover:duration-500 hover:ease out">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
