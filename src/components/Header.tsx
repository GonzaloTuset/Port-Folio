interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}
const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  return (
    <div>
      <a onClick={() => scrollToSection("home")}>Home</a>
      <a onClick={() => scrollToSection("about")}>About Me</a>
    </div>
  );
};

export default Header