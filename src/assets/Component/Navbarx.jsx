import { useState } from "react";

export const Navbarx = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    if (id === "contact") {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -250; 
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="bg-bg1 shadow-md sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center h-16">
          <div className="hidden md:flex space-x-8 items-center justify-center flex-grow">
            <button
              onClick={() => scrollToSection("me")}
              className="text-[#5ac65e] text-lg hover:text-gray-800"
            >
              Me
            </button>
            <button
              onClick={() => scrollToSection("experiences")}
              className="text-[#5ac65e] text-lg hover:text-gray-800"
            >
              Experiences
            </button>
            <button
              onClick={() => scrollToSection("project")}
              className="text-[#5ac65e] text-lg hover:text-gray-800"
            >
              Project
            </button>
            <button
              onClick={() => scrollToSection("awards")}
              className="text-[#5ac65e] text-lg hover:text-gray-800"
            >
              Awards
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-[#5ac65e] text-lg hover:text-gray-800"
            >
              Contact
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#5ac65e] focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="#5ac65e"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden px-2 pt-2 pb-3 space-y-1`}
      >
        <button
          onClick={() => {
            scrollToSection("me");
            setIsOpen(false);
          }}
          className="block text-[#5ac65e] text-lg hover:text-gray-800"
        >
          Me
        </button>
        <button
          onClick={() => {
            scrollToSection("experiences");
            setIsOpen(false);
          }}
          className="block text-[#5ac65e] text-lg hover:text-gray-800"
        >
          Experiences
        </button>
        <button
          onClick={() => {
            scrollToSection("project");
            setIsOpen(false);
          }}
          className="block text-[#5ac65e] text-lg hover:text-gray-800"
        >
          Project
        </button>
        <button
          onClick={() => {
            scrollToSection("awards");
            setIsOpen(false);
          }}
          className="block text-[#5ac65e] text-lg hover:text-gray-800"
        >
          Awards
        </button>
        <button
          onClick={() => {
            scrollToSection("contact");
            setIsOpen(false);
          }}
          className="block text-[#5ac65e] text-lg hover:text-gray-800"
        >
          Contact
        </button>
      </div>
    </nav>
  );
};
