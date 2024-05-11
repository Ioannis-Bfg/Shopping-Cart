import Item from "./item";
import ShopItem from "./shop_item";

export default function Shop() {
  return (
    <div className="w-full  bg-gray-100 flex flex-col justify-center items-center py-20">
      <p className="text-3xl font-bold">Shop</p>
      <div className="grid grid-cols-5 gap-6 px-20 py-20">
        <ShopItem isNew={true} isSale={true} />
        <ShopItem isNew={true} />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem isNew={true} />
        <ShopItem isNew={true} />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem isNew={true} />
        <ShopItem />
        <ShopItem />
        <ShopItem isNew={true} />
        <ShopItem isSale={true} />

        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
      </div>
    </div>
  );
}
