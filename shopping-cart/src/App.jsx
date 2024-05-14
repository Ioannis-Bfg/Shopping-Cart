import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Boxes = lazy(() => import("./modules/boxes"));
const ScrollToTop = lazy(() => import("./modules/scroll"));
const ItemDetails = lazy(() => import("./modules/item_details"));
const Faq = lazy(() => import("./modules/faq"));
const Cart = lazy(() => import("./modules/cart"));

const Review = lazy(() => import("./modules/review"));
const Owner = lazy(() => import("./modules/owner"));
const Call = lazy(() => import("./modules/call"));
const Footer = lazy(() => import("./modules/footer"));
const Shop = lazy(() => import("./modules/shop"));
const Arrivals = lazy(() => import("./modules/arrivals"));
const Header = lazy(() => import("./modules/header"));
const HeroCarousel = lazy(() => import("./modules/hero_carousel"));
const Parallax = lazy(() => import("./modules/parallax"));
const Showcase = lazy(() => import("./modules/showcase"));

export default function App() {
  // const [scrollY, setScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => setScrollY(window.scrollY);
  //   window.addEventListener("scroll", handleScroll);

  //   // Restore scroll position on mount
  //   const savedScrollY = localStorage.getItem("scrollY");
  //   if (savedScrollY) {
  //     window.scrollTo(0, parseInt(savedScrollY));
  //   }

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     // Save scroll position on unmount
  //     localStorage.setItem("scrollY", scrollY.toString());
  //   };
  // }, []);

  const [shoppingCart, setShoppingCart] = useState([]);

  const shopItems = [
    {
      id: 1,
      imageUrl: "/arrival1.jpg",
      isNew: true,
      isSale: true,
      model: "Canon EOS 80D",
      price: "899",
    },
    {
      id: 2,
      imageUrl: "/arrival2.jpg",
      isNew: true,
      model: "Nikon D3500",
      price: "799",
    },
    {
      id: 3,
      imageUrl: "/arrival3.jpg",
      model: "Sony Alpha a6400",
      price: "699",
    },
    {
      id: 4,
      imageUrl: "/arrival4.jpg",
      model: "Fujifilm X-T3",
      price: "1299",
    },
    {
      id: 5,
      imageUrl: "/arrival5.jpg",
      model: "Panasonic Lumix GH5",
      price: "1999",
    },
    {
      id: 6,
      imageUrl: "/arrival1.jpg",
      isNew: true,
      model: "Sony Alpha a7R III",
      price: "2999",
    },
    {
      id: 7,
      imageUrl: "/arrival2.jpg",
      isNew: true,
      model: "Nikon D850",
      price: "2999",
    },
    {
      id: 8,
      imageUrl: "/arrival3.jpg",
      model: "Canon EOS 5D Mark IV",
      price: "2499",
      isSale: true,
    },
    {
      id: 9,
      imageUrl: "/arrival4.jpg",
      model: "Fujifilm X-T20",
      price: "1499",
    },
    {
      id: 10,
      imageUrl: "/arrival5.jpg",
      model: "Sony Alpha a7 III",
      price: "1499",
    },
    {
      id: 11,
      imageUrl: "/arrival1.jpg",
      isNew: true,
      model: "Nikon D3400",
      price: "699",
    },
    {
      id: 12,
      imageUrl: "/arrival2.jpg",
      model: "Panasonic Lumix GH5s",
      isSale: true,
      price: "1799",
    },
    {
      id: 13,
      imageUrl: "/arrival3.jpg",
      model: "Canon EOS 7D Mark II",
      price: "1499",
    },
    {
      id: 14,
      imageUrl: "/arrival4.jpg",
      isNew: true,
      model: "Fujifilm X-T200",
      isSale: true,
      price: "1999",
    },
    {
      id: 15,
      imageUrl: "/arrival5.jpg",
      model: "Sony Alpha a9",
      price: "2999",
    },
    {
      id: 16,
      imageUrl: "/arrival1.jpg",
      model: "Nikon D3500",
      price: "799",
    },
    {
      id: 17,
      imageUrl: "/arrival2.jpg",
      model: "Canon EOS 5D Mark IV",
      price: "2499",
    },
    {
      id: 18,
      imageUrl: "/arrival3.jpg",
      model: "Sony Alpha a6400",
      price: "699",
    },
    {
      id: 19,
      imageUrl: "/arrival4.jpg",
      model: "Fujifilm X-T3",
      price: "1299",
    },
    {
      id: 20,
      imageUrl: "/arrival2.jpg",
      isNew: true,
      model: "Nikon D3500",
      price: "799",
    },
    {
      id: 21,
      imageUrl: "/arrival3.jpg",
      model: "Sony Alpha a6400",
      price: "699",
    },
    {
      id: 22,
      imageUrl: "/arrival4.jpg",
      model: "Fujifilm X-T3",
      price: "1299",
    },
    {
      id: 23,
      imageUrl: "/arrival5.jpg",
      model: "Panasonic Lumix GH5",
      price: "1999",
    },
    {
      id: 24,
      imageUrl: "/arrival1.jpg",
      isNew: true,
      model: "Sony Alpha a7R III",
      price: "2999",
    },
    {
      id: 25,
      imageUrl: "/arrival2.jpg",
      isNew: true,
      model: "Nikon D850",
      price: "2999",
    },
    {
      id: 26,
      imageUrl: "/arrival3.jpg",
      model: "Canon EOS 5D Mark IV",
      price: "2499",
      isSale: true,
    },
    {
      id: 27,
      imageUrl: "/arrival4.jpg",
      model: "Fujifilm X-T20",
      price: "1499",
    },
    {
      id: 28,
      imageUrl: "/arrival5.jpg",
      model: "Sony Alpha a7 III",
      price: "1499",
    },
  ];
  const item_cart = function (item) {
    return {
      id: item.id,
      quantity: 1,
      item: item,
    };
  };

  function addToCart(item) {
    const existingCartItemIndex = shoppingCart.findIndex(
      (cartItem) => cartItem.id === item.id,
    );
    if (existingCartItemIndex !== -1) {
      shoppingCart[existingCartItemIndex].quantity += 1;
    } else {
      const temp = item_cart(item);
      setShoppingCart([...shoppingCart, temp]);
    }
  }

  function decQuantity(item) {
    console.log("updated");
    setShoppingCart((prevCart) => {
      const updatedCart = [...prevCart];
      const existingCartItemIndex = updatedCart.findIndex(
        (cartItem) => cartItem.id === item.id,
      );
      if (existingCartItemIndex !== -1) {
        if (updatedCart[existingCartItemIndex].quantity > 1) {
          updatedCart[existingCartItemIndex].quantity -= 1;
        } else {
          updatedCart.splice(existingCartItemIndex, 1);
        }
      }
      return updatedCart;
    });
    console.log(item.quantity);
  }

  function incQuantity(item) {
    setShoppingCart((prevCart) => {
      const updatedCart = [...prevCart];
      const existingCartItemIndex = updatedCart.findIndex(
        (cartItem) => cartItem.id === item.id,
      );
      if (existingCartItemIndex !== -1) {
        updatedCart[existingCartItemIndex].quantity += 1;
      }
      return updatedCart;
    });
  }

  function remove(item) {
    setShoppingCart((prevCart) => {
      calculateTotal();
      return prevCart.filter((cartItem) => cartItem.id !== item.id);
    });
  }

  const [total, setTotal] = useState(0);

  function calculateTotal() {
    let total = 0;
    shoppingCart.forEach((c) => {
      total += c.item.price * c.quantity;
    });
    setTotal(total);
    console.log(total, "hey");
  }

  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
      }
    >
      <BrowserRouter>
        <ScrollToTop />
        <Header scrollY={scrollY} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroCarousel />
                <Boxes />
                <Arrivals />
                <Showcase />
                <Parallax />
                <Review />
                <Owner />
                <Call />
                <Faq />
              </>
            }
          />
          <Route
            path="shop"
            element={
              <>
                <Shop shopItems={shopItems} />
              </>
            }
          />
          <Route
            path="/item/:id"
            element={
              <ItemDetails shopItems={shopItems} addToCart={addToCart} />
            }
          />

          <Route
            path="/cart"
            element={
              <Cart
                shoppingCart={shoppingCart}
                total={total}
                decQuantity={decQuantity}
                incQuantity={incQuantity}
                remove={remove}
                calculateTotal={calculateTotal}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}
