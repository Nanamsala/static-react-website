import './singleArtist.css'
import artistImage from '../../images/primalhunter.jpg'
import work1 from '../../images/vot1.jpg'
import work2 from '../../images/vot2.jpg'
import work3 from '../../images/vot3.jpg'

export default function SingleArtist() {
  return (
    <div className='singleArtist'>
        <div className="singleArtistWrapper">
            <img 
                className='singleArtistImg'
                src={artistImage} 
                alt="" 
            />
            <h1 className="singleArtistName">Primal Hunter</h1>
            <div className="singleArtistInfo">
                Votria is a 23-year-old student of Multimedia Arts. She is skilled in graphic design and illustration. She began freelancing while she was a senior in high school in 2017, and her first clients came through referrals.
            </div>
            <div className="singleArtistWorkTitle">
                VOTRIA WORKS
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
        </div>
    </div>
  )
}
