export default function Owner() {
  return (
    <section
      id="owner-section"
      className="w-full h-full bg-center bg-cover bg-owner py-20 px-10"
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-20 px-30 ">
        <img src="/owner.jpg" alt="owner" className="rounded-full size-80" />
        <div className="flex flex-col gap-4  bg-[rgba(255,255,255,0.29)] backdrop-blur-xl p-12 shadow-lg rounded-xl">
          <p className="text-3xl font-bold" tabIndex={0}>
            Karen Lee
          </p>
          <p className="text-xl font-medium">Owner & Photographer</p>
          <p className="max-w-[82ch]">
            As a photographer, I strive to capture the world through the lens of
            my camera. I love the feeling of capturing a moment that transcends
            time and space. I believe that photography has the power to evoke
            emotions and connect people from all walks of life. . I am committed
            to providing exceptional service and quality work. If you have a
            story to tell, let’s make it a beautiful memory together.
          </p>
        </div>
      </div>
    </section>
  );
}
