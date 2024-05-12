import Item from "./item";
import ShopItem from "./shop_item";

export default function Shop() {
  return (
    <div className="w-full  bg-gray-100 flex flex-col justify-center items-center py-20 px-80">
      <p className="text-3xl font-bold">Shop</p>
      <div className="grid grid-cols-10">
        <div className="col-span-2">
          <p>Filters</p>
        </div>
        <div className="grid grid-cols-5 col-span-8 gap-6 px-20 py-20">
          <ShopItem imageUrl="/arrival1.jpg" isNew={true} isSale={true} />
          <ShopItem imageUrl="/arrival2.jpg" isNew={true} />
          <ShopItem imageUrl="/arrival3.jpg" />
          <ShopItem imageUrl="/arrival4.jpg" />
          <ShopItem imageUrl="/arrival5.jpg" />
          <ShopItem imageUrl="/arrival1.jpg" isNew={true} />
          <ShopItem imageUrl="/arrival2.jpg" isNew={true} />
          <ShopItem imageUrl="/arrival3.jpg" />
          <ShopItem imageUrl="/arrival4.jpg" />
          <ShopItem imageUrl="/arrival5.jpg" />
          <ShopItem imageUrl="/arrival1.jpg" isNew={true} />
          <ShopItem imageUrl="/arrival2.jpg" />
          <ShopItem imageUrl="/arrival3.jpg" />
          <ShopItem imageUrl="/arrival4.jpg" isNew={true} />
          <ShopItem imageUrl="/arrival5.jpg" isSale={true} />
          <ShopItem imageUrl="/arrival1.jpg" />
          <ShopItem imageUrl="/arrival2.jpg" />
          <ShopItem imageUrl="/arrival3.jpg" />
          <ShopItem imageUrl="/arrival4.jpg" />
        </div>
      </div>
    </div>
  );
}
