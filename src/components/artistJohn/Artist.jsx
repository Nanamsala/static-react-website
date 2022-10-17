import '../artist.css'
import artistImage from '../../images/johnpic.jpg'
import { NavLink } from "react-router-dom";

export default function Artist() {
  return (
    <div className='artist'>
        <img 
            className='artistImg' 
            src={artistImage}
            alt="" 
        />
        <div className="artistInfo">
            <span className='artistName'><NavLink to="/sangguniart/artists/john" className="button" style={{color:'#985232'}}>John Sarmiento</NavLink></span>
            <div className="artistCats">
                <span className='artistCat'>Freelance Photographer</span>
                <span className='artistCat'>Graphic Designer</span>
                <span className='artistCat'>Editor</span>
            </div>
            <span className='artistDesc'>John is a 22-year-old Information Systems student who enjoys photography. He also works as a photographer for Malate Literary Folio and as the creative director for DLSU's official radio station Green Giant FM.</span>
        </div>
    </div>
  )
}
