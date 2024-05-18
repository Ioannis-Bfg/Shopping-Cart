import Item from "./item";

export default function Arrivals() {
  return (
    <>
      <section
        id="arrivals"
        className="text-center w-full flex gap-10 flex-col items-center py-10 px-40 "
      >
        <h1
          className="text-5xl font-bold text-sky-500 flex items-center gap-4 justify-center "
          tabIndex={0}
        >
          <p className="text-5xl font-bold text-sky-500 text-nowrap">
            New Arrivals
          </p>
        </h1>
        <div className="flex justify-center gap-10  flex-wrap">
          <Item imageUrl={"/arrival1.jpg"} />
          <Item imageUrl={"/arrival2.jpg"} />
          <Item imageUrl={"/arrival5.jpg"} />
          <Item imageUrl={"/arrival4.jpg"} />
          <Item imageUrl={"/arrival3.jpg"} />
        </div>
      </section>
    </>
  );
}
