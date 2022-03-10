import React from "react";
import './input.scss';

const Input = ({handleChange}) =>{



    return(
        <div className="input">
           <input type="text" onChange={(e) =>{
               return handleChange(e.target.value)
           }}
            className="input-box"/>
        </div>
    );
}


export default Input;