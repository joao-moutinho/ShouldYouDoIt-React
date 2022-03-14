import React from "react";
import './input.scss';

const Input = ({handleChange, value}) =>{

    

    return(
        <div className="input">
           <input defaultValue={value} type="text" onChange={(e) =>{
               return handleChange(e.target.value)
           }}
            className="input-box"/>
        </div>
    );
}


export default Input;