import styles from "./search.module.css";
import Button from "../Button/Button";
import { useState } from "react";
import Searchbar from "../searchbar/searchbar";
import { useHistory, Link } from "react-router-dom";


function Card({ img, text }) {
  return (
    <>
      <div className={styles.innercard}>
        <img src={img} alt={`${text}_image`} />
        <p>{text}</p>
      </div>
    </>
  );
}
export default function Search() {
    const history  = useHistory()
  const [cardsName, setcardsName] = useState([
    "Doctors",
    "Labs",
    "Hospitals",
    "Medical Stores",
    "Ambulance",
  ]);
 
  const centerreq=()=>{
    let [city,state]=[localStorage.getItem('city'),localStorage.getItem('state')]
    if(city&&state){

      history.push('/centers')
    }
  }

  return (
    <div>
      <div className={styles.Searchboxes}>
        < Searchbar  />
        <div className={styles.buttondiv} onClick={centerreq}>
          <Button text="Search" color="blue" />
        </div>
      </div>
      <div className={styles.looking}>
        <p className={styles.lookinghead}>You may looking for</p>
        <div className={styles.buttscard}>
          {cardsName.map((e, i) => {
            return (
              <div key={i}>
                <Card text={e} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
