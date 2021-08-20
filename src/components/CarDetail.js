
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Link, useHistory } from 'react-router-dom';
import {Typography, Container, Paper, Button, makeStyles, Grid} from "@material-ui/core/";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const useStyles = makeStyles({
    
});

const CarDetail = (props) => {

const classes = useStyles();

let {id} = useParams();
    
const [nextVin, setNextVin] = useState(id);
const [prevVin, setPrevVin] = useState(id);


const nextCar = () => {
    
  const carIndex = props.cars.findIndex(car => car.vin===id)
    props.cars.map((car, index) => {
        if(index === carIndex +1){
           
            setNextVin(car.vin);

            
        } 
        
    })
    
}

const prevCar = () => {
    
    const carIndex = props.cars.findIndex(car => car.vin===id)
      props.cars.map((car, index) => {
          if(index === carIndex -1){
             
              setPrevVin(car.vin);
  
              
          } 
          
      })
      
  }



useEffect(() => {
    setNextVin(nextVin);
})

    return (
        <div>
                       
                <div>
                <Typography color="primary" variant ="h3">Car details</Typography>

               
            
                    {props.cars.map((car, index) => {
                        if(car.vin === id){
                            
                        return(
                            <div key = {index} id={index}>
                            <Container maxWidth="sm" >
                            <Paper elevation={3} spacing={14} >
                            <Typography color="primary" variant ="h5">Car model</Typography>
                            <span>{car.model_variant}</span>
                            <Typography color="primary" variant ="h5">Fuel type</Typography>
                            <span>{car.fuel_type}</span>
                            <Typography color="primary" variant ="h5">Engine Size</Typography>
                            <span>{car.engine_size}</span>
                            <Typography color="primary" variant ="h5">Body type</Typography>
                            <span>{car.body_type}</span>
                            <Typography color="primary" variant ="h5">Reg number</Typography>
                            <span>{car.regno}</span>
                            <Typography color="primary" variant ="h5">Doors</Typography>
                            <span>{car.doors}</span>
                            <Typography color="primary" variant ="h5">Transmission type</Typography>
                            <span>{car.transmission_type}</span>
                            <Typography color="primary" variant ="h5">VIN</Typography>
                            <span>{car.vin}</span>
                            </Paper>
                            </Container>

                            {index!==0 ? 
                            
                            <Button href={`/cars/${prevVin}`} className={classes.btn} onClick={prevCar}><ArrowBackIosIcon/> Previous car</Button> : null}
                            <Link 
                            to={`/joes-garage/`}>
                         
                            <Button variant ="contained" color="primary">Return to car list</Button>
                            </Link> 

                            
                         
                           {index !== props.cars.length-1 ? 
                           
                           
                           <Button href={`/cars/${nextVin}`} className={classes.btn} onClick={nextCar}>Next car <ArrowForwardIosIcon/></Button> 
                         
                           :null }
                         
                          
                           
                            </div>
                         
                           
                            );
                        }else return false;
                    })}
                   
                </div>
              
          

        </div>
    );
};

export default CarDetail;