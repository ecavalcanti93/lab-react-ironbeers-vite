import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers/";

function BeerDetailsPage() {
  const [detailedBeer, setDetailedBeer] = useState([]);

  const { beerId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(API_URL + beerId).then((response) => {
      setDetailedBeer(response.data);
    });
  });

  return (
    <>
      <Navbar />
      <div className="beer-card">
      <img src={detailedBeer.image_url}  width="20%" height="20%"/>
    <ul>
      <li><h1>{detailedBeer.name}</h1></li>
      <li><h2>{detailedBeer.tagline}</h2></li>
      <li><h3>{detailedBeer.first_brewed}</h3></li>
      <li><p><b>Attenuation level:</b> {detailedBeer.attenuation_level}</p></li>
      <li><p><b>Description:</b> {detailedBeer.description}</p></li>
      <li><p><b>Created by:</b> {detailedBeer.contributed_by}</p></li>
      <li><button onClick={() => {
        navigate(-1)}
        }>
      Back</button></li>
      </ul>
      </div>
    </>
  );
}

export default BeerDetailsPage;
