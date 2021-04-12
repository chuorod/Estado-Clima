import React from 'react';
import PropTypes from 'prop-types';
import max from '../img/maxima.png';
import min from '../img/minima.png';
import humedad from '../img/humedad.png';

const Clima = ({resultado}) => {

    const { name,main} = resultado;

    if(!name) return null;

    const kelvin =273.15;


    return (
        <div className="card-panel white ">
             <div className="black-text border">
                 <h2>El Clima en {name} es: </h2>
                 <p className="temperatura">
                     {parseFloat( main.temp - kelvin,10 ).toFixed(2) } <samp>&#x2103;</samp>
                     
                     <p style={{ margin:'-18px',fontSize:'15px' }}> <b>Sensación Térmica &nbsp;
                     {parseFloat( main.feels_like - kelvin,10 ).toFixed(2) } <samp>&#x2103;</samp></b>
                 </p>
                 
                 </p>
                 


                 <p align='center'> <img src={humedad} style={{width:'28px', height:'30px', margin:'-8px' }}/> &nbsp;Humedad de&nbsp;<b>
                     {parseFloat( main.humidity ).toFixed(0) }%</b>
                 </p>
                 
                  <p> <img src={max} style={{width:'25px', height:'20px', margin:'-3px' }}/>  Temperatura Máxima:&nbsp; <b>
                     {parseFloat( main.temp_max - kelvin,10 ).toFixed(2) } <samp>&#x2103;</samp></b>
                 </p> 
                 <p><img src={min} style={{width:'25px', height:'20px', margin:'-3px' }}/> Temperatura Mínima:&nbsp; <b>
                     {parseFloat( main.temp_min - kelvin,10 ).toFixed(2) } <samp>&#x2103;</samp></b>
                 </p>    

             </div>
        </div>
    );

}

Clima.protoType = {
    resultado: PropTypes.object.isRequired
}

export default Clima;