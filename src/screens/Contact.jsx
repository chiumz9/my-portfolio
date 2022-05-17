import './style-screens.css'
import linkedlogo from '../images/linkedinlogo.png'
import gmaillogo from '../images/gmaillogo.png'
import githublogo from '../images/githublogo.png'

export default function Contacts() {
  return (
    <div className="contact-container">
      <h2 className="title"><a className='title' href="mailto:chiumzhou8@gmail.com" >Contact</a></h2>
      <div>
        <div className='contact-logo-container'>
          <h3>Reach me @ </h3>
          <ul className='contact-logo'>
            <li><img src={gmaillogo} /></li>
            <li><img src={githublogo} /></li>
            <li><img className='linkedin-logo' src={linkedlogo} /></li>
          </ul>
        </div>
      </div>
      <p>chiumzhou@gmail.com</p>
    </div>
  )
}
