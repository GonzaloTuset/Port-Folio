import Header from "./components/Header"
function App() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section instanceof HTMLElement) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main className={`bg-white w-screen h-screen `}>
      <Header scrollToSection={scrollToSection}/>
      <section id="home" className="bg-cyan-500">
        <div className="text-white">HOLA</div>
      </section>
      <section id="about" className="bg-black text-white h-[100px] mt-[1000px]">
        <div>Fuck</div>
      </section>
      
      </main>
  )
}

export default App
