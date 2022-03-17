import React, { useState } from "react";
import Title from "../Title";
import Input from "../Input";
import './main.scss';
import Button from "../Button";
import Modal from "../../modal/Modal";
import {useNavigate} from "react-router-dom";



const Main = () =>{
    
 const navigate = useNavigate();
    
 const [value, setValue] = useState('');
// const [search, setSearch] = useState(false);
 const [buttonState, setButtonState] = useState('');

 const buttonDisabled = value.length > 0; 
 console.log(value);


 const handleValue = (text) =>{
   setValue(text);
   console.log(value);
 }

// show Modal
 const showModal = () =>{
   setButtonState("showModal");
   console.log("button disabled");
 }


 //turn on button
 const mainPage = () =>{
     setButtonState("showMain");
 } 

    return(
        <div className="main">
            <Title/>
            <Input handleChange={handleValue} />
            {value.length === 0 && <Button check={showModal} disabled={!buttonDisabled}> Decide </Button> }
            {value.length >= 1 && <Button  check={()=> navigate(`/ShowGif/${value}`)}>Decide </Button>}
            {buttonState === "showModal" && <Modal check={mainPage}/>}
        </div>

    );
}

export default Main;