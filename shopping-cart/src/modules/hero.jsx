export default function Hero({ image, header, subheader, paragraph, call }) {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="bg-cover py-[20rem] bg-center px-80 flex justify-end items-center saturate-100"
    ></div>
  );
}
