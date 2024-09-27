import styles from './offer.module.css';
import offer1 from '../../assest/offer1.png'
import offer2 from '../../assest/offer2.png'
import offer3 from '../../assest/offer3.png'
export default function Offers(){
    return (
        <div className={styles.offercontainer}>
            <img src={offer1} alt="offer1" />
            <img src={offer2} alt="Coupon2" />
            <img src={offer3} alt="Coupon3" />
        </div>
    )
}