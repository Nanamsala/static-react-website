import "./navbar.css"
import { NavLink } from "react-router-dom";
const CustomButton = props => {
  return (
      <div>
          <a class="navBtn" href="# " onClick={props.anyprop}>☰</a>
      </div>
  );
};

export default function NavBar() {
  return (
    <div className="nav">
        <div className="navLeft"><NavLink to="/" style={{textDecoration:'none', color:'#333'}}><div>Sangguni<mark class="art">Art</mark></div></NavLink></div>
        <div className="navCenter"><CustomButton class="navBtn" anyprop={()=>{
           const right = document.querySelector('.navRight');
           const middle = document.querySelector('.navMiddle');
           right.classList.toggle('navRight_Big');
           middle.classList.toggle('navMiddle_Toggle')
        }}/></div>
        <div className="navRight">
            <ul className="navButtons">
                <li className="navButtonItem">
                <NavLink to="/sangguniart/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
                </li>
                <li className="navButtonItem">
                  <NavLink to="sangguniart/about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>About</NavLink>
                </li>
                <li className="navButtonItem">
                <NavLink to="sangguniart/featured" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Featured</NavLink>
                </li>
                <li className="navButtonItem">
                  <NavLink to="sangguniart/artists" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Artists</NavLink>
                </li>
                <li className="navButtonItem">
                  <NavLink to="sangguniart/contact" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Contact</NavLink>
                </li>
            </ul>
        </div>
    </div>
  )
}
