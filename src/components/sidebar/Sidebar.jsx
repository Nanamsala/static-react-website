import './sidebar.css'
import featuredArtist from '../../images/featuredartist.jpg'
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">FEATURED ARTIST</span>
            <img src={featuredArtist} alt="" />
            <p>
                Christofer Allen Ventura or Allen currently pursues Multimedia Arts in De La Salle - College of Saint Benilde and works as a freelance digital artist. He specializes in Photography, Videography, and Graphic Design. He creates and designs collateral materials for companies and businesses. He also covers video and photography in different events like reunions, birthdays, art exhibits, and more. His greatest achievement, so-far is that he was the provider of photo references for an art exhibit by Ronald Ventura titled “Epidermic: All is Skin” in Secret Fresh held on December 2021. He also provides photo/digital arts references for Art NFTs in collaboration with Big Boy Cheng which is expected to come out mid-year.
            </p>
        </div>
        <div className="sidebarItem">
            <span className='sidebarTitle'>EXPERIENCES</span>
            <ul className='sidebarList'>
                <li className='sidebarListItem'>Web Developer</li>
                <li className='sidebarListItem'>Web Designer</li>
                <li className='sidebarListItem'>Branding</li>
                <li className='sidebarListItem'>Logo Designer</li>
                <li className='sidebarListItem'>Illustrator</li>
                <li className='sidebarListItem'>Gadget Operator</li>
                <li className='sidebarListItem'>Videographer</li>
                <li className='sidebarListItem'>Photographer</li>
            </ul>
            <NavLink to="/sangguniart/featured" className="button sidebarButton">Read More!</NavLink>
        </div>
    </div>
  )
}
