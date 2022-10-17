import Artists from '../../components/artists/Artists'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'

export default function Home() {
  return (
    <>
      <Header/>
      <div className='home'>
        <Artists/>
        <Sidebar/>
      </div>
    </>
  )
}
