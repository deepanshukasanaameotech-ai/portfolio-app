export default function Banner() {
  return (
    <section className="min-h-screen ">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Left Text Section */}
        <div className="flex flex-col justify-center px-6 md:px-20 text-white space-y-5">
          <div className="space-y-3">
            <span className="block w-5  bg-amber-500">Hi</span>
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Deepanshu Kasana
            </h1>
          </div>

          <div className="space-y-10 max-w-md">
            <p>
              A dedicated business partner with experience in multiple areas...
            </p>
            <p>
              Passionate about delivering quality results and building strong relationships.
            </p>
            <button className="bg-amber-500 w-36 py-2 my-3 rounded font-semibold hover:bg-amber-600 transition">
              Hire Me
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full h-[70vh] md:h-full">
          <img
            src="/banner.png"
            alt="Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
