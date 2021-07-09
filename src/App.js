
import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import CarList from './components/CarList';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CarDetail from "./components/CarDetail";



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
    <Router>
    <div className="App">
    
  
   
    
    <Switch>
    <Route path="/joes-garage" exact render={() => <CarList  cars={cars} />} />
    <Route path="/joes-garage/cars/:id" exact render={() => <CarDetail  cars={cars} />} />

  
    </Switch>


 
    </div>
    </Router>
   
  );
}
export default App;
