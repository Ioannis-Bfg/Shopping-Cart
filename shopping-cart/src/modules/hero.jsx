export default function Hero({ image, header, subheader, paragraph, call }) {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="md:bg-cover py-[20rem] bg-[length:50%_100%] bg-center lg:bg-center px-80 flex justify-end items-center saturate-100"
    ></div>
  );
}
