import {BrowserRouter} from 'react-router-dom';
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components';

const App = () => {
  return (
    /*browserrouter remebers the url for the current webpage within the browser */
   <BrowserRouter>
      <div className ="realtive z-0 bg-primary">
        <div className = "bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
        </div>
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className = "relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </BrowserRouter>
      
  )
}

export default App
