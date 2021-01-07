import React, {useState, useEffect} from 'react';
import styles from './navbar.module.css';
import Applogo from '../../assets/logo.png';
import SortIcon from '@material-ui/icons/Sort';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';


 const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const [scroll, setScroll] = useState(false);
 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 50);
   });
 }, []);
    return (
        <div className= { scroll ?  styles.navbarActive  :  styles.navbar} >
             <div className={styles.logo}>
               <img src={Applogo} alt="Luxury Residences logo" />
             </div>
             <div className={styles.bar} onClick={handleClick}>
             { click ?  <CloseIcon fontSize="large" />  :  <SortIcon fontSize="large" />}
             </div>
             <div className={click ? styles.navMenuactive : styles.navMenu}>
             <ul>
            <li>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    HOME
                </Link>
            </li>
              {/*<li>
               <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                   GALLERY
                </Link>
            </li>
            <li>
                <Link to='/properties' className='nav-links' onClick={closeMobileMenu}>
                  AMENITIES
                </Link>
            </li> */}
            {/* <li>
                <Link to='/bookings' className='nav-links' onClick={closeMobileMenu}>
                  BOOKINGS
                </Link>
            </li> 
            <li>
                <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                   BOOK
                </Link>
               </li>
               */}
                <li>
                <a href="https://luxuryresidences.ng/" className='nav-links' onClick={closeMobileMenu}>
  
                   LUXURY RESIDENCES
                </a>
              </li>
            </ul>
            </div>
        </div>
    )
}
export default Navbar;