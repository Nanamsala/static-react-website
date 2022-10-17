import './featured.css'
import featuredArtistImage from '../../images/featuredartistfull.jpg'
import CarouselFeatured from '../../components/carouselFeatured/CarouselFeatured'
import FacebookPlugin from '../../components/FacebookPlugin'

export default function Featured() {
  return (
    <div className='featured'>
        <div className="featuredArtistWrapper">
            <img 
                className='featuredArtistImg'
                src={featuredArtistImage} 
                alt="" 
            />
            <h1 className="featuredArtistName">CHRISTOFER ALLEN VENTURA</h1>
            <div className="featuredArtistInfo">
            Christofer Allen Ventura or Allen currently pursues Multimedia Arts in De La Salle - College of Saint Benilde and works as a freelance digital artist. He specializes in Photography, Videography, and Graphic Design. He creates and designs collateral materials for companies and businesses. He also covers video and photography in different events like reunions, birthdays, art exhibits, and more. His greatest achievement, so-far is that he was the provider of photo references for an art exhibit by Ronald Ventura titled “Epidermic: All is Skin” in Secret Fresh held on December 2021. He also provides photo/digital arts references for Art NFTs in collaboration with Big Boy Cheng which is expected to come out mid-year.
            </div>
            <span className='featuredArtistTitle'>EXPERIENCES</span>
            <ul className='featuredArtistList'>
                <li className='featuredArtistListItem'><i class="fa-solid fa-laptop-code" style={{color:"#b58b68"}}></i> Web Developer</li>
                <li className='featuredArtistListItem'><i class="fa-solid fa-window-maximize" style={{color:"#b58b68"}}></i> Web Designer</li>
                <li className='featuredArtistListItem'><i class="fa-solid fa-chess-knight" style={{color:"#b58b68"}}></i> Branding</li>
                <li className='featuredArtistListItem'><i class="fa-solid fa-box" style={{color:"#b58b68"}}></i> Logo Designer</li>
                <li className='featuredArtistListItem'><i class="fa-solid fa-chalkboard" style={{color:"#b58b68"}}></i> Illustrator</li>
                <li className='featuredArtistListItem'><i class="fa-solid fa-chalkboard" style={{color:"#b58b68"}}></i> Gadget Operator</li>
                <li className='featuredArtistListItem'><i class="fa-solid fa-photo-film" style={{color:"#b58b68"}}></i> Videographer</li>
                <li className='featuredArtistListItem'><i class="fa-solid fa-camera-retro" style={{color:"#b58b68"}}></i> Photographer</li>
            </ul>
            <div className="featuredArtistTitle">
                FEATURED WORKS
            </div>
            <iframe src="https://www.youtube.com/embed/2wV1Ejf9pXI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className="featuredArtistTitle">
                ART SHOWCASE
            </div>  
            <div className="featuredArtistInfo">
                Christofer Ventura uses the concept of “glitch” in his artworks and what’s unique about his style is that he purposely creates mistakes in his layouts and color glitches. His style was influenced by his father, Olan Ventura, who happens to be a known artist here in the Philippines and has created unique types of glitch layouts for his artworks. In photography, he focuses on the mood/vibes that the environment gives and likes to capture the emotions of his subjects.
            </div>
            <CarouselFeatured></CarouselFeatured>
            <FacebookPlugin/>
        </div>
    </div>
  )
}