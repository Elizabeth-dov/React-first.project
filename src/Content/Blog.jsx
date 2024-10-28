import React from "react";
import blogPhoto from "../../public/blogphoto.jpg"
import styles from "./BlogContent.module.css"
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import MoreAboutBlog from "./MoreAboutBlog";


export default function Blog () {
  return (
    <>
    <Container>
   <section className={styles.blog}>
    <ul className={styles.blog__content}>
    <li>
    <img src={blogPhoto} alt="" />
   
    </li>
    <li>
    <h1>
Alise Kowai – A Passionate Photographer</h1>
    <p>
    I've always been fascinated by the art of capturing moments that often go unnoticed in our daily lives. With a camera in hand, I feel like I can freeze time and reveal the beauty in the simplest of instances. My journey with photography began in my youth when I first looked at the world through the lens of an analog camera. Today, after years of learning, experience, and hundreds of photo sessions, photography is not just my profession, but a way of expressing emotions and telling stories.
</p>
<p>
I specialize in portrait, reportage, and wedding photography. I love to tell people's stories – full of authenticity, emotion, and unique moments. In my work, I value naturalness and spontaneity, which allows the images to reflect the true character of my clients. I always strive to establish a personal connection so that everyone feels comfortable in front of the camera, resulting in warm and honest photographs.

My inspiration comes from travel, meeting new people, and their stories. I'm captivated by the diversity of places, cultures, and emotions that can be captured through photography. In every project I take on, I aim to find something unique that adds a personal touch to the images.
</p>
<Link to="/moreAboutBlog">
<Button className={styles.button}>More about me</Button>
</Link>
    </li>
    </ul>
   </section>
   </Container>
    </>
  )
}