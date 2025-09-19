import Navbar from "../components/navbar";



const skills = [
  { name: "React", level: "Intermediate" },
  { name: "Formik", level: "Intermediate" },
  { name: "Tailwind CSS", level: "Intermediate" },
  { name: "Node.js", level: "Intermediate" },
  { name: "Git & GitHub", level: "Intermediate" },
  { name: "TypeScript", level: "Beginner" }
];


export default function Skills() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen  py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-white  text-center">
            My Projects
          </h2>

          {/* Project Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-14 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="relative bg-white/10 backdrop-blur-md border border-white/20 
                           rounded-3xl p-6 flex flex-col items-center justify-center 
                           text-center shadow-xl transition-transform 
                           hover:scale-105 hover:shadow-amber-500/40"
              >
                {/* Decorative Circle */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/30 rounded-full blur-2xl opacity-50 -z-10" />

                <h3 className="text-2xl font-bold text-white mb-2">
                  {skill.name}
                </h3>
                <p className="text-gray-300">{skill.level}</p>


              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
