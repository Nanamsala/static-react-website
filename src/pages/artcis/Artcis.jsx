import '../../components/single.css'
import Sidebar from '../../components/sidebar/Sidebar'
import artistImage from '../../images/artpic.jpg'
import work1 from '../../images/art1.jpg'
import work2 from '../../images/art2.jpg'
import work3 from '../../images/art3.jpg'
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
              <h1 className="singleArtistName">ARTCIS</h1>
              <div className="singleArtistInfo">
              Artcis is a 23-year-old college student. Before
becoming a digital artist, he worked on traditional arts commissions wherein he would draw
on paper and watercolor painting. He first learned how to make Digital Art back when he was
in Senior Highschool.
              </div>
              <div className="singleArtistWorkTitle">
                  ARTCIS' WORKS
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
