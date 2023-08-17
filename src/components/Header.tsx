interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}
const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white p-4 shadow z-50">
      <a onClick={() => scrollToSection("home")}>Home</a>
      <a onClick={() => scrollToSection("about")}>About Me</a>
    </div>
  );
};

export default Header