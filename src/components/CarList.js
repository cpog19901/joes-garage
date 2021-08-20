import React, {useState, useEffect}  from 'react';
import CarItem from './CarItem';
import {Button, ButtonGroup, Typography, Grid} from "@material-ui/core/";
import Filter from "./Filter";



const CarList = ({cars}) => {
  const totalCars = cars.length;
  const carsPerPage = 20;
  const totalPages = Math.ceil(totalCars/carsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [];
  const indexLastCar = currentPage * carsPerPage;
  const indexFirstCar = indexLastCar - carsPerPage;
  const [checked, setChecked] = useState(true)

  for (let i = 1; i<= totalPages; i++){
    pageNumbers.push(i);
  }

const handleClick = (e) =>{
  e.preventDefault();
 const page = e.currentTarget.value;
 setCurrentPage(page);
}







    return (
        <div>

      <Typography color="primary" variant ="h3">See all our cars!</Typography>
      <Filter
      filtersAll = {cars}
      ></Filter>               
      
      {cars.map((car, index)=>{

        if(index >= indexFirstCar && index <= indexLastCar )
        
              
        return(
      

      
          <CarItem
            key={car.vin} 
            id={car.vin}
            carModel= {car.model_variant}
          /> 
        
       
        )
      })}    
         
       

          

     
      

      <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
         
          {pageNumbers.map((page, index) => {
          
          return(
            
            <Button
           
            key={index} 
            id={index} 
            value={page}
            type="submit"
            onClick={handleClick}>
            {page}

            </Button>
            
          ) 
          
          
          }
          )}
          </ButtonGroup>
         <h4>{currentPage}</h4>
        </div>
    );
};

export default CarList;