import React from 'react'
import styles from  './styles.module.css';
import { Link } from 'react-router-dom';

export const Hero = () => {
    return (
        <div className={styles.hero}>
              <div className={styles.heroContent}>
                  <h1>Modern New Apartment In Residentinal Complex</h1>
            {/* <p>Modern New Apartment In Residentioal Complex</p> */}
            <Link to="/">Book An Appointment</Link>
            </div>
        </div>
    )
}
export default Hero;