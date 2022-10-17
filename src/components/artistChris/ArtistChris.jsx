import '../artist.css'
import artistImage from '../../images/featuredartist.jpg'
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
            <span className='artistName'><NavLink to="/sangguniart/featured" className="button" style={{color:'#985232'}}>Christofer Allen Ventura</NavLink></span>
            <div className="artistCats">
                <span className='artistCat'>Developer</span>
                <span className='artistCat'>Graphic Designer</span>
                <span className='artistCat'>Videographer</span>
            </div>
            <span className='artistDesc'>Christofer Allen Ventura or Allen currently pursues Multimedia Arts in De La Salle - College of Saint Benilde and works as a freelance digital artist. He specializes in Photography, Videography, and Graphic Design. He creates and designs collateral materials for companies and businesses. He also covers video and photography in different events like reunions, birthdays, art exhibits, and more. His greatest achievement, so-far is that he was the provider of photo references for an art exhibit by Ronald Ventura titled “Epidermic: All is Skin” in Secret Fresh held on December 2021. He also provides photo/digital arts references for Art NFTs in collaboration with Big Boy Cheng which is expected to come out mid-year.</span>
        </div>
    </div>
  )
}
