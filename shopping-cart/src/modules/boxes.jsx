import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";

function LottieAnimation({ autoplay }) {
  const animationContainer = useRef(null);
  const animationInstance = useRef(null);

  useEffect(() => {
    animationInstance.current = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: autoplay,
      path: "/checkanim.json",
    });

    animationInstance.current.goToAndStop(234, true);

    return () => {};
  }, [autoplay]);

  return <div ref={animationContainer} />;
}

function LottieAnimation2({ autoplay }) {
  const animationContainer = useRef(null);
  const animationInstance = useRef(null);

  useEffect(() => {
    animationInstance.current = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: autoplay,
      path: "/boxanim.json",
    });

    animationInstance.current.goToAndStop(0, true);

    return () => {};
  }, [autoplay]); // Add autoplay to the dependency array

  return <div ref={animationContainer} />;
}

function LottieAnimation3({ autoplay }) {
  const animationContainer = useRef(null);
  const animationInstance = useRef(null);

  useEffect(() => {
    animationInstance.current = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: autoplay,
      path: "/arrowanim.json",
    });

    animationInstance.current.goToAndStop(0, true);

    return () => {};
  }, [autoplay]); // Add autoplay to the dependency array

  return <div ref={animationContainer} />;
}

export default function Boxes() {
  const ids = ["div-1", "div-2", "div-3"];
  const [isAnimating, setIsAnimating] = useState(false);
  const [isAnimating2, setIsAnimating2] = useState(false);
  const [isAnimating3, setIsAnimating3] = useState(false);

  const handleMouseEnter = (event) => {
    setIsAnimating(true);
    setIsAnimating2(true);
    setIsAnimating3(true);
    let currentDiv = event.target;
    while (
      currentDiv.id !== "div-1" &&
      currentDiv.id !== "div-2" &&
      currentDiv.id !== "div-3"
    ) {
      currentDiv = currentDiv.parentElement;
    }

    if (currentDiv.id === "div-1") {
      setIsAnimating(true);
      setIsAnimating2(false);
      setIsAnimating3(false);
    }

    if (currentDiv.id === "div-2") {
      setIsAnimating(false);
      setIsAnimating2(true);
      setIsAnimating3(false);
    }

    if (currentDiv.id === "div-3") {
      setIsAnimating(false);
      setIsAnimating2(false);
      setIsAnimating3(true);
    }

    currentDiv.style.flex = "2";
    currentDiv.style.transition = "all 0.4s ease-out";
    currentDiv.style.opacity = "1";
    currentDiv.style.color = "white";

    currentDiv.style.backgroundColor = "rgb(14 165 233)";
    const infoDiv = currentDiv.querySelector("#info");
    infoDiv.style.display = "block";
    infoDiv.style.height = "fit-content";
    infoDiv.style.width = "fit-content";
    infoDiv.style.padding = "20px";
    infoDiv.style.opacity = "1";
    infoDiv.style.borderWidth = "4px";
    infoDiv.style.transition = "all 0.1s ease-in";
    ids.forEach((id) => {
      if (id !== currentDiv.id) {
        const otherDiv = document.getElementById(id);
        otherDiv.style.transition = "all 0.4s ease-out";
        otherDiv.style.flex = "1";
        otherDiv.style.opacity = "0.8";
        otherDiv.style.backgroundColor = "rgb(249 250 251)";
        otherDiv.style.color = "rgb(2 132 199)";

        const otherInfoDiv = otherDiv.querySelector("#info");
        otherInfoDiv.style.height = "0";
        otherInfoDiv.style.display = "none";
        otherInfoDiv.style.opacity = "0";
        otherInfoDiv.style.width = "0";
        otherInfoDiv.style.padding = "0px";
        otherInfoDiv.style.transition = "all 0.1s ease-in";
        otherInfoDiv.style.borderWidth = "0px";
      }
    });
  };

  const handleMouseLeave = () => {
    // currentDiv.style.flex = "1";
  };
  return (
    <>
      <section
        id="boxes"
        className="flex lg:flex-row flex-col h-[20rem] justify-center items-center gap-4 px-[5em] py-40 my-20"
      >
        <div
          id="div-1"
          className="bg-gray-50 border-4 border-sky-500 h-full shadow-md bg-[url('/certified.png)] text-sky-600 w-full rounded-lg flex-1 overflow-hidden py-40 transition-all duration-300 ease-out  flex flex-col justify-center items-center gap-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex  gap-20 justify-center items-center px-20 md:px-10">
            <div className="flex flex-col  justify-center gap-2 items-center">
              <div className="lg:w-20 lg:h-20 md:w-14 md:h-14 w-10 h-10  overflow-hidden ">
                {isAnimating ? (
                  <LottieAnimation autoplay={isAnimating} />
                ) : (
                  <img src="/check-blue.svg" alt="" />
                )}
              </div>
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
                fontSize: "1vw",
              }}
              className="h-0 w-0  border-white border-4 text-white rounded-md hidden"
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
          <div className="flex  gap-20 justify-center items-center px-20 md:px-10">
            <div className="flex flex-col  justify-center gap-2 items-center">
              <div className="lg:w-20 lg:h-20 md:w-14 md:h-14 w-10 h-10  overflow-hidden ">
                {isAnimating2 ? (
                  <LottieAnimation2 autoplay={isAnimating2} />
                ) : (
                  <img src="/box-blue.svg" alt="" />
                )}
              </div>
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
                fontSize: "1vw",
              }}
              className="h-0 w-0  border-white border-4 text-white rounded-md hidden"
            >
              As a certified camera seller, we ensure the highest quality
              cameras and equipment to capture your memories with ease. We stand
              behind our products and offer a 100% satisfaction guarantee.
            </div>
          </div>
        </div>

        <div
          id="div-3"
          className="bg-gray-50 border-4 border-sky-500 h-full shadow-md bg-[url('/certified.png)] text-sky-600 w-full rounded-lg flex-1 overflow-hidden py-40 transition-all duration-300 ease-out  flex flex-col justify-center items-center gap-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex  gap-10 justify-center items-center px-20 md:px-10">
            <div className="flex flex-col  justify-center gap-2 items-center">
              <div className="lg:w-20 lg:h-20 md:w-14 md:h-14 w-10 h-10  overflow-hidden ">
                {isAnimating3 ? (
                  <LottieAnimation3 autoplay={isAnimating3} />
                ) : (
                  <img src="/arrow-blue.svg" alt="" />
                )}
              </div>
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
                fontSize: "1vw",
              }}
              className="h-0 w-0  border-white border-4 text-white rounded-md hidden"
            >
              Our cameras and equipment are of the highest quality. If you are
              not satisfied for any reason, we will gladly accept the camera
              back and credit your account with the full price of the item.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
