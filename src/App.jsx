import Hero from './components/Hero.jsx';
import Header from './components/Header.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx'

function App() {
  return (
    <div>

      <>
      <Header />
      </>
      <div className="Hero-container">
      <>
      <section id="about"></section>
      </>
      <Hero />
      </div>
      
      <br id='projects'/>
      <br />
      <section></section>
      <div className='projects-container'>
      <Projects />
      </div>

      <br id='contact'/>
      <section></section>
      <div className='contact-container'>
      <Contact />
      </div>

    </div>
  )
}

export default App