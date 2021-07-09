import React from 'react';
import { Link } from 'react-router-dom';

const CarItem = (props) => {



    
    return (
        
             <div>
            
             <ul>
             <Link to={`/${props.id}`}>
             <li>{props.carModel}</li>
             </Link>
             </ul>
            
          </div>
        
    );
};

export default CarItem;