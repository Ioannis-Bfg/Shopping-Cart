export default function Header() {
  return (
    <header className="bg-white container-lg shadow flex justify-between items-center px-80 py-4">
      <div id="logo" className="">
        <a href="/" to id="button_logo">
          <img src="/logo.svg" alt="Logo" className="h-16 fill-white" />
        </a>
      </div>

      <div id="navigation" className="flex gap-16">
        <nav className="flex">
          <ul className="flex gap-10 text-xl *:hover:cursor-pointer">
            <li>
              <a
                href="#"
                className="group transition duration-300 flex flex-col gap-1"
              >
                Home
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
              </a>
            </li>
            <li className="">
              {" "}
              <a
                href="#"
                className="group transition duration-300 flex flex-col gap-1"
              >
                Shop
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
              </a>
            </li>
            <li className="">
              {" "}
              <a
                href="#"
                className="group transition duration-300 flex flex-col gap-1"
              >
                About us
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
              </a>
            </li>
            <li className="">
              {" "}
              <a
                href="#"
                className="group transition duration-300 flex flex-col gap-1"
              >
                FAQ
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
              </a>
            </li>
          </ul>
        </nav>
        <div id="nav_buttons" className="flex gap-3 c *:hover:cursor-pointer">
          <button
            id="search_icon"
            className="transition ease-in duration-200  hover:scale-110 hover:transition hover:ease-out hover:duration-[500ms]"
          >
            <img src="/search.svg" alt="search icon" />
          </button>
          <button
            id="shopping_cart_icon"
            className="transition ease-in duration-200  hover:scale-110 hover:transition hover:ease-out hover:duration-[500ms]"
          >
            <img src="/shopping-bag.svg" alt="shopping_cart_icon" />
          </button>
        </div>
      </div>
    </header>
  );
}
