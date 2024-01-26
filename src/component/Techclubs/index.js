import React, { useState, useEffect } from 'react';
import Hexagon from './hexagon';
import styles from "./techclubs.module.css";
import clubData from './club_member_data.json'; 

const HexGrid = () => {
    const [hexagons, setHexagons] = useState([]);
    const [displayInitialData, setDisplayInitialData] = useState(true);

    useEffect(() => {
        setHexagons(clubData.initialData); // Set initial data
    }, []);

    const handleClick = (clubName) => {
        if (displayInitialData) {
            const newHexagons = clubData[clubName];

            if (Array.isArray(newHexagons)) {
                setHexagons(newHexagons);
                setDisplayInitialData(false); // Switch to club data view
            } else {
                console.error("index.js:24 Data for club not found or not an array:", clubName);
                setHexagons(clubData.initialData); // Reset to initial data
                setDisplayInitialData(true); // Keep in initial data view
            }
        } else {
            setHexagons(clubData.initialData); // Reset to initial data
            setDisplayInitialData(true); // Switch to initial data
        }
    };

    return (
        <div className={styles.techClubsApp} onClick={() => setDisplayInitialData(true)}>
            <h1 className={styles.techClubsTitle}>Technical Clubs</h1>
            <section className={styles.techClubsSection}>
                {hexagons.map((hexagon, index) => (
                    <Hexagon key={index} {...hexagon} onClick={() => handleClick(hexagon.name)} />
                ))}
            </section>
        </div>
    );
};

export default HexGrid;
