import Header from "./components/Header"
import { scroller } from "react-scroll"
import Profile from "./components/Profile"
import Projects from "./components/Projects"
import Info from "./components/info"
import ContactForm from "./components/Contact"
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
   <main className="flex flex-col items-center" >
   <div className="md:w-[976px] main-bg w-screen">
      <section id="profile" >
          <Profile/>
      </section>
      <div className="md:w-[976px] md:flex md:flex-row-reverse  md:justify-around">
      <section id="tech" className="md:flex " >
        <Info/>
      </section>
      <div>
      <section id="about">
        <Projects/>
      </section>
      <section id="Contact">
        <ContactForm/>
      </section>
      </div>
      </div>
      </div>
   </main>
   </>
  )
}

export default App
