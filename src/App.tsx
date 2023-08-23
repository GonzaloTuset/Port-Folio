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
        <article className="col-12 col-lg-6 text-white px-3 px-lg-5 ">
          <h2 className="text-black">Gonzalo Tuset</h2>
          <p>React Developer</p>
          <a>Descargar Cv</a>
          <div className="bg-black">Mi nombre es Gonzalo, tengo 23 años,recido en Buenos Aires,Argentina.</div>
        </article>
         </section>
      <section id="about" className="bg-black text-white h-[100px] mt-[1000px]">
        <div>Fuck</div>
      </section>
      
      </main>
      </>
  )
}

export default App
