import { useState } from "react";
import Logo from '../assets/logo_blanco-removebg-preview.png'
interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const [menuOpen, setmenuOpen] = useState(false)
  const toggleMenu = () => {
    setmenuOpen(!menuOpen)
  }
  return (
    <>

      <div className="fixed top-0 left-0 w-screen bg-[rgb(23,29,37)] md:p-4 py-[16px] h-[56px] shadow z-50 text-[rgb(234,249,249)] flex flex-row md:flex  justify-between">
        <img className="pl-[10px]" src={Logo}></img>
        <div className=" hidden md:flex md:flex-row md:justify-around w-[1000px] md:pr-[30px] family ">
          <a onClick={() => scrollToSection("home")}>Sobre mi</a>
          <a onClick={() => scrollToSection("tech")}>Tech stack</a>
          <a onClick={() => scrollToSection("about")}>Proyectos</a>
          <a onClick={() => scrollToSection("Contact")}>Contacto</a>
        </div>
        <div>
          <div className="flex justify-end">
            <button
              onClick={toggleMenu}
              className="  flex md:hidden text-white  hover:text-gray-400 focus:outline-none pr-[10px] justify-end"
            >
              <svg
                className=" md:hidden w-6 h-6 "
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          {menuOpen && (
            <div className="  h-screen w-[187.5px] mt-[16px] bg-[rgb(23,29,37)]  md:hidden mt-2space-y-2 flex flex-col items-center gap-[10px]">
              <a
                onClick={() => {
                  scrollToSection("home");
                  toggleMenu();
                }}
                className="block px-4 py-2 text-white hover:bg-gray-600"
              >
                Sobre mi
              </a>
              <a
                onClick={() => {
                  scrollToSection("about");
                  toggleMenu();
                }}
                className="block px-4 py-2 text-white hover:bg-gray-600"
              >
                Proyectos
              </a>
              <a
                onClick={() => {
                  scrollToSection("tech");
                  toggleMenu();
                }}
                className="block px-4 py-2 text-white hover:bg-gray-600"
              >
                Tech stack
              </a>
              <a
                onClick={() => {
                  scrollToSection("Contact");
                  toggleMenu();
                }}
                className="block px-4 py-2 text-white hover:bg-gray-600"
              >
                Contacto
              </a>
              <div>
                
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Header