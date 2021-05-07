import React from "react"
// react component for creating beautiful carousel
import Carousel from "react-slick"
// material-ui components
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn"
// core components
import GridContainer from "../Grid/GridContainer.jsx"
import GridItem from "../Grid/GridItem.jsx"
import Card from "../Card/Card.jsx"

import image1 from "assets/img/carousel1.jpg"
import image2 from "assets/img/carousel2.jpg"
import image3 from "assets/img/carousel3.jpg"
import image4 from "assets/img/carousel4.jpg"
import image5 from "assets/img/carousel5.jpg"
import image6 from "assets/img/carousel6.jpg"

export default function SectionCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <Carousel {...settings}>
            <div>
              <img src={image1} alt="First slide" className="slick-image" />
            </div>
            <div>
              <img src={image2} alt="Second slide" className="slick-image" />
            </div>
            <div>
              <img src={image3} alt="Third slide" className="slick-image" />
            </div>
            <div>
              <img src={image4} alt="Fourth slide" className="slick-image" />
            </div>
            <div>
              <img src={image5} alt="Fifth slide" className="slick-image" />
            </div>
            <div>
              <img src={image6} alt="Sixt slide" className="slick-image" />
            </div>
          </Carousel>
        </Card>
      </GridItem>
    </GridContainer>
  )
}
