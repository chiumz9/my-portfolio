import './style-components.css'
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useNavigate, NavLink } from "react-router-dom"
import { button } from 'react-native'

import Home from '../screens/Home.jsx'
import About from '../screens/About.jsx'
import Projects from '../screens/Projects.jsx'
import Contact from '../screens/Contact.jsx'

export default function Navbar() {
  const navigate = useNavigate()

  return (
    <div>
      <ul className="navbar-list">
        <li className="nav-item" onClick={() => navigate("/")}>Home</li>
        <li className="nav-item" onClick={() => navigate("/about")}>About</li>
        <li className="nav-item" onClick={() => navigate("/projects")}>Projects</li>
        <li className="nav-item" onClick={() => navigate("/contact")}>Contact</li>
      </ul>
    </div>
  )
}
