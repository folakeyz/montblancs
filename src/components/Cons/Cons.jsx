import React from 'react'
import styles from  './styles.module.css';
import { Link } from 'react-router-dom';
import image from '../../assets/1.png';
import BathtubIcon from '@material-ui/icons/Bathtub';
import KingBedIcon from '@material-ui/icons/KingBed';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import KitchenIcon from '@material-ui/icons/Kitchen';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
export const Cons = () => {
    return (
        <div className={styles.container}>
              <div className={styles.grid}>
              <div className={styles.card}>
                <h3>MontBlancs Flats</h3>
                <p>Montblanc is the highest height in europe, it is our determination to exceed expectations</p>
                <p>MontBlancs Flats serviced amenities are curated for entertainment, productivity, and wellness.</p>
                <Link to="/" className={styles.btns}>View Amenities</Link>
                 </div>
                 <div className={styles.card}>
                 <div className={styles.grids}>
                 <div className={styles.cards}>
                 
                 <p>Bedroom</p>
                 <KingBedIcon fontSize="large" />
                 </div>
                 <div className={styles.cards}>
                 
                 <p>Bathroom</p>
                 <BathtubIcon fontSize="large" />
                 </div>
                 <div className={styles.cards}>
                 
                 <p>Kitchen</p>
                 <KitchenIcon  fontSize="large"/>
                 </div>
                 <div className={styles.cards}>
                 
                 <p>Garage</p>
                 <DriveEtaIcon  fontSize="large"/>
                 </div>
                 <div className={styles.cards}>
                 
                 <p>Elevator</p>
                 <AccessibilityIcon fontSize="large" />
                 </div>
                 <div className={styles.cards}>
                 
                 <p>Gym</p>
                 <FitnessCenterIcon fontSize="large" />
                 </div>
                 </div>
                 </div>
            </div>
        </div>
    )
}
export default Cons;