import React from 'react';
import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
const CarItem = (props) => {
    return (
        
             <div>
             <Router>
             <ul>
             <Link to={`/cars/${props.id}`}>
             <li>{props.carModel}</li>
             </Link>
             </ul>
             </Router>
          </div>
        
    );
};

export default CarItem;