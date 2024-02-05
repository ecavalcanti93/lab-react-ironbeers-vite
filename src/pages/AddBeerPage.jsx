import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const API_URL = "https:ih-beers-api2.herokuapp.com/beers/";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_Brewed] = useState("");
  const [brewers_tips, setBrewers_Tips] = useState("");
  const [attenuation_level, setAttenuation_Level] = useState(0);
  const [contributed_by, setContributed_By] = useState("");

  const navigate = useNavigate();

     const handleName = (e) => setName(e.target.value);
     const handleTagline = (e) => setTagline(e.target.value);
     const handleDescription = (e) => setDescription(e.target.value);
     const handleFirst_Brewed = (e) => setFirst_Brewed(e.target.value);
     const handleBrewers_Tips = (e) => setBrewers_Tips(e.target.value);
     const handleAttenuation_Level = (e) => setAttenuation_Level(e.target.value);
     const handleContributed_By = (e) => setContributed_By(e.target.value);
     
     
     const handleSubmit = (e) => {
       e.preventDefault();
       const newBeer = {
         name,
         tagline,
         description,
         first_brewed,
         brewers_tips,
         attenuation_level,
         contributed_by,
        };

        axios
        .post(`${API_URL}/new`, newBeer)
        .then(() => {
          setName("");
          setTagline("");
          setDescription("");
          setFirst_Brewed("");
          setBrewers_Tips("");
          setAttenuation_Level(0);
          setContributed_By("");
  
          navigate("/");
        })
        .catch((err) => {
          console.error("Error:", err);
        });
    };
 
  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Beer Name"
          onChange={handleName}
          value={name}
          className="form-style"
        ></input>
        <label>Tagline</label>
        <input
          type="text"
          name="tagline"
          placeholder="Add a tagline"
          onChange={handleTagline}
          value={tagline}
          className="form-style"
        ></input>
        <label>Description</label>
        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={handleDescription}
          value={description}
          className="form-style"
        ></input>
        <label>First Brewed</label>
        <input
          type="text"
          name="first_brewed"
          onChange={handleFirst_Brewed}
          value={first_brewed}
          className="form-style"
        ></input>
        <label>Brewers Tips</label>
        <input
          type="text"
          name="brewers_tips"
          onChange={handleBrewers_Tips}
          value={brewers_tips}
          className="form-style"
        ></input>
        <label>Attenuation Level</label>
        <input
          type="number"
          name="attenuation_level"
          onChange={handleAttenuation_Level}
          value={attenuation_level}
          className="form-style"
        ></input>
        <label>Contributed By</label>
        <input
          type="text"
          name="contributed_by"
          placeholder="Your Name"
          onChange={handleContributed_By}
          value={contributed_by}
          className="form-style"
        ></input>
        <button type="submit">Add Beer</button>{" "}
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>
      </form>
    </>
  );
}

export default AddBeerPage;
