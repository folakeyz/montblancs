import React from 'react';
import styles from  './styles.module.css';
import Applogo from '../../assets/logo.png';
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
      <div className={styles.containers}>
            <div className={styles.grid}>
            <div className={styles.card}>
              <img src={Applogo}  alt="Logo"/>
            {/* <h1>Luxury Residences</h1> */}
            <p>Montblanc is the highest height in europe, it is our determination to exceed expectations</p>
            </div>

            <div className={styles.card}>
          <h1>Contact</h1>
          <ul>
              <li>+234 700 222 8888</li>
              <li>contact@luxuryresidences.ng</li>
          </ul>
            </div>

            <div className={styles.card}>
            <h1>Our Properties</h1>
            <ul>
              <li><a href="https://glenn.luxuryresidences.ng/">The Glenn Residence</a></li>
              <li><a href="https://montblancs.luxuryresidences.ng/">Mont Blanc Flats</a></li>
              <li><a href="https://viagem.luxuryresidences.ng/">Viagem Terraces</a></li>
          </ul>
            </div>

            
            <div className={styles.card}>
            <h1>Quick Links</h1>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><a href="https://luxuryresidences.ng/">Luxury Residences</a></li>
  
          </ul>
            </div>
    </div>
    <hr />
    <p>Copyright &copy; 2020 All Rights Reserved Luxury Residences</p>
    </div>
  );
}
export default Footer;