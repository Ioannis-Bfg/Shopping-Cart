import Item from "./item";
import ShopItem from "./shop_item";

import React, { useState } from "react";

export default function Shop() {
  const [showSaleItems, setShowSaleItems] = useState(false);
  const [showNewItems, setShowNewItems] = useState(false);

  const handleSaleCheckboxChange = (event) => {
    setShowSaleItems(event.target.checked);
  };

  const handleNewCheckboxChange = (event) => {
    setShowNewItems(event.target.checked);
  };

  const shopItems = [
    {
      imageUrl: "/arrival1.jpg",
      isNew: true,
      isSale: true,
      model: "Canon EOS 80D",
      price: "$899",
    },
    {
      imageUrl: "/arrival2.jpg",
      isNew: true,
      model: "Nikon D3500",
      price: "$799",
    },
    {
      imageUrl: "/arrival3.jpg",
      model: "Sony Alpha a6400",
      price: "$699",
    },
    {
      imageUrl: "/arrival4.jpg",
      model: "Fujifilm X-T3",
      price: "$1299",
    },
    {
      imageUrl: "/arrival5.jpg",
      model: "Panasonic Lumix GH5",
      price: "$1999",
    },
    {
      imageUrl: "/arrival1.jpg",
      isNew: true,
      model: "Sony Alpha a7R III",
      price: "$2999",
    },
    {
      imageUrl: "/arrival2.jpg",
      isNew: true,
      model: "Nikon D850",
      price: "$2999",
    },
    {
      imageUrl: "/arrival3.jpg",
      model: "Canon EOS 5D Mark IV",
      price: "$2499",
      isSale: true,
    },
    {
      imageUrl: "/arrival4.jpg",
      model: "Fujifilm X-T20",
      price: "$1499",
    },
    {
      imageUrl: "/arrival5.jpg",
      model: "Sony Alpha a7 III",
      price: "$1499",
    },
    {
      imageUrl: "/arrival1.jpg",
      isNew: true,
      model: "Nikon D3400",
      price: "$699",
    },
    {
      imageUrl: "/arrival2.jpg",
      model: "Panasonic Lumix GH5s",
      isSale: true,
      price: "$1799",
    },
    {
      imageUrl: "/arrival3.jpg",
      model: "Canon EOS 7D Mark II",
      price: "$1499",
    },
    {
      imageUrl: "/arrival4.jpg",
      isNew: true,
      model: "Fujifilm X-T200",
      isSale: true,
      price: "$1999",
    },
    {
      imageUrl: "/arrival5.jpg",
      model: "Sony Alpha a9",
      price: "$2999",
    },
    {
      imageUrl: "/arrival1.jpg",
      model: "Nikon D3500",
      price: "$799",
    },
    {
      imageUrl: "/arrival2.jpg",
      model: "Canon EOS 5D Mark IV",
      price: "$2499",
    },
    {
      imageUrl: "/arrival3.jpg",
      model: "Sony Alpha a6400",
      price: "$699",
    },
    {
      imageUrl: "/arrival4.jpg",
      model: "Fujifilm X-T3",
      price: "$1299",
    },
    {
      imageUrl: "/arrival2.jpg",
      isNew: true,
      model: "Nikon D3500",
      price: "$799",
    },
    {
      imageUrl: "/arrival3.jpg",
      model: "Sony Alpha a6400",
      price: "$699",
    },
    {
      imageUrl: "/arrival4.jpg",
      model: "Fujifilm X-T3",
      price: "$1299",
    },
    {
      imageUrl: "/arrival5.jpg",
      model: "Panasonic Lumix GH5",
      price: "$1999",
    },
    {
      imageUrl: "/arrival1.jpg",
      isNew: true,
      model: "Sony Alpha a7R III",
      price: "$2999",
    },
    {
      imageUrl: "/arrival2.jpg",
      isNew: true,
      model: "Nikon D850",
      price: "$2999",
    },
    {
      imageUrl: "/arrival3.jpg",
      model: "Canon EOS 5D Mark IV",
      price: "$2499",
      isSale: true,
    },
    {
      imageUrl: "/arrival4.jpg",
      model: "Fujifilm X-T20",
      price: "$1499",
    },
    {
      imageUrl: "/arrival5.jpg",
      model: "Sony Alpha a7 III",
      price: "$1499",
    },
  ];

  const filteredShopItems = shopItems.filter((item) => {
    if (showSaleItems && showNewItems) {
      return item.isSale && item.isNew;
    } else if (showSaleItems) {
      return item.isSale;
    } else if (showNewItems) {
      return item.isNew;
    } else {
      return true;
    }
  });

  return (
    <div className="w-full bg-gray-100 flex flex-col py-20 px-20 min-h-[800px] ">
      <p className="text-3xl font-bold self-center">Shop</p>
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="col-span-2 px-20 py-20 sm:border-r-2 flex flex-col items-center gap-4">
          <p className="text-2xl font-semibold">Filters</p>
          <div className="flex flex-row sm:flex-col">
            <div className="mt-4">
              <label
                htmlFor="showSaleItems"
                className="inline-flex items-center"
              >
                <input
                  type="checkbox"
                  id="showSaleItems"
                  className="form-checkbox h-5 w-5 text-gray-600 opacity-80"
                  checked={showSaleItems}
                  onChange={handleSaleCheckboxChange}
                />
                <span className="ml-2 text-sm text-gray-700 truncate">
                  Show sale items
                </span>
              </label>
            </div>
            <div className="mt-4">
              <label
                htmlFor="showNewItems"
                className="inline-flex items-center"
              >
                <input
                  type="checkbox"
                  id="showNewItems"
                  className="form-checkbox h-5 w-5 text-gray-600 opacity-80"
                  checked={showNewItems}
                  onChange={handleNewCheckboxChange}
                />
                <span className="ml-2 text-sm text-gray-700 truncate">
                  Show new items
                </span>
              </label>
            </div>
          </div>
        </div>
        <div
          className=" px-10 py-20 "
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          {filteredShopItems.map((item, index) => (
            <ShopItem
              key={index}
              imageUrl={item.imageUrl}
              isNew={item.isNew}
              isSale={item.isSale}
              model={item.model}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
