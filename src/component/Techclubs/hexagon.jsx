import React from 'react';
import { motion } from 'framer-motion';
import styles from "./techclubs.module.css";

const Hexagon = ({ name, imageUrl, onClick, animate }) => {
    // Animation variants
    const variants = {
        initial: { rotateY: 0 },
        animate: { rotateY: 90 }
    };

    return (
        <motion.div 
            className={styles.techClubsArticle}
            onClick={onClick}
            variants={variants}
            animate={animate ? "animate" : "initial"}
            transition={{ duration: 0.3 }}
        >
            <img src={imageUrl} alt={name} className={styles.techClubsImg}/>
            <div className={styles.techclubname}>{name}</div>
        </motion.div>
    );
};

export default Hexagon;
