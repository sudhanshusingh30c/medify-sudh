import Button from '../Button/Button'
import styles from './Hero.module.css';
import heroimg from '../../assest/hero_image.png'
import Offers from '../offers/offer';
import Search from '../searchsession/search';
export default function Hero(){
return(
    <>
    <div className={styles.herocontainer}>
        <div className={styles.bigcontainer}>

        <div style={{width:'50%'}}>
            
            <h2><b>Medical <span>Centers</span></b></h2>
            <p>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</p>
            <Button text='Find Centers' color='blue'/>
        </div>
        <div className={styles.doctimg}>
        <img src={heroimg} alt="Doctors"  />
        </div>
        </div>
        <div className={styles.smallwrapper}>
        <Search />
        </div>
    </div>
        <Offers />
    </>
)
}