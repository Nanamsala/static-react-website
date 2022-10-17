import '../artist.css'
import artistImage from '../../images/votpic.jpg'
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
            <span className='artistName'><NavLink to="/sangguniart/artists/votria" className="button" style={{color:'#985232'}}>Votria</NavLink></span>
            <div className="artistCats">
                <span className='artistCat'>Watercolor Painter</span>
                <span className='artistCat'>Graphic Designer</span>
                <span className='artistCat'>Illustrator</span>
            </div>
            <span className='artistDesc'>Votria is a 23-year-old student of Multimedia Arts. She is skilled in graphic design and illustration. She began freelancing while she was a senior in high school in 2017, and her first clients came through referrals.</span>
        </div>
    </div>
  )
}
