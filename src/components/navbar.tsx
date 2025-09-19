import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Skills", "Projects", "About", "Get in Touch"];

  return (
    <nav className="bg-amber-500 py-5 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between rounded-3xl ">
        {/* Logo / Brand */}
        <Link to="/" className="text-lg md:text-xl font-bold text-white">
          My Portfolio
        </Link>


        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {menuItems.map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase().replace(/\s/g, "")}`} 
              className="text-white text-lg hover:text-gray-100 transition"
            >
              {item}
            </Link>
          ))}
        </div>



        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-amber-500 rounded-b-3xl mt-2 px-6 py-4 shadow-lg animate-slideDown">
          <ul className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <li key={item}>
                <Link
                 to={`/${item.toLowerCase().replace(/\s/g, "")}`}
                  className="text-white text-lg hover:text-gray-100 transition block"
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
