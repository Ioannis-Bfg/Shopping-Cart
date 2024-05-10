export default function Call() {
  return (
    <div
      id="call"
      className="  h-[400px] py-0 flex justify-center items-center mt-20 relative "
    >
      <div className="absolute bg-gray-100 w-1/3 h-3/4 rounded-lg group flex justify-center items-center ">
        <img
          src="/call.jpg"
          alt="call_to_action"
          className="absolute transition hover:transition rounded-lg h-full w-full object-cover"
        />
        <button className="text-5xl flex gap-4 items-center font-semibold absolute text-gray-700 rounded-md bg-white px-12 py-7 border-2 border-white group/btn hover:bg-sky-600 hover:text-white hover:transition hover:duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-shopping-bag translate-y-1 group-hover/btn:-translate-y-1 group-hover/btn:transition group-hover/btn:duration-300 group-hover/btn:ease-out transition duration-200 ease-in"
          >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <p>SHOP NOW</p>
        </button>
      </div>
    </div>
  );
}
