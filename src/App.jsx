import Hero from './sections/Hero.jsx';
import Header from './components/Header.jsx';
import Projects from './sections/Projects.jsx';
import Contact from './sections/Contact.jsx'

function App() {
  return (
    <div>
      <Header />

      <main>
          <div className="Hero-container">
            <section id="about"></section>  
              <Hero />
          </div>

          <section id='projects'></section>
            <div className='projects-container'>
              <Projects />
            </div>

          <section id='contact'></section>
            <div className='contact-container'>
              <Contact />
            </div>
      </main>
    
    </div>
  )
}

export default App