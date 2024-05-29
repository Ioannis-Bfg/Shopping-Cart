import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";

function LottieAnimation() {
  const animationContainer = useRef(null);
  const animationInstance = useRef(null);

  useEffect(() => {
    animationInstance.current = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/loading.json",
    });

    animationInstance.current.goToAndStop(234, true);

    return () => {};
  }, []);

  return <div ref={animationContainer} />;
}

export default function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center overflow-hidden ">
      <div>
        <LottieAnimation />
      </div>
    </div>
  );
}
