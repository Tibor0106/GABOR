import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useState } from 'react';

function App() {
  const [eredmeny,eredmenybeallit] =useState(0);
  
  const func = (ertek) =>{
      if(eredmeny == 0){    
          eredmenybeallit(ertek);      
        return;
      }

      if(ertek ==  '='){
        try{
          eredmenybeallit(eval(eredmeny));
        }catch(Err){
          alert("Hibás szamolás");
          eredmenybeallit(0);
        }     
        return;
      }

      if(ertek == 'x^2'){
        eredmenybeallit(Math.pow(eredmeny,2));
        return;
      }

      eredmenybeallit(eredmeny.toString()+ertek.toString());
     
  }

 
  return (
    <><div className='container'>
      <input type="text" disabled value={eredmeny}/>
      <div className="">
        <div className="d-flex">
            <button onClick={(event) => func(event.target.innerHTML)}>9</button>
            <button onClick={(event) => func(event.target.innerHTML)}>8</button>
            <button onClick={(event) => func(event.target.innerHTML)}>7</button>
        </div>
        <div className="d-flex">
            <button onClick={(event) => func(event.target.innerHTML)}>6</button>
            <button onClick={(event) => func(event.target.innerHTML)}>5</button>
            <button onClick={(event) => func(event.target.innerHTML)}>4</button>
        </div>
        <div className="d-flex">
            <button onClick={(event) => func(event.target.innerHTML)}>3</button>
            <button onClick={(event) => func(event.target.innerHTML)}>2</button>
            <button onClick={(event) => func(event.target.innerHTML)}>1</button>
        </div>
        <div className="d-flex">
              <button onClick={(event) => func(event.target.innerHTML)}>0</button>
              <button onClick={(event) => func(event.target.innerHTML)}>+</button>
              <button onClick={(event) => func(event.target.innerHTML)}>-</button>
        </div>

        <div className="d-flex">
              <button onClick={(event) => func(event.target.innerHTML)}>*</button>
              <button onClick={(event) => func(event.target.innerHTML)}>/</button>
              <button onClick={(event) => func(event.target.innerHTML)}>=</button>
              <button onClick={(event) => func(event.target.innerHTML)}>x^2</button>                                          
        </div>
      </div>
      
      </div></>
  );
}

export default App;
