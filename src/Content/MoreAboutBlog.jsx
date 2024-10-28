
import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import MoreAboutContent from "./MoreAboutContent";
import { photosMore } from "../data.js"; 
import styles from "./MoreAbout.module.css"

export default function MoreAboutBlog() {
    return (
        <Container>
            <ul className={styles.moreAbout}>
                {photosMore.map(photo => (
                    <li key={photo.id}>
                        <Link to="#">
                            <MoreAboutContent {...photo} />
                        </Link>
                    </li>
                ))}
            </ul>
        </Container>
    );
}

