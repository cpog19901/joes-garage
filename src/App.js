
import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";



function App() {

  const [cars, setCars] = useState([]);
//fetch API data

  useEffect(()=>{
    axios.get("https://react-challenge-api.azurewebsites.net/vehicles")
    .then(response => {
      console.log(response.data);
      setCars(response.data);
      console.log(cars)
      
    })
    .catch(error =>{
      console.log(error);
    })
  }, [])
  
  
  return (
    <div className="App">
      {}
    </div>
  );
}
export default App;
