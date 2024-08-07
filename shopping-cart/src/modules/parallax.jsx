export default function Parallax() {
  return (
    <section
      id="parallax"
      className="w-full h-[350px] bg-center bg-fixed bg-cover bg-[url('/parallax.jpg')] flex justify-center items-center"
    >
      <p className="md:text-5xl text-3xl  font-bold text-white " tabIndex={0}>
        Professional Equipment
      </p>
    </section>
  );
}
