
import React from 'react';
import Slider from "react-slick"
import { photos } from '../data';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./Portfolio.module.css"
import PorfolioSecond from './PortfolioSecond';
import { Container } from 'react-bootstrap';
import PortfolioText from './PortfolioText';
import { Button } from 'react-bootstrap';


export default function Porfolio ()  {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <Container>
<section className={styles.portfolio}>
  <h1>Gallery</h1>
    <Slider {...settings}>
      {photos.map((photo) => (
        <div key={photo.id}>
          <img src={photo.url} alt={`Slide ${photo.id}`} />
        </div>
      ))}
    </Slider>
    <PortfolioText />
    <PorfolioSecond />
    <Button
style={{ position: 'relative', top: '98px' }}>Show More</Button>
    </section>
    </Container>
  );
}
 
   


