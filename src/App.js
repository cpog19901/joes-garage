
import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import CarItem from './components/CarItem';



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
          <CarItem
            key={car.id}
            carModel= {car.model_variant}
          />
        )
      })}
    </div>
  );
}
export default App;
