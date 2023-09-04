interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}
const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  return (
    <div className="fixed top-0 left-0 w-full bg-[rgb(23,29,37)] p-4 shadow z-50 text-[rgb(234,249,249)] ">
      <a onClick={() => scrollToSection("home")}>Home</a>
      <a onClick={() => scrollToSection("about")}>About Me</a>
      <a onClick={() => scrollToSection("tech")}>Tech stack</a>
    </div>
  );
};

export default Header