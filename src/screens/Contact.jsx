import './style-screens.css'
import linkedlogo from '../images/linkedinlogo.png'
import gmaillogo from '../images/gmaillogo.png'
import githublogo from '../images/githublogo.png'

export default function Contacts() {
  return (
    <div className="contact-container">
      <h2 className="title">Contact</h2>
      <div>
        <div className='contact-logo-container'>
          <h3>Reach me @ </h3>
          <ul className='contact-logo'>
            <li><a href="mailto:chiumzhou8@gmail.com"><img className='logo' src={gmaillogo} /></a></li>
            <li><a href="https://github.com/chiumz9"><img className='logo' src={githublogo} /></a></li>
            <li><a href="https://www.linkedin.com/in/chiu-zhou/"><img className='linkedin-logo logo' src={linkedlogo} /></a></li>
          </ul>
        </div>
      </div>
      <a href="mailto:chiumzhou8@gmail.com">chiumzhou@gmail.com</a>
    </div>

  )
}
