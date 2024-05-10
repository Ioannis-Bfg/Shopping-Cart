export default function Hero({ image, header, subheader, paragraph, call }) {
  return (
    <section id="hero" className="w-full bg-center bg-cover bg-hero">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className=" xl:h-[700px]  md:h-[500px] bg-cover bg-center px-80 flex justify-end items-center saturate-80"
      ></div>
    </section>
  );
}
