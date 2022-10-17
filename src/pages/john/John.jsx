import '../../components/single.css'
import Sidebar from '../../components/sidebar/Sidebar'
import artistImage from '../../images/johnpic.jpg'
import work1 from '../../images/john1.jpg'
import work2 from '../../images/john2.JPG'
import work3 from '../../images/john3.jpg'
import FacebookPlugin from '../../components/FacebookPlugin'


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
              <h1 className="singleArtistName">John Sarmiento</h1>
              <div className="singleArtistInfo">
              John is a 22-year-old Information Systems
student who enjoys photography. He also works as a photographer for Malate Literary Folio
and as the creative director for DLSU's official radio station Green Giant FM.
              </div>
              <div className="singleArtistWorkTitle">
                  JOHN'S WORKS
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
