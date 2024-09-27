import { useEffect, useState } from "react";
import axios from "axios";
import styles from './searchbar.module.css';



export default function Searchbar(){
 
    const [states, setStates] = useState([]);
    const [city, setCity] = useState([]);
    const [formdata, setFormdata] = useState({
        state: "",
        city: "",
      });
  
    const fetchstates = async () => {
      let url = "https://meddata-backend.onrender.com/states";
      try {
        let res = await axios.get(url);
        let data = res.data;
        setStates(data);
      } catch (e) {
        // setStates(["Error occur"]);
        console.log(e);
      }
    };
    const fetchCity = async (statename) => {
      let url = `https://meddata-backend.onrender.com/cities/${statename}`;
      try {
        let res = await axios.get(url);
        let data = res.data;
        setCity(data);
      } catch (e) {
        // setCity(["Error occur"]);
        console.log(e);
      }
    };
  
    useEffect(() => {
      fetchstates();
    }, []);
    const handleState = (e) => {
      const name = e.target.name;
      fetchCity(e.target.value);
      setFormdata((prev) => ({ ...prev, [name]: e.target.value }));
    };
    const handleCity = (e) => {
      const name = e.target.name;
      setFormdata((prev) => ({ ...prev, [name]: e.target.value }));

      if(e.target.value &&formdata.state){
        localStorage.setItem('city',e.target.value)
        localStorage.setItem('state',formdata.state)
      }
    };
  return(
    <div className={styles.searches}>
          <select
            name="state"
            style={{ width: "18%", padding: "10px", fontSize: "19px" }}
            onChange={handleState}
            value={formdata.state}
            required
          >
            <option value="" disabled>
              State
            </option>
            {states.map((data, ind) => {
              return (
                <option key={ind} value={data}>
                  {data}
                </option>
              );
            })}
          </select>

          <select
            name="city"
            style={{ width: "20%", padding: "10px", fontSize: "19px" }}
            onChange={handleCity}
            value={formdata.city}
            required
          >
            <option value="" disabled>
              City
            </option>
            {city.map((data, ind) => {
              return (
                <option key={ind} value={data}>
                  {data}
                </option>
              );
            })}
          </select>
        </div>
  )
}