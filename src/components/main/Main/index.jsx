import React, { useState } from "react";
import Title from "../Title";
import Input from "../Input";
import './main.scss';
import Button from "../Button";

const Main = () =>{

 const [value, setValue] = useState('');
 const [search, setSearch] = useState(false);
 const buttonDisabled = value.length > 0; 
 console.log(value);


 const loadgif = (text) =>{
   setValue(text);
   console.log(value);
 }



    return(
        <div className="main">
            <Title/>
            <Input handleChange={loadgif} />
            {value.length === 0 && <Button disabled={!buttonDisabled}/> }
            {value.length >= 1 && <Button/>}
        </div>

    );
}
export default Main;