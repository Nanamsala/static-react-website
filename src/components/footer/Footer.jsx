import './footer.css'
import { NavLink } from "react-router-dom";


export default function Footer() {
  return (
    <div className='footer'>
        <ul className="navButtons">
                <li className="navButtonItem">
                <NavLink to="/sangguniart/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
                </li>
                <li className="navButtonItem">
                  <NavLink to="/sangguniart/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>About</NavLink>
                </li>
                <li className="navButtonItem">
                <NavLink to="/sangguniart/featured" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Featured</NavLink>
                </li>
                <li className="navButtonItem">
                  <NavLink to="/sangguniart/artists" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Artists</NavLink>
                </li>
                <li className="navButtonItem">
                  <NavLink to="/sangguniart/contact" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Contact</NavLink>
                </li>
            </ul>
        <p>© 2022 Sangguniart   - Created by Jeremar Dorado and Zach Acopio Macariola</p>
        <p>Developed by Paul Manansala</p>
    </div>
  )
}
