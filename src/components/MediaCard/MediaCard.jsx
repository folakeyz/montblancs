import React from 'react'
import styles from  './styles.module.css';
import { Link } from 'react-router-dom';
import img from '../../assets/1.png';

export const MediaCard = () => {
    return (
        <div className={styles.container}>
              <div className={styles.grid}>
              <div className={styles.card}>
                <img src={img} alt="MontBlancs" />
                 </div>
                 <div className={styles.card}>
                <h2>Become an Owner Today</h2>
                <ul>
                    <li>
                    Schedule an Appointment with our Agents Online
                    </li>
                    <li>
                    Evaluate Property
                    </li>
                    <li>
                   Close the Deal
                    </li>
                    <li>
                  Have your Property
                    </li>
                   </ul>
                   <br />
                <Link to="/" className={styles.btns}>BOOK AN APPOINTMENT</Link>
                </div>
                 </div>
            </div>

    )
}
export default MediaCard;