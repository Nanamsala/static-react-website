import '../artist.css'
import artistImage from '../../images/artpic.jpg'
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
            <span className='artistName'><NavLink to="/sangguniart/artists/artcis" className="button" style={{color:'#985232'}}>Artcis</NavLink></span>
            <div className="artistCats">
                <span className='artistCat'>Painter</span>
                <span className='artistCat'>Graphic Designer</span>
                <span className='artistCat'>Illustrator</span>
            </div>
            <span className='artistDesc'>Artcis is a 23-year-old college student. Before
becoming a digital artist, he worked on traditional arts commissions wherein he would draw
on paper and watercolor painting. He first learned how to make Digital Art back when he was
in Senior High School.</span>
        </div>
    </div>
  )
}
