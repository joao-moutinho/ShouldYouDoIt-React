import React from "react";
import Header from "../../components/header/Header";
import { useState } from "react";

const Gallery = () => {

const [value,setValue] = useState();


    const loadgif = (text) =>{
        setValue(text);
        console.log(value);
      }


    return(
       <div className="App"> 
        <Header/>
      </div>
    );
} 

export default Gallery;