import React from 'react';
import CarItem from './CarItem';


const CarList = ({cars}) => {
    return (
        <div>
      
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