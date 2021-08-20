import React from 'react';
import { Link } from 'react-router-dom';
import { Card, makeStyles, Container, Button  } from "@material-ui/core";

const CarItem = (props) => {

   


    const useStyles= makeStyles({
        btn: {
            
            backgroundColor: "#037bfc",
            
        }
    });


    const classes = useStyles();
 
    return (
        
             <div>
            
            <ul>
            
             <Link 
             to={`/cars/${props.id}`}
             style={{ textDecoration: 'none' }}
             >
           
             <li value={props.vim} className={classes.btn}> {props.carModel}</li>
    
             </Link>
            
            </ul>
            
          </div>
        
    );
};

export default CarItem;