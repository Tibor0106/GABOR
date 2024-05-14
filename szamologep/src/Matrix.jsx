import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useEffect, useState } from 'react';

function Matrix(){
class Szamok{

    lista=[]
    constructor(lista){
       this.lista=lista
    }
}
const [alap,masik]=useState([])
useEffect(()=>{
    var rendezett=[]
    var a = 0;

    for (let index = 1; index <=100; index++) {
           
         if(index.toString().includes("0")){
            a++;
         }
         rendezett[index, a] = index;

         
            
    }
    console.log(rendezett)
},[])
return(<>





</>)



}

export default Matrix