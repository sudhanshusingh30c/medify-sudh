import { useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from "./cards.module.css";
import axios from "axios";

function Cards() {
  const [centers, setCenters] = useState([]);
  const [city, setCity] = useState(localStorage.getItem("city"));
  const [state, setState] = useState(localStorage.getItem("state"));
  

  const fetchcardrenderdata = async () => {
    let url = `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`;
    try {
      let res = await axios.get(url);
      let data = res.data;
      localStorage.setItem('count',data.length)
      setCenters(data);
      console.log(data)
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchcardrenderdata();
  }, [city, state]);

  return (
    <div className={styles.cardwrapper}>
      <div className={styles.container}>
        
          <div className="img">
            <img src="" alt="img" />
          </div>
          <div className={styles.info}>
            <h3>Fortis Hospital Richmond Road</h3>
            <p>
              <b>Banglore</b>
            </p>
            <p>Smilence center</p>
            <p>
              <b>Free</b>
              <span>500</span>
              <span>Consaltant fee in clinic</span>
            </p>
            <hr />
            <span>Rating</span>
          </div>
          <div className="availabitity">
            <p>Availability Today</p>
            <div>
              <Button text="Book free center Today" color="blue" />
            </div>
          </div>
        </div>
       
        {centers.map((ele, ind) => {
          return (
            <div key={ind} className={styles.container}>
              <div className="img" style={{width:'10%'}}>
                <img src="" alt="img" />
              </div>
              <div className={styles.info} style={{width:'60%'}}>
                <h3>{ele['Hospital Name']}</h3>
                <p>
                  <b>{ele['State']}</b>
                </p>
                <p>Smilence center</p>
                <p>
                  <b style={{color:'lightblue'}}>Free</b>
                  <span style={{textDecoration:'line-through'}}>500</span>
                  <span>Consaltant fee in clinic</span>
                </p>
                <hr />
                <span>Rating:{ele['Hospital overall rating']}</span>
              </div>
              <div className="availabitity" style={{width:'30%%'}}>
                <p>Availability Today</p>
                <div>
                  <Button text="Book free center Today" color="blue" />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
export default Cards;
