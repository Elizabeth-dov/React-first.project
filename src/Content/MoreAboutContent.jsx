
import React from "react";
import styles from "./MoreAbout.module.css";

export default function MoreAboutContent({ url, title, description }) {
    return (
        <>
            <img className={styles.images} src={url} alt={title} />
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
        </>
    );
}
