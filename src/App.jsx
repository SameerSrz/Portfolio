import { useState } from 'react'
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import GitHubContributions from "./Components/GitHubContributions";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import './App.css'
import Services from './Components/Services';
import Testimonials from './Components/Testimonials';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <GitHubContributions />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
