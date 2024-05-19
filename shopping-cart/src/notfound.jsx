import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section
      id="notfound"
      className="w-full h-full flex justify-center items-center min-h-[50rem] bg-slate-200 bg-center bg-cover bg-notfound"
    >
      <div className=" h-full flex flex-col gap-4 justify-center items-center bg-white p-10">
        <p className="text-5xl font-bold">ERROR 404</p>
        <p>Page not found!</p>
        <Link
          to="/"
          className="bg-sky-500 px-4 py-2 rounded-md text-white hover:bg-sky-600"
        >
          GO BACK
        </Link>
      </div>
    </section>
  );
}
