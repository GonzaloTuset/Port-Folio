import Header from "./components/Header"
import { scroller } from "react-scroll";
import Profile from "./components/Projects";
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
    <main className={` h-screen `}>
      <div className=" w-[375px] card">
      <section id="home" >
        <article className="col-12 col-lg-6 text-white px-3 px-lg-5 ">
          <h2 className="text-black">Gonzalo Tuset</h2>
          <p>React Developer</p>
          <a>Descargar Cv</a>
          <div className="bg-black">Mi nombre es Gonzalo, tengo 23 años,recido en Buenos Aires,Argentina.</div>
          <a>Cuento con mas de 800 hs de practica y estudio en React.JS, javascript, SQL</a>
        </article>
         </section>
      <section id="about" className=" text-white h-[100px] mt-[1000px]">
        <Profile/>
      </section>
      </div>
      </main>
      </>
  )
}

export default App
