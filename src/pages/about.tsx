import Navbar from "../components/navbar";
 // replace with your image

export default function About() {
  return (
    <>
      <Navbar />
      <section className=" text-white min-h-screen px-6 md:px-20 py-16 flex flex-col md:flex-row items-center gap-10">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            About Me
          </h1>
          <p className="text-lg md:text-xl">
            Hi, I’m Deepanshu Kasana. I am a dedicated business partner and
            web developer with experience in React, TypeScript, and Tailwind CSS. 
            I specialize in creating responsive, modern, and user-friendly web applications.
          </p>
          <p className="text-lg md:text-xl">
            I love solving complex problems, collaborating with teams, and delivering
            high-quality results. My goal is to build solutions that not only look
            great but also provide meaningful experiences to users.
          </p>
          <button className="bg-amber-500 hover:bg-amber-600 py-2 px-6 rounded font-semibold w-max transition">
            Contact Me
          </button>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/banner.png" // make sure this exists in your public folder
            alt="Profile"
            className="rounded-3xl object-cover h-[60vh] w-full md:w-auto shadow-lg"
          />
        </div>
      </section>

      {/* Experience / Highlights Section */}
      <section className="bg-white text-black py-16 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-extrabold  text-center">
          My Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-8 max-w-6xl mx-auto">
          <div className="bg-amber-500 rounded-3xl p-6 text-center shadow-lg">
            <h3 className="text-xl font-bold mb-2">5+ Projects</h3>
            <p>Worked on multiple web applications using modern framework.</p>
          </div>
          <div className="bg-amber-500 rounded-3xl p-6 text-center shadow-lg">
            <h3 className="text-xl font-bold mb-2">1+ Years Experience</h3>
            <p>Professional experience in frontend development solutions.</p>
          </div>
          <div className="bg-amber-500 rounded-3xl p-6 text-center shadow-lg">
            <h3 className="text-xl font-bold mb-2">Tech Stack</h3>
            <p>React, TypeScript, Tailwind CSS, Git & GitHub.</p>
          </div>
        </div>
      </section>
    </>
  );
}
