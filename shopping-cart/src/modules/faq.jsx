export default function Faq() {
  const ids = ["d-1", "d-2", "d-3", "d-4"];

  const stretch = (event) => {
    let currentDiv = event.target;
    while (
      currentDiv.id !== "d-1" &&
      currentDiv.id !== "d-2" &&
      currentDiv.id !== "d-3" &&
      currentDiv.id !== "d-4"
    ) {
      currentDiv = currentDiv.parentElement;
    }

    const svg = currentDiv.querySelector("svg");
    currentDiv.style.transition = "all 0.6s ease-out";

    if (currentDiv.style.maxHeight === "20rem") {
      currentDiv.style.maxHeight = "6rem";
    } else {
      currentDiv.style.maxHeight = "20rem";
    }

    if (svg.style.transform === "rotate(180deg)") {
      svg.style.transform = "rotate(0)";
    } else {
      svg.style.transform = "rotate(180deg)";
    }

    if (svg.style.fill == "#3b82f6") {
      svg.style.fill = "#1f2937";
    } else {
      svg.style.fill = "#3b82f6";
    }

    ids.forEach((id) => {
      if (id !== currentDiv.id) {
        const otherDiv = document.getElementById(id);
        const othersvg = otherDiv.querySelector("svg");
        otherDiv.style.maxHeight = "6rem";
        othersvg.style.transform = "rotate(0)";
        othersvg.style.fill = " #1f2937";
      }
    });
  };

  return (
    <section
      id="FAQ"
      className="w-full  flex flex-col justify-center items-center py-20 px-20 gap-8 "
    >
      <p className="text-3xl font-bold text-gray-900" tabIndex={0}>
        FAQ
      </p>
      <div className="flex flex-col justify-center items-center gap-3 overflow-hidden bg-white w-1/3 rounded-md text-gray-800">
        <div
          className="max-h-[6rem] bg-gray-100 shadow w-full transition-all duration-[600ms] cursor-pointer flex flex-col  items-center overflow-hidden p-8 gap-6 hover:bg-slate-100"
          id="d-1"
          onClick={stretch}
        >
          {" "}
          <div className="flex justify-between items-center w-full">
            <p className="text-lg font-semibold text-current" tabIndex={0}>
              How was this website made?
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="svg"
              className="fill-current size-10 transition-all duration-300"
            >
              <title>chevron-down</title>
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </div>
          <p>
            This website was made using React, Tailwind, and Vite. It is my
            first project using Tailwind. All all components were custom made
            and other store websites were used for inspiration.
          </p>
        </div>

        <div
          className="max-h-[6rem] bg-gray-100 shadow w-full transition-all duration-[600ms] cursor-pointer flex flex-col  items-center overflow-hidden p-8 gap-6 hover:bg-slate-100"
          id="d-2"
          onClick={stretch}
        >
          {" "}
          <div className="flex justify-between items-center w-full">
            <p className="text-lg font-semibold text-current" tabIndex={0}>
              Is this site real?
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="svg"
              className="fill-current size-10 transition-all duration-300"
            >
              <title>chevron-down</title>
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </div>
          <p>
            No not at all , this was a project to test my skills in React by
            creating a page for a fictional store. I chose the store FOS
            Photography which is a store focused on Photography.
          </p>
        </div>

        <div
          className="max-h-[6rem] bg-gray-100 shadow w-full transition-all duration-[600ms] cursor-pointer flex flex-col  items-center overflow-hidden p-8 gap-6 hover:bg-slate-100"
          id="d-3"
          onClick={stretch}
        >
          {" "}
          <div className="flex justify-between items-center w-full">
            <p className="text-lg font-semibold text-current" tabIndex={0}>
              How can I pay?
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="svg"
              className="fill-current size-10 transition-all duration-300"
            >
              <title>chevron-down</title>
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </div>
          <p>
            Currently you cannot, the functionality for a payment function was
            not within the scope of this project.
          </p>
        </div>

        <div
          className="max-h-[6rem] bg-gray-100 shadow w-full transition-all duration-[600ms] cursor-pointer flex flex-col  items-center overflow-hidden p-8 gap-6 hover:bg-slate-100"
          id="d-4"
          onClick={stretch}
        >
          {" "}
          <div className="flex justify-between items-center w-full">
            <p className="text-lg font-semibold text-current" tabIndex={0}>
              How long does shipping take?
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="svg"
              className="fill-current size-10 transition-all duration-300"
            >
              <title>chevron-down</title>
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </div>
          <p>
            We use USPS for shipping and it usually takes 5-7 business days to
            arrive at your doorstep. We apologize for any inconvenience this may
            cause and hope to ship your order as soon as possible.
          </p>
        </div>
      </div>
    </section>
  );
}
