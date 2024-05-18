import { Link } from "react-router-dom";
export default function Call() {
  return (
    <section
      id="call"
      className="min-h-42 w-full py-20 flex justify-center items-center "
    >
      <div className="w-1/3 min-h-42 rounded-lg group flex justify-center items-center overflow-hidden bg-[url('../../public/call.jpg')] bg-cover p-20">
        <Link
          to="/shop"
          className="text-5xl flex gap-4 items-center justify-center font-semibold  text-gray-700 rounded-md bg-white px-12 py-4 px-4 border-2 border-white group/btn hover:bg-sky-600 hover:text-white hover:transition hover:duration-300"
        >
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
          <p className="truncate">SHOP NOW</p>
        </Link>
        ;
      </div>
    </section>
  );
}

{
  <Link
    to="/shop"
    className="text-5xl flex gap-4 items-center font-semibold  text-gray-700 rounded-md bg-white px-12 py-7 border-2 border-white group/btn hover:bg-sky-600 hover:text-white hover:transition hover:duration-300"
  >
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
  </Link>;
}
