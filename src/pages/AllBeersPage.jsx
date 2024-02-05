import Navbar from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const API_URL = "https://ih-beers-api2.herokuapp.com";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchBeers();
  }, [searchQuery]); 

  const fetchBeers = () => {
    axios.get(`${API_URL}/beers/search?q=${searchQuery}`)
      .then((response) => {
        setBeers(response.data);
      })
      .catch(error => {
        console.error("Error fetching beers:", error);
      });
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <Navbar />
      <div>
        <input
          type="text"
          placeholder="Search for beers..."
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="search-bar"
        />
        {beers.map((beer) => (
          <div key={beer._id}>
            <Link to={"/beers/" + beer._id}>
              <div className="beer-card">
                <img
                  src={beer.image_url}
                  style={{ height: "200px" }}
                  alt={beer.name}
                />
                <ul>
                  <li>
                    <h1>{beer.name}</h1>
                  </li>
                  <li>
                    <h2>{beer.tagline}</h2>
                  </li>
                  <li>
                    <p>
                      <b>Created by:</b> {beer.contributed_by}
                    </p>
                  </li>
                </ul>
              </div>
            </Link>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}

export default AllBeersPage;
