import { useState } from "react";
interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const [menuOpen, setmenuOpen] = useState(false)
  const toggleMenu = () =>{
    setmenuOpen(!menuOpen)
  }
  return (
    <div className="fixed top-0 left-0 w-full bg-[rgb(23,29,37)] p-4 shadow z-50 text-[rgb(234,249,249)] ">
     <div className="hidden">
      <a onClick={() => scrollToSection("home")}>Sobre mi</a>
      <a onClick={() => scrollToSection("about")}>Proyectos</a>
      <a onClick={() => scrollToSection("tech")}>Tech stack</a>
      <a onClick={() => scrollToSection("Contact")}>Contacto</a>
     </div>
     <button
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-gray-400 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>
    </div>
  );
};

export default Header