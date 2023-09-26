import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Tech, Hero, Navbar, Works, StarsCanvas } from './components';


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-cover bg-no-repeat bg-center relative z-0">
          <Navbar/>
          <Hero/>
          <StarsCanvas/>
      </div>
        <About/>
        <Experience/>
        <Works/>
      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
