import React from "react";
import { photoss } from "../data";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "./Portfolio.module.css"

export default function PorfolioSecond () {
  
    const renderPhotoRow = () => (
        <Row className="g-3">
          {photoss.map((photo) => (
            <Col className="g-5" key={photo.id}>
              <img  
                src={photo.url} 
                alt={`Photo ${photo.id}`} 
                style={{ width: "100%", height: "auto" }} 
                className={styles.zoom_photo}
              />
            </Col>
          ))}
        </Row>
      );
    
      return (
        <>
          {renderPhotoRow()}
          {renderPhotoRow()}
          {renderPhotoRow()}
        </>
      );
    }