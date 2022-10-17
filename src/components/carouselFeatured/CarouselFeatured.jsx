import './carouselFeatured.css'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

const images1 = require("../../images/featuredimages/1.JPG");
const images2 = require("../../images/featuredimages/2.jpg");
const images3 = require("../../images/featuredimages/3.jpg");
const images4 = require("../../images/featuredimages/4.jpg");
const images5 = require("../../images/featuredimages/5.jpg");
const images6 = require("../../images/featuredimages/6.jpg");
const images7 = require("../../images/featuredimages/7.JPG");
const images8 = require("../../images/featuredimages/8.JPG");
const images9 = require("../../images/featuredimages/9.jpg");
const images10 = require("../../images/featuredimages/10.jpg");
const images11 = require("../../images/featuredimages/11.jpg");
const images12 = require("../../images/featuredimages/12.jpg");

export default function CarouselFeatured() {
  return (
    <Carousel infiniteLoop autoPlay className='carousel'>
    <div className='carouselImage'>
        <img src={images1} alt="mobile"/>
    </div>
    <div className='carouselImage'>
        <img src={images2} alt="mobile"/>
    </div>
    <div className='carouselImage'>
        <img src={images3} alt="mobile"/>
    </div>
    <div className='carouselImage'>
        <img src={images4} alt="mobile"/>
    </div>
    <div className='carouselImage'>
        <img src={images5} alt="mobile"/>
    </div>
    <div className='carouselImage'>
        <img src={images6} alt="mobile"/>
    </div>
    <div className='carouselImage'>
        <img src={images7} alt="mobile"/>
    </div>
    <div className='carouselImage'>
        <img src={images8} alt="mobile"/>
    </div>
    <div className='carouselImage'>
        <img src={images9} alt="mobile"/>
    </div>
    <div className='carouselImage'>
        <img src={images10} alt="mobile"/>
    </div>
    <div className='carouselImage'>
        <img src={images11} alt="mobile"/>
    </div>
    <div className='carouselImage'>
        <img src={images12} alt="mobile"/>
    </div>
  </Carousel>
  )
}
