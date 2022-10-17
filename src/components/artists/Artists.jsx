import ArtistJohn from '../artistJohn/Artist'
import ArtistVot from '../artistVot/Artist'
import ArtistArt from '../artistArt/Artist'
import ArtistChris from '../artistChris/ArtistChris'
import './artists.css'

export default function Artists() {
  return (
    <div className='artists'>
        <ArtistVot/>
        <ArtistJohn/>
        <ArtistArt/>
        <ArtistChris/>
    </div>
  )
}
