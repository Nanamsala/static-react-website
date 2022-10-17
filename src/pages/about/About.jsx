import './about.css'
import info1 from '../../images/info1.jpg'
import info2 from '../../images/info2.jpg'
import zach from '../../images/zach.jpg'
import idk from '../../images/idk.jpg'

export default function About() {
  return (
    <div className='about'>
        <h2 className="aboutTitle">ABOUT US</h2>
        <p className="aboutInfo">The name SangguniArt stems from the word “Sanggunian” which is the Filipino word for “Reference”. We, here at SangguniArt, firmly believe that referring artists to people is one of the best ways to help Multimedia Art Freelancing grow as a community. Our goal is to help Filipino freelancers, especially the small ones, grow their network by becoming a means to gaining new connections and clients.</p>
        <img src={info1} alt="" />
        <img src={info2} alt="" />
        <h2 className="aboutTitle">THE TEAM</h2>
        <p className="aboutInfo">Jeremar Dorado and Zach Macariola are both Multimedia Arts students from De La Salle - College of Saint Benilde. They have a lot of experiences with Filipino freelancers and would like to spread the word about the people they commissioned but found difficulty in referring them. They then wondered if other people had similar struggles. Their research paper entitled "Examining the Referral System as a Recruitment Process within Filipino Freelance Digital Artists" has led them to make this website in hopes of helping with the struggles.</p>
        <div className="aboutDiv">
          <div className="aboutCreatorDiv">
            <img src={idk} alt="" />
            <br/>
            JEREMAR DORADO
          </div>
          <div className="aboutCreatorDiv">
            <img src={zach} alt="" />
            <br/>
            ZACH MACARIOLA
          </div>
        </div>
    </div>
  )
}
