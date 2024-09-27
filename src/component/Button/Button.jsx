import Styles from './Button.module.css'
export default function Button({text,color}){
    return(

<button className={color==='blue'?Styles.bluebutt:Styles.whitebutt} type="button">{text}</button>
    )
}