import Navbar from "./components/Navbar";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Skills from "./sections/Skils";

function App() {

  return (
   <>
   <Navbar />
   <main>
    <Hero/>
    <About/>
    <Skills />
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
