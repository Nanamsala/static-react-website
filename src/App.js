import './App.css'
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Featured from "./pages/featured/Featured";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Votria from "./pages/votria/Votria";
import John from "./pages/john/John";
import Artcis from "./pages/artcis/Artcis";
import Artists from './components/artists/Artists'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/sangguniart" element={<Home />}/>
            <Route path='/sangguniart/index.html' element={<Home/>}/>
            <Route path="sangguniart/about" element={<About />} />
            <Route path="sangguniart/contact" element={<Contact />} />
            <Route path="sangguniart/featured" element={<Featured />} />
            <Route exact path="sangguniart/artists" element={<Artists/>} />
            <Route path="sangguniart/artists/votria" element={<Votria />} />
            <Route path="sangguniart/artists/john" element={<John />} />
            <Route path="sangguniart/artists/artcis" element={<Artcis />} />
          </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
