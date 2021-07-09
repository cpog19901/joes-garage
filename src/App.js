
import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";



function App() {

  const [cars, setCars] = useState([]);
//fetch API data

  useEffect(()=>{
    axios.get("https://react-challenge-api.azurewebsites.net/vehicles")
    .then(response => {
     
      setCars(response.data);
    
      
    })
    .catch(error =>{
      console.log(error);
    })
  }, [])
  
  
  return (
    <div className="App">
    <h1>See all of our cars!</h1>
      {cars.map((car)=>{
        return(
          <div>
          <a key={car.id} id={car.id} href={car.model_variant}>{car.model_variant}</a>
          </div>
        )
      })}
    </div>
  );
}
export default App;
