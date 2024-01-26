import React from 'react';
import styles from "./techclubs.module.css";

const Hexagon = ({ name, description, imageUrl, onClick }) => {
    return (
        <div className={styles.techClubsArticle} onClick={() => onClick(name)}>
            <img src={imageUrl} alt={name} className={styles.techClubsImg}/>
            <div className={styles.techclubname}>{name}</div>
        </div>
    );
};

export default Hexagon;
