import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer
      id="footer"
      className="w-full h-[400px] bg-gray-500 flex justify-center items-center gap-24"
    >
      <img
        src="/logofooter.svg"
        alt=""
        className="size-60 fill-white mix-blend-mix-blend-luminosity"
      />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-3xl text-white font-semibold" tabIndex={0}>
            Quick Links
          </p>
          <div className="w-20 h-1 bg-sky-400"></div>
        </div>
        <div className="flex flex-col gap-2  text-white ">
          <Link to={"/"} className="hover:text-sky-200">
            Home
          </Link>
          <Link to={"/shop"} className="hover:text-sky-200">
            Shop
          </Link>
          <a href="#" className="hover:text-sky-200">
            About us
          </a>
          <a href="#" className="hover:text-sky-200">
            FAQ
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-3xl text-white font-semibold" tabIndex={0}>
            Contact us
          </p>
          <div className="w-20 h-1 bg-sky-400"></div>
        </div>
        <div className="flex flex-col gap-2  text-white">
          <a href="#" className="flex gap-2">
            {" "}
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
              className="feather feather-map-pin"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            Oakwood Street, Greece
          </a>
          <a href="#" className="flex gap-2">
            {" "}
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
              className="feather feather-phone-call"
            >
              <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            +01 234 567 88
          </a>
          <a href="#" className="flex gap-2">
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
              className="feather feather-mail"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            fosphotography@gmail.com
          </a>
          <a href="#" className="flex gap-2">
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
              className="feather feather-facebook"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
            facebook
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-2xl text-white">Stay Connected!</p>
        <form action="">
          <label htmlFor="" className="sr-only"></label>
          <input
            type="mail"
            className="rounded-l-md px-4 py-2 focus:border-teal focus:outline-none focus:ring-0 focus:border-sky-700"
          />
          <button className="bg-white text-sky-600 px-4 py-2 rounded-r-md border-2 border-gray-500">
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  );
}
