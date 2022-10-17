import './header.css';
import headerImage from '../../images/headerimage.jpeg'
import { NavLink } from "react-router-dom";


export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitle">
            <span className='headerTitleSm'>
                Multimedia Artist & Digital Artist Freelancer <br></br>
                <NavLink to="/sangguniart/featured" className="button">Read More!</NavLink>
            </span>
            <span className='headerTitleLg'>
                CHRISTOFER ALLEN VENTURA
            </span>
        </div>
        <img 
            className='headerImg' 
            src={headerImage}
            alt=''
        />
    </div>
  )
}

