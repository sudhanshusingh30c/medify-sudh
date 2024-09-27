import styles from './Social.module.css';
import Socials from '../../assest/Social.png';

export default function Socialshandle(){
    return(
        <div className={styles.handles}>
            <img src={Socials} alt="Socials image" />
        </div>
    )
}