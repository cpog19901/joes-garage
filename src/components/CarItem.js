import React from 'react';

const CarItem = (props) => {
    return (
        
             <div>
          {/* <a key={car.id} id={car.id} href={car.model_variant}>{car.model_variant}</a> */}
          <h1>{props.carModel}</h1>
          </div>
        
    );
};

export default CarItem;