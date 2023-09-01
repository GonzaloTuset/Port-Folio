import Header from "./components/Header"
import { scroller } from "react-scroll"
import Profile from "./components/Profile"
import Projects from "./components/Projects"
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
      <div className=" w-[375px] ">
      <section id="home" >
            <Profile/>
         </section>
      <section id="about" className=" text-white h-[100px] ">
        <Projects/>
      </section>
      </div>
      </main>
      </>
  )
}

export default App
