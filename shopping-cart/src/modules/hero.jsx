export default function Hero({ image, header, subheader, paragraph, call }) {
  return (
    <section id="hero" className="w-full bg-center bg-cover bg-hero">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className=" h-[700px] bg-cover bg-center px-80 flex justify-end items-center"
      >
        <div className="flex flex-col justify-between items-center gap-2 px-20 py-8 h-[300px] w-[30vw] m-[] bg-[hsl(0,0%,96%,0.9)] rounded-md text-gray-800">
          <div className="flex flex-col gap-1 items-center">
            <p className="text-gray-600">{subheader}</p>
            <p className="font-bold text-3xl">{header}</p>
          </div>
          <p className="text-base md:text-sm lg:text-base">{paragraph}</p>
          <button className="items-center transition-all ease-in duration-200 flex gap-2 hover:gap-4 hover:bg-sky-500 hover:transition-all hover:ease-out hover:duration-[500ms] bg-sky-500 px-5 py-3 text-white font-semibold rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-right"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
}
