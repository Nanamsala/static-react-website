import '../../components/single.css'
import FacebookPlugin from '../../components/FacebookPlugin'
import Sidebar from '../../components/sidebar/Sidebar'
import artistImage from '../../images/votpic.jpg'
import work1 from '../../images/vot1.jpg'
import work2 from '../../images/vot2.jpg'
import work3 from '../../images/vot3.jpg'

export default function Single() {
    
  return (
    <div className='single'>
      <div className='singleArtist'>
        <div className="singleArtistWrapper">
              <img 
                  className='singleArtistImg'
                  src={artistImage} 
                  alt="" 
              />
              <h1 className="singleArtistName">Votria</h1>
              <div className="singleArtistInfo">
                  Votria is a 23-year-old student of Multimedia Arts. She is skilled in graphic design and illustration. She began freelancing while she was a senior in high school in 2017, and her first clients came through referrals.
              </div>
              <div className="singleArtistWorkTitle">
                  VOTRIA'S WORKS
              </div>
              <div className="singleArtistWorks">
                  <img 
                      className='singleArtistWork'
                      src={work1} 
                      alt="" 
                  />
                  <img 
                      className='singleArtistWork'
                      src={work2} 
                      alt="" 
                  />
                  <img 
                      className='singleArtistWork'
                      src={work3} 
                      alt="" 
                  />
              </div>
              <FacebookPlugin/>
          </div>
      </div>
        <Sidebar/>
    </div>
  )
}
