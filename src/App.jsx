import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import { subscribeLanguage } from "./languages/i18n";

import SEO from "./components/SEO/SEO.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skils";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

function Home() {
  return (
    <>
      <SEO
        title="Onur Solmaz | Software Engineer"
        description="Computer Engineer specializing in React, Laravel and modern web technologies."
      />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

function App() {
  const [, setLanguageVersion] = useState(0);

  useEffect(() => {
    const unsubscribe = subscribeLanguage(() => {
      setLanguageVersion((v) => v + 1);
    });

    return unsubscribe;
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/privacy"
          element={
            <>
              <SEO
                title="Privacy Policy"
                description="Privacy policy for Onur Solmaz portfolio website."
              />
              <Privacy />
            </>
          }
        />

        <Route
          path="*"
          element={
            <>
              <SEO
                title="404 - Page Not Found"
                description="The page you are looking for could not be found."
              />
              <NotFound />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
