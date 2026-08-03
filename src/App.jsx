import Navbar from "./components/Navbar";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skils";
import Experience from './sections/Experience';

function App() {

  return (
   <>
   <Navbar />
   <main>
    <Hero/>
    <About/>
    <Skills />
    <Projects />
    <Experience />
   </main>
  {/* <SEO />

  <Navbar />

  <main>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Contact />
  </main>

  <Footer /> */}
</>
  )
}

export default App
