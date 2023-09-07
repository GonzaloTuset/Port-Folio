import Header from "./components/Header"
import { scroller } from "react-scroll"
import Profile from "./components/Profile"
import Projects from "./components/Projects"
import Info from "./components/info"
function App() {
  // Se encarga de detectar la Id de la seccion y dirigirse a esta misma
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
   <main className=" flex flex-col justify-center items-center" >
      <section id="home" >
          <Profile/>
      </section>
      <section id="tech">
        <Info/>
      </section>
      <section id="about" className=" text-white px-[3px] ">
        <Projects/>
      </section>
   </main>
   </>
  )
}

export default App
