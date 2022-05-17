import './style-components.css'
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useNavigation, NavLink } from "react-router-dom"
import { button } from 'react-native'

export default function Navbar() {
  return (
    <div>
      <ul className="navbar-list">
        <li className="nav-item">About</li>
        <li className="nav-item">Projects</li>
        <li className="nav-item">Contact</li>
        <li className="nav-item">Resume</li>
      </ul>
    </div>
  )
}
