import React from 'react';
import CarItem from './CarItem';


const CarList = ({cars}) => {
    return (
        <div>
      <h1>See all of our cars!</h1>
             {cars.map((car)=>{
        return(
      
          <CarItem
            key={car.vin}
            id={car.vin}
            carModel= {car.model_variant}
          /> 
         
       
        )
      })}    
   
        </div>
    );
};

export default CarList;