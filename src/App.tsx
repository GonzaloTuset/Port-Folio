import Header from "./components/Header"
import { scroller } from "react-scroll";
function App() {
  const scrollToSection = (sectionId: string) => {
    scroller.scrollTo(sectionId, {
      duration: 700,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -50, 
    });
  };
  return (
    <>
    <Header scrollToSection={scrollToSection}/>
    <main className={`bg-white w-screen h-screen `}>
      <section id="home" className="bg-cyan-500 ">
        <div className="text-black">HOLA</div>
         </section>
      <section id="about" className="bg-black text-white h-[100px] mt-[1000px]">
        <div>Fuck</div>
      </section>
      
      </main>
      </>
  )
}

export default App
