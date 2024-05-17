export default function Boxes() {
  const ids = ["div-1", "div-2", "div-3"];

  const handleMouseEnter = (event) => {
    let currentDiv = event.target;
    while (
      currentDiv.id !== "div-1" &&
      currentDiv.id !== "div-2" &&
      currentDiv.id !== "div-3"
    ) {
      currentDiv = currentDiv.parentElement;
    }
    currentDiv.style.flex = "2";
    currentDiv.style.transition = "all 0.4s ease-out";
    currentDiv.style.opacity = "1";
    currentDiv.style.color = "white";

    currentDiv.style.backgroundColor = "rgb(14 165 233)";
    const infoDiv = currentDiv.querySelector("#info");
    infoDiv.style.height = "fit-content";
    infoDiv.style.width = "fit-content";
    infoDiv.style.padding = "20px";
    infoDiv.style.opacity = "1";
    infoDiv.style.borderWidth = "4px";
    infoDiv.style.transition = "all 0.3s ease-in";
    ids.forEach((id) => {
      if (id !== currentDiv.id) {
        const otherDiv = document.getElementById(id);
        otherDiv.style.flex = "1";
        otherDiv.style.opacity = "0.8";
        otherDiv.style.backgroundColor = "rgb(249 250 251)";
        otherDiv.style.color = "rgb(2 132 199)";
        const otherInfoDiv = otherDiv.querySelector("#info");
        otherInfoDiv.style.height = "0";
        otherInfoDiv.style.width = "0";
        otherInfoDiv.style.padding = "0px";
        otherInfoDiv.style.borderWidth = "0";
      }
    });
  };

  const handleMouseLeave = () => {
    // currentDiv.style.flex = "1";
  };
  return (
    <>
      <div className="flex h-[200px] justify-center items-center gap-4 px-[20rem] py-40 my-20">
        <div
          id="div-1"
          className="bg-gray-50 border-4  border-sky-500 h-full shadow-md bg-[url('/certified.png)] text-sky-600 w-full rounded-lg flex-1 overflow-hidden py-40 transition-all duration-300 ease-out  flex flex-col justify-center items-center gap-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex flex-col gap-2 justify-center items-center px-20 ">
            <div className="flex flex-col  justify-center items-center">
              <svg
                className="fill-current size-20 min-w-10 min-h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>check-circle-outline</title>
                <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" />
              </svg>
              <div className="flex flex-col items-center">
                <p className="truncate font-medium text-xl text-current">
                  Certified Seller
                </p>
                <p className="truncate text-lg font-thin text-current">
                  Leica, Fuji, Canon
                </p>
              </div>
            </div>
            <div
              id="info"
              style={{
                opacity: "0",
                fontSize: "0.8vw",
              }}
              className="h-0 w-0 overflow-hidden border-white border-4 text-white rounded-md "
            >
              As a certified camera seller, we ensure the highest quality
              cameras and equipment to capture your memories with ease. We stand
              behind our products and offer a 100% satisfaction guarantee.
            </div>
          </div>
        </div>

        <div
          id="div-2"
          className="bg-gray-50 border-4 border-sky-500 h-full shadow-md bg-[url('/certified.png)] text-sky-600 w-full rounded-lg flex-1 overflow-hidden py-40 transition-all duration-300 ease-out  flex flex-col justify-center items-center gap-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex flex-col gap-2 justify-center items-center px-20 ">
            <div className="flex flex-col  justify-center items-center">
              <svg
                className="fill-current size-20 min-w-10 min-h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>mailbox-open-outline</title>
                <path d="M14,11H20V15H18V13H14V11M18,4H8A5,5 0 0,0 3,9V18H1V20H21A2,2 0 0,0 23,18V9A5,5 0 0,0 18,4M11,18H5V9A3,3 0 0,1 8,6A3,3 0 0,1 11,9V18M21,18H13V9C13,7.92 12.65,6.86 12,6H18A3,3 0 0,1 21,9V18Z" />
              </svg>
              <div className="flex flex-col items-center">
                <p className="truncate font-medium text-xl text-current">
                  Free Shipping
                </p>
                <p className="truncate text-lg font-thin text-current">
                  On Orders Over $100
                </p>
              </div>
            </div>
            <div
              id="info"
              style={{
                opacity: "0",
                fontSize: "0.8vw",
              }}
              className="h-0 w-0 overflow-hidden border-white border-4 text-white rounded-md"
            >
              We offer free shipping on all orders over $100. We want to make it
              easy for you to capture your memories without the worry of
              shipping costs. So when you spend over $100, you get it all for
              free.
            </div>
          </div>
        </div>

        <div
          id="div-3"
          className="bg-gray-50 border-4 border-sky-500 h-full shadow-md bg-[url('/certified.png)] text-sky-600 w-full rounded-lg flex-1 overflow-hidden py-40 transition-all duration-300 ease-out  flex flex-col justify-center items-center gap-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex flex-col gap-2 justify-center items-center px-20 ">
            <div className="flex flex-col  justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current size-20 min-w-10 min-h-10"
                viewBox="0 0 24 24"
              >
                <title>keyboard-return</title>
                <path d="M19,7V11H5.83L9.41,7.41L8,6L2,12L8,18L9.41,16.58L5.83,13H21V7H19Z" />
              </svg>
              <div className="flex flex-col items-center">
                <p className="truncate font-medium text-xl text-current">
                  14-Day Returns
                </p>
                <p className="truncate text-lg font-thin text-current">
                  Money-Back Guarantee
                </p>
              </div>
            </div>
            <div
              id="info"
              style={{
                opacity: "0",
                fontSize: "0.8vw",
              }}
              className="h-0 w-0 overflow-hidden border-white border-4 text-white rounded-md"
            >
              As a certified camera seller, we ensure the highest quality
              cameras and equipment to capture your memories with ease. We stand
              behind our products and offer a 100% satisfaction guarantee.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// hover:flex-[2] transition-all duration-300 ease-out
