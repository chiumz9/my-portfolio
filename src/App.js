import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar.jsx'

import Home from './screens/Home.jsx'
import About from './screens/About.jsx'
import Projects from './screens/Projects.jsx'
import Contact from './screens/Contact.jsx'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />

      <Routes>
        <Route path="/#home" element={<Home />} />
        <Route path="/#about" element={<About />} />
        <Route path="/#projects" element={<Projects />} />
        <Route path="/#contact" element={<Contact />} />
      </Routes>
    </div>
  )
}
export default App;
