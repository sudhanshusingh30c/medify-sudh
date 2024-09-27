import styles from './cards.module.css'

export default function SmallCard(){
    return(
        <div className={styles.smallcardwrapper} >
            <h5>This World Oral heath Day</h5>
            <h3 >Get a FREE Appointment with a top Dentist</h3>
            <p>Limited Period offer</p>
            <i>#BeSensitiveToOralHealth</i>
            <p>Term and contition applied</p>
        </div>
    )
}