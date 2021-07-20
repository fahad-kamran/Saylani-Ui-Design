import React from 'react';
import '../assets/css/GotoTop.css';

export default function GotoTop(){

  const topFunction=()=> {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }

    return(
        <button onClick={()=>topFunction()} id="myBtn">^</button>
    );
}