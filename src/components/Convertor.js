import React from 'react';
import './Convertor.css';
import arrow from '../assets/arrow.webp';

const Convertor = () => {

 

  
  return (
    <div className="desc-main">

      <h1 className="header">Temperature Convertor</h1>

      <input type="number" id="fahrenheit" placeholder="Enter Fahrenheit" name="f" />

      <img src={arrow} className="arrow-img" alt="arrow" />
      <input type="number" id="celsius" placeholder="Enter Celsius" name="c" />

      <button id="convert" className='btns' onClick={tempConvert}>Convert!</button>
      <button id="clear" className='btns reset-btn' onClick={clearForm}>Reset</button>


    </div>
  );
  function tempConvert() {

    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = document.getElementById("celsius").value;

    if (fahrenheit != '') {
      celsius = (parseFloat(fahrenheit) - 32) / 1.8;
    } else {
      fahrenheit = (parseFloat(celsius) * 1.8) + 32;
    }



    document.getElementById('fahrenheit').value = parseFloat(fahrenheit).toFixed(1);
    document.getElementById('celsius').value = parseFloat(celsius).toFixed(1);
  }


  function clearForm() {
    document.getElementById('fahrenheit').value = '';
    document.getElementById('celsius').value = '';
  }




}

export default Convertor;
