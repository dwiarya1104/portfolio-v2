
import { useEffect } from 'react'
import './App.css'
import { About } from './components/about/About'
import { Footer } from './components/footer/Footer'
import { Hero } from './components/hero/Hero'
import { Projects } from './components/projects/Projects'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: false,
      offset: 300
      // anchorPlacement: 'top-bottom',
    });
  }, []);
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  )
}

export default App
