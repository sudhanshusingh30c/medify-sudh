import Button from '../Button/Button'
import styles from './Navbar.module.css'
import logo from '../../assest/logo.png';
import { useHistory, Link } from "react-router-dom";

export default function Navbar(){
    const history=useHistory()
    return (
        <div className={styles.navbox}>
            <div className={styles.logo}>
                <img style={{height:'27px'}} src={logo} alt="Logo" />
            </div>
            <div className={styles.element}>
            <ul>
               <li>Find Doctors</li> 
                <li>Hospitals</li>
                <li>Medicines</li>
                <li>Surgeries</li>
                <li>Software for Provider</li>
                <li>Facilites</li>
                <Button text={'My Booking'} color={'blue'} />
            </ul>
            </div>
        </div>
    )
}