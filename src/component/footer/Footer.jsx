import styles from './Footer.module.css'
import Socialshandle from '../Socials/Socials'
import Download from '../Download/Download';

export default function Footer(){
    return (
        <div className={styles.footercont}>
            <Download />
            <Socialshandle />
        </div>
    )
}