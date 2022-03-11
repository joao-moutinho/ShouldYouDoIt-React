import Title from "../../home/main/Title";
import Input from "../../home/main/Input"
import './style.scss';
import React from "react";
import { useState } from "react";
import BtnDecide from "../buttons/BtnDecide";
import BtnClean from "../buttons/BtnClean";
import Modal from "../../home/modal/Modal";
import Gif from "../msg-gif/Gif";



const Main_Gif = () => {


const [value, setValue] = useState('');
const [showGif, setShowGif] = useState(false);
const [showModal, setShowModal] = useState(false);


const handleValue = (text) =>{
    setValue(text);
}   

const checkDecide = () =>{
  value.length >= 1 && setShowGif(true); 
  value.length === 0 && setShowModal(true);
}

const checkModal = () =>{
  setShowModal(false);
} 


    return(
      <div className="main-gif">
        <Title/>
        <Input handleChange={handleValue}/>
          <div className="buttons">
            <BtnClean/>
            <BtnDecide checkDecide={checkDecide}/>
          </div>

          <Gif/>
          
          {showGif===true && <Gif/> } 
          {showModal === true && <Modal check={checkModal}/>}
      </div>  
      
    );
}

export default Main_Gif;