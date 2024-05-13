import Item from "./item";
import ShopItem from "./shop_item";

import React, { useState } from "react";

export default function Shop({ shopItems }) {
  const [showSaleItems, setShowSaleItems] = useState(false);
  const [showNewItems, setShowNewItems] = useState(false);

  const handleSaleCheckboxChange = (event) => {
    setShowSaleItems(event.target.checked);
  };

  const handleNewCheckboxChange = (event) => {
    setShowNewItems(event.target.checked);
  };

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
                  className="form-checkbox w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                  className="form-checkbox w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
              key={item.id} // make sure each item has a unique 'id' property
              id={item.id}
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
