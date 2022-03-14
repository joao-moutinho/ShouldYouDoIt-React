import Title from "../../home/main/Title";
import Input from "../../home/main/Input"
import './style.scss';
import { useState , useEffect} from "react";
import BtnDecide from "../buttons/BtnDecide";
import BtnClean from "../buttons/BtnClean";
import Modal from "../../home/modal/Modal";
import Gif from "../msg-gif/Gif";
import { loadgif } from "../../utils/Load/loadgifs";
import { useParams } from "react-router";




const Main_Gif = () => {


let param = useParams().text;
console.log("params ",param);

const [value, setValue] = useState(param);
const [showGif, setShowGif] = useState(true);
const [showModal, setShowModal] = useState(false);





const handleValue = (text) =>{
    setValue(text);
    console.log(value);
}   

const checkDecide = () =>{
  value.length >= 1 && setShowGif(true); 
  value.length === 0 && setShowModal(true);
}

const checkModal = () =>{
  setShowModal(false);
} 

useEffect(() =>{
   
    const gif = loadgif(param);
});


    return(
      <div className="main-gif">
        <Title/>
        <Input handleChange={handleValue} value={param}/>
          <div className="buttons">
            <BtnClean/>
            <BtnDecide checkDecide={checkDecide}/>
          </div>

          {showGif===true && <Gif text={value}/>} 
          {showModal === true && <Modal check={checkModal}/>}
      </div>  
      
    );
}

export default Main_Gif;