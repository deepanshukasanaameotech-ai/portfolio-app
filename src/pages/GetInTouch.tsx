import Navbar from "../components/navbar";

export default function GetInTouch() {
  return (
    <>
      <Navbar />
      <section className="text-white min-h-screen px-6 md:px-20 py-16 flex flex-col items-center">
        {/* Header */}
        <div className="max-w-3xl text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Have a project in mind or just want to say hello?  
            Feel free to drop me a message and I’ll get back to you soon!
          </p>
        </div>

        {/* Contact Form */}
        <form className="bg-white text-black rounded-3xl shadow-lg w-full max-w-2xl p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg bg-gray-950 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-3 rounded-lg bg-gray-950 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              rows={5}
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-lg bg-gray-950 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-lg font-semibold py-3 rounded-lg transition"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="flex gap-6 mt-10">
          <a
            href="https://github.com/deepanshukasanaameotech-ai"
            target="_blank"
            className="text-gray-300 hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="text-gray-300 hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:youremail@example.com"
            className="text-gray-300 hover:text-white transition"
          >
            Email
          </a>
        </div>
      </section>
    </>
  );
}
