
import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";


import CarList from './components/CarList';



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
    <CarList
    
      cars ={cars}
    />
 
    </div>
    
   
  );
}
export default App;
