import styles from './Download.module.css';
import Down_img from '../../assest/Download.png'

function Download(){
    return(
        <div className={styles.down_cont}>
            <img src={Down_img} alt="Download the img"  />
        </div>
    )
}
export default Download;