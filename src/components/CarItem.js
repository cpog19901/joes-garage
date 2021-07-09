import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const CarItem = (props) => {

const [linkValue, setLinkValue] = useState("");   



    
    return (
        
             <div>
            
             <ul>
             <Link to={`/${props.id}`}>

             <li value={props.vim}> {props.carModel}</li>
    
             </Link>
             </ul>
            
          </div>
        
    );
};

export default CarItem;