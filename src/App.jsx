import Navbar from "./components/Navbar";
import About from "./sections/About";
import Hero from "./sections/Hero";

function App() {

  return (
   <>
   <Navbar />
   <main>
    <Hero/>
    <About/>
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
