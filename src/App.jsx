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
            <teg id="about"></teg>  
              <Hero />
          </div>

          <teg id='projects'></teg>
            <div className='projects-container'>
              <Projects />
            </div>

          <teg id='contact'></teg>
            <div className='contact-container'>
              <Contact />
            </div>
      </main>
    
    </div>
  )
}

export default App