import { Link } from "react-router-dom";
import "./header.css";
import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import _ from "lodash";

export default function Header({ shoppingCart }) {
  const [isHeaderOpaque, setIsHeaderOpaque] = useState(true);
  const [isCartNotEmpty, setIsCartNotEmpty] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  let navigate = useNavigate();
  const location = useLocation();
  const currentPage = location.pathname;
  const menuIconRef = useRef(null);
  const scrollHandler = useRef();

  // Debounced scroll handler
  const handleScroll = useCallback(
    _.debounce(() => {
      const halfScreen = window.innerHeight / 2;
      setIsHeaderOpaque(window.scrollY > halfScreen);
    }, 100),
    [],
  );

  useEffect(() => {
    scrollHandler.current = handleScroll;
    window.addEventListener("scroll", scrollHandler.current);
    return () => {
      window.removeEventListener("scroll", scrollHandler.current);
    };
  }, [handleScroll]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsCartNotEmpty(shoppingCart.length > 0);
  }, [shoppingCart]);

  const closeMenu = () => {
    setIsMenuVisible(false);
  };

  const handleAboutUsClick = (event) => {
    event.preventDefault();
    setIsMenuVisible(false);
    navigate("/");
    setTimeout(() => {
      document
        .getElementById("owner-section")
        .scrollIntoView({ behavior: "smooth" });
    }, 400);
  };

  const handleFAQClick = (event) => {
    event.preventDefault();
    setIsMenuVisible(false);
    navigate("/");
    setTimeout(() => {
      document.getElementById("FAQ").scrollIntoView({ behavior: "smooth" });
    }, 400);
  };

  const threshold = 768;

  const menu_classes = ` ${isMenuVisible && windowWidth <= threshold ? "block animate-slide-in" : "hidden"} fixed  transform transition-transform duration-300 ease-in-out  right-0 bg-slate-200 border-l-2 border-[hsla(0,0%,0%,0.02)] z-[10000] min-h-[100vh] min-w-[40vw] px-2 flex flex-col gap-4 py-2 items-center text-md font-semibold text-center text-zinc-700`;

  const handleMenuClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    // Check if the click is outside the menu and not on the menu icon button
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      menuIconRef.current &&
      !menuIconRef.current.contains(event.target)
    ) {
      setIsMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const headerClasses = `bg-white container-lg h-[100px] shadow flex justify-between items-center lg:px-20 px-4 sm:px-8 overflow-hidden py-4 sticky top-0 z-[1000] ${
    isHeaderOpaque
      ? "header-opacity-transition"
      : "header-opacity-transition opacity-transition"
  }`;

  return (
    <>
      <header className={headerClasses}>
        <div id="logo">
          <Link to="/" id="button_logo" aria-label="logo">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 792 362"
              xmlSpace="preserve"
              className="size-32 fill-current"
            >
              <g>
                <path
                  className="st0"
                  d="M254.7,103.4l-108.4,41.6l-21,7.7l16.4-99.1c3.9-0.4,7.8-0.5,11.7-0.5C194.8,53,231.5,72.8,254.7,103.4z"
                />
                <path
                  className="st0"
                  d="M135.8,54.2l-22.1,133.5l-74.6-63.1C57.3,87.2,93.2,60.1,135.8,54.2z"
                />
                <path
                  className="st0"
                  d="M141.3,218.5L49,252.1c-14.2-20.5-22.5-45.4-22.5-72.2c0-17.8,3.6-34.7,10.2-50L141.3,218.5z"
                />
                <path
                  className="st0"
                  d="M180.9,210.1l-16.7,96.4c-3.6,0.3-7.2,0.5-10.9,0.5c-41.2,0-77.8-19.6-101-50L180.9,210.1z"
                />
                <path
                  className="st0"
                  d="M269,232.5c-17.8,39-54.8,67.5-98.9,73.3l23-132.9L269,232.5z"
                />
                <path
                  className="st0"
                  d="M280.4,179.9c0,16.7-3.2,32.6-9.1,47.2l-106-83.4l92.8-35.6C272.2,128.6,280.4,153.3,280.4,179.9z"
                />
                <g>
                  <path
                    className="st0"
                    d="M327.4,245.9V51.5h106v37.7h-60.3v35.3H429v39.1h-55.9v82.2L327.4,245.9L327.4,245.9z"
                  />
                  <path
                    className="st0"
                    d="M468.3,148.7c0-23.4,0.8-40.5,2.5-51.2s4.5-19.2,8.3-25.2c5.5-8.6,12.8-15,21.8-19.1c9-4.2,19.8-6.2,32.4-6.2
			c12.7,0,23.5,2.1,32.4,6.2s16.1,10.5,21.7,19.1c4,6.1,6.9,14.6,8.6,25.4s2.5,27.8,2.5,51.1c0,23.2-0.8,40.2-2.5,51.1
			c-1.7,10.8-4.5,19.3-8.6,25.4c-5.5,8.5-12.7,14.9-21.7,19.1c-9,4.2-19.8,6.3-32.4,6.3s-23.4-2.1-32.4-6.3
			c-9-4.2-16.3-10.6-21.8-19.1c-3.9-6.1-6.6-14.5-8.3-25.2C469.2,189.2,468.3,172.1,468.3,148.7z M552.2,166.3v-35.1
			c0-21.5-1.4-34.9-4.1-39.9c-2.7-5.1-7.7-7.6-14.8-7.6c-7,0-11.8,2.6-14.5,7.8s-4,18.5-4,39.8v35.1c0,21,1.3,34.2,4,39.6
			c2.7,5.4,7.6,8,14.8,8c7.1,0,12-2.6,14.6-7.8C550.8,200.8,552.2,187.6,552.2,166.3z"
                  />
                  <path
                    className="st0"
                    d="M632.6,180h41.7v5.7c0,10.7,1.3,18.2,3.8,22.6c2.5,4.4,6.8,6.6,12.8,6.6c4.8,0,8.6-1.7,11.4-5
			c2.8-3.3,4.2-7.9,4.2-13.6c0-9.4-6.8-18.5-20.3-27.1c-2.2-1.5-3.9-2.6-5-3.4c-0.4-0.2-1.1-0.7-2.2-1.4
			c-18.3-12.3-29.6-21.5-34.1-27.8c-3.2-4.7-5.6-10-7.3-15.9c-1.7-5.9-2.5-12.3-2.5-19.3c0-17,4.9-30.3,14.8-40
			c9.8-9.7,23.4-14.5,40.7-14.5c18.8,0,33.1,4.8,43,14.3c9.9,9.5,14.8,23.3,14.8,41.3c0,0.8,0,1.8-0.1,3.2c-0.1,1.3-0.1,2.4-0.1,3.2
			h-40.8v-2.4c0-8.5-1.3-14.9-4-19.3c-2.7-4.4-6.5-6.6-11.5-6.6c-4.3,0-7.7,1.5-10.3,4.6s-3.9,7.1-3.9,12.2c0,8.2,7.4,17,22.2,26.3
			c2.7,1.8,4.8,3.1,6.2,4c1.2,0.7,2.8,1.7,4.9,3.2c15.9,10.1,26.1,18.6,30.5,25.5c2.8,4.5,4.9,9.5,6.4,15.2
			c1.5,5.7,2.2,11.9,2.2,18.5c0,19.4-5,34.4-15.2,44.9c-10.1,10.5-24.5,15.8-43.3,15.8c-19.7,0-34.5-5-44.4-15.1
			c-9.9-10.1-14.8-25-14.8-44.9c0-1.3,0-2.6,0.1-4C632.2,185.3,632.4,183.1,632.6,180z"
                  />
                </g>
                <g>
                  <path
                    className="st0"
                    d="M320.9,314v-46.9h10.8c4,0,6.9,0.2,8.8,0.5c1.9,0.4,3.5,0.9,4.8,1.7c1.7,1.1,3,2.6,3.9,4.7
			c0.9,2.1,1.4,4.6,1.4,7.4c0,4.8-1.2,8.4-3.8,10.8c-2.5,2.5-6.2,3.7-11,3.7h-3.9v18L320.9,314L320.9,314z M331.9,287.3
			c0.2,0,0.4,0,0.6,0.1s0.5,0,0.9,0c2.2,0,3.8-0.5,4.8-1.5c1-1,1.5-2.7,1.5-5c0-1.9-0.5-3.2-1.5-4.1c-1-0.8-2.8-1.2-5.2-1.2h-0.9
			V287.3z"
                  />
                  <path
                    className="st0"
                    d="M362.1,314v-46.9h11v17.7h8.8v-17.7h10.7V314h-10.7v-19.5h-8.8V314L362.1,314L362.1,314z"
                  />
                  <path
                    className="st0"
                    d="M405,290.6c0-5.6,0.2-9.8,0.6-12.4c0.4-2.6,1.1-4.6,2-6.1c1.3-2.1,3.1-3.6,5.3-4.6s4.8-1.5,7.8-1.5
			c3.1,0,5.7,0.5,7.8,1.5c2.1,1,3.9,2.5,5.2,4.6c1,1.5,1.7,3.5,2.1,6.1s0.6,6.7,0.6,12.3c0,5.6-0.2,9.7-0.6,12.3
			c-0.4,2.6-1.1,4.6-2.1,6.1c-1.3,2-3.1,3.6-5.2,4.6c-2.2,1-4.8,1.5-7.8,1.5c-3,0-5.6-0.5-7.8-1.5s-3.9-2.5-5.3-4.6
			c-0.9-1.5-1.6-3.5-2-6.1C405.2,300.4,405,296.2,405,290.6z M425.2,294.8v-8.5c0-5.2-0.3-8.4-1-9.6s-1.9-1.8-3.6-1.8
			c-1.7,0-2.9,0.6-3.5,1.9s-1,4.5-1,9.6v8.5c0,5.1,0.3,8.3,1,9.5c0.6,1.3,1.8,1.9,3.6,1.9c1.7,0,2.9-0.6,3.5-1.9
			C424.9,303.1,425.2,300,425.2,294.8z"
                  />
                  <path
                    className="st0"
                    d="M454.6,314v-37.8h-8.8v-9.1h29v9.1h-9.2V314H454.6z"
                  />
                  <path
                    className="st0"
                    d="M484.1,290.6c0-5.6,0.2-9.8,0.6-12.4c0.4-2.6,1.1-4.6,2-6.1c1.3-2.1,3.1-3.6,5.3-4.6s4.8-1.5,7.8-1.5
			c3.1,0,5.7,0.5,7.8,1.5c2.1,1,3.9,2.5,5.2,4.6c1,1.5,1.7,3.5,2.1,6.1c0.4,2.6,0.6,6.7,0.6,12.3c0,5.6-0.2,9.7-0.6,12.3
			c-0.4,2.6-1.1,4.6-2.1,6.1c-1.3,2-3.1,3.6-5.2,4.6c-2.2,1-4.8,1.5-7.8,1.5c-3,0-5.6-0.5-7.8-1.5s-3.9-2.5-5.3-4.6
			c-0.9-1.5-1.6-3.5-2-6.1C484.3,300.4,484.1,296.2,484.1,290.6z M504.3,294.8v-8.5c0-5.2-0.3-8.4-1-9.6s-1.9-1.8-3.6-1.8
			c-1.7,0-2.9,0.6-3.5,1.9s-1,4.5-1,9.6v8.5c0,5.1,0.3,8.3,1,9.5c0.6,1.3,1.8,1.9,3.6,1.9c1.7,0,2.9-0.6,3.5-1.9
			C504,303.1,504.3,300,504.3,294.8z"
                  />
                  <path
                    className="st0"
                    d="M556.7,288.3V314h-7.5l-0.5-2.9c-1.1,1.3-2.3,2.2-3.6,2.8s-2.8,0.9-4.5,0.9c-1.9,0-3.7-0.4-5.3-1.1
			c-1.6-0.7-3-1.7-4.2-3.1c-1.5-1.6-2.5-3.9-3.1-6.6c-0.6-2.8-0.9-7.5-0.9-14.1c0-4.7,0.2-8.5,0.6-11.4c0.4-2.8,1.1-5,2-6.4
			c1.3-2,3-3.6,5.2-4.6s4.7-1.5,7.6-1.5c4.6,0,8.1,1.2,10.4,3.8c2.3,2.5,3.5,6.2,3.5,11.2c0,0.2,0,0.5,0,0.8s0,0.7,0,0.9h-10.4v-0.6
			c0-2.7-0.3-4.6-0.9-5.8s-1.5-1.7-2.8-1.7c-1.5,0-2.6,0.7-3.2,2.1s-0.9,4.7-0.9,10v4.6v3.2c0,5.2,0.3,8.5,0.8,9.9s1.6,2,3,2
			s2.6-0.6,3.2-1.8c0.7-1.2,1-3.1,1-5.8c0-0.6,0-1.1,0-1.4s0-0.6,0-0.9h-4.3v-8.2L556.7,288.3L556.7,288.3z"
                  />
                  <path
                    className="st0"
                    d="M569.6,314v-46.9h12.3c4,0,7,0.2,8.8,0.6c1.8,0.4,3.3,1,4.5,1.9c1.3,1.1,2.3,2.5,3,4c0.7,1.6,1,3.5,1,5.7
			c0,2.7-0.5,5-1.4,6.8c-0.9,1.8-2.4,3.3-4.4,4.5c3.4,1.5,5.2,5.1,5.4,10.7c0,0.1,0,0.1,0,0.1c0,0.6,0,1.4,0.1,2.6
			c0.1,5.3,1,8.6,2.6,9.9h-12.8c-0.3-1-0.5-2-0.6-3.1s-0.2-2.2-0.2-3.4c0-0.8,0-1.7,0.1-2.7s0.1-1.8,0.1-2.1c0-2.9-0.4-4.8-1.1-5.9
			s-2.1-1.6-4-1.6h-2.2V314L569.6,314L569.6,314z M580.4,286.7c0.2,0,0.4,0,0.7,0c0.3,0,0.5,0,0.7,0c2.3,0,3.9-0.5,4.8-1.4
			c0.9-0.9,1.4-2.5,1.4-4.6c0-2-0.5-3.4-1.4-4.3c-0.9-0.8-2.5-1.3-4.8-1.3c-0.1,0-0.4,0-0.7,0s-0.5,0-0.7,0V286.7z"
                  />
                  <path
                    className="st0"
                    d="M608.5,314l10.2-46.9h13l10.1,46.9h-11l-1.4-9h-8.6l-1.4,9L608.5,314L608.5,314z M622,296.6h6.3l-3.1-20.5
			L622,296.6z"
                  />
                  <path
                    className="st0"
                    d="M651.9,314v-46.9h10.8c4,0,6.9,0.2,8.8,0.5c1.9,0.4,3.5,0.9,4.8,1.7c1.7,1.1,3,2.6,3.9,4.7s1.3,4.6,1.3,7.4
			c0,4.8-1.2,8.4-3.8,10.8c-2.5,2.5-6.2,3.7-11,3.7h-3.9v18L651.9,314L651.9,314z M662.9,287.3c0.2,0,0.3,0,0.6,0.1s0.5,0,0.9,0
			c2.2,0,3.8-0.5,4.8-1.5c1-1,1.5-2.7,1.5-5c0-1.9-0.5-3.2-1.5-4.1c-1-0.8-2.8-1.2-5.2-1.2h-0.9L662.9,287.3L662.9,287.3z"
                  />
                  <path
                    className="st0"
                    d="M693.1,314v-46.9h11v17.7h8.8v-17.7h10.7V314h-10.7v-19.5h-8.8V314L693.1,314L693.1,314z"
                  />
                  <path
                    className="st0"
                    d="M743.5,314v-19.9l-10.8-27h11.8L749,282l4.6-14.8h11.9l-10.8,27V314H743.5z"
                  />
                </g>
              </g>
            </svg>
          </Link>
        </div>

        <div id="navigation" className="flex gap-16">
          <nav className="hidden md:block">
            <ul>
              <li>
                <Link
                  to="/"
                  className={currentPage === "/" ? "opacity-100" : ""}
                >
                  home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className={currentPage === "/shop" ? "opacity-100" : ""}
                >
                  SHOP
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleAboutUsClick}
                  className="cursor-pointer"
                  tabIndex={0}
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  className="cursor-pointer"
                  onClick={handleFAQClick}
                  tabIndex={0}
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>

          <div
            id="nav_buttons"
            className="flex gap-3 c *:hover:cursor-pointer items-center"
          >
            <button
              id="search_icon"
              aria-label="search icon"
              className="transition ease-in duration-200  hover:scale-110 hover:transition hover:ease-out hover:duration-[500ms]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-search stroke-current"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            <Link
              to={"/cart"}
              id="shopping_cart_icon"
              aria-label="shopping cart icon"
              className="transition ease-in duration-200
            hover:scale-110 hover:transition hover:ease-out
            hover:duration-[500ms]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="30"
                viewBox="-1 -2 27 27"
                fill="none"
                stroke={isCartNotEmpty ? "#0ea5e9" : "currentColor"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`feather feather-shopping-bag `}
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <circle
                  cx="20"
                  cy="4"
                  r="4"
                  className={`fill-sky-500 ${isCartNotEmpty ? "block animate-pulse" : "hidden"}`}
                ></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </Link>
            <button
              id="menu_icon"
              ref={menuIconRef}
              className="block md:hidden active:scale-110"
              onClick={handleMenuClick}
            >
              {isMenuVisible ? (
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
                  className="feather feather-x"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
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
                  className="feather feather-menu transition ease-in duration-200  hover:scale-110 hover:transition hover:ease-out hover:duration-[500ms] "
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>
      <div id="menu" ref={menuRef} className={menu_classes}>
        {isMenuVisible && (
          <>
            <Link
              to="/"
              onClick={closeMenu}
              className=" py-2 min-w-full hover:bg-gray-100 hover:text-sky-500 transition-all duration-200 ease-out hover:duration-100 hover:ease-in active:bg-white"
            >
              Home
            </Link>
            <Link
              to="/shop"
              onClick={closeMenu}
              className="cursor-pointer hover:bg-gray-100 hover:text-sky-500 transition-all duration-200 ease-out hover:duration-100 hover:ease-in  py-2 min-w-full active:bg-white"
            >
              Shop
            </Link>
            <Link
              onClick={handleAboutUsClick}
              className=" hover:bg-gray-100 hover:text-sky-500 transition-all duration-200 ease-out hover:duration-100 hover:ease-in py-2 min-w-full active:bg-white"
            >
              About us
            </Link>
            <Link
              onClick={handleFAQClick}
              className="hover:bg-gray-100 hover:text-sky-500 transition-all duration-200 ease-out hover:duration-100 hover:ease-in py-2 min-w-full cursor-pointer active:bg-white"
            >
              FAQ
            </Link>
          </>
        )}
      </div>
    </>
  );
}
