import React, { useState } from "react";
import Title from "../Title";
import Input from "../Input";
import './main.scss';
import Button from "../Button";
import Modal from "../../modal/Modal";

const Main = () =>{

 const [value, setValue] = useState('');
 const [search, setSearch] = useState(false);
 const [buttonState, setButtonState] = useState('');
 const buttonDisabled = value.length > 0; 
 console.log(value);


 const loadgif = (text) =>{
   setValue(text);
   console.log(value);
 }

// turn off button
 const buttonOff = () =>{
   setButtonState("true");
   console.log("button disabled");
 }


 //turn on button
 const buttonOn = () =>{
     setButtonState("false");
     console.log("button enabled");
 } 




    return(
        <div className="main">

            <Title/>
            <Input handleChange={loadgif} />
            {value.length === 0 && <Button check={buttonOff} disabled={!buttonDisabled}/> }
            {value.length >= 1 && <Button check={buttonOn}/>}
            {buttonState === "true" && <Modal check={buttonOn}/>}

        </div>

    );
}

export default Main;