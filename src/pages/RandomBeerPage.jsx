import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers/";

function RandomBeersPage() {
    const [randomBeer, setRandomBeer] = useState([]);
  
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API_URL}/random`).then((response) => {
          setRandomBeer(response.data);
        });
      }, []);

      return (
        <>
          <Navbar />
          <div className="beer-card">
          <img src={randomBeer.image_url}  width="20%" height="20%"/>
        <ul>
          <li><h1>{randomBeer.name}</h1></li>
          <li><h2>{randomBeer.tagline}</h2></li>
          <li><h3>{randomBeer.first_brewed}</h3></li>
          <li><p><b>Attenuation level:</b> {randomBeer.attenuation_level}</p></li>
          <li><p><b>Description:</b> {randomBeer.description}</p></li>
          <li><p><b>Created by:</b> {randomBeer.contributed_by}</p></li>
          <li><button onClick={() => {
            navigate(-1)}
            }>
          Back</button></li>
          </ul>
          </div>
        </>
      );
    }

export default RandomBeersPage;
