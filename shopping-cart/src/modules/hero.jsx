export default function Hero({ image, header, subheader, paragraph, call }) {
  return (
    <section id="hero" className="w-full bg-center bg-cover bg-hero">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className=" h-[700px] bg-cover bg-center px-80 flex justify-end items-center"
      ></div>
    </section>
  );
}
