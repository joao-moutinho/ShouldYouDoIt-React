import Title from "../../home/main/Title";
import Input from "../../home/main/Input"
import './style.scss';
import { useState , useEffect} from "react";
import BtnDecide from "../buttons/BtnDecide";
import BtnClean from "../buttons/BtnClean";
import Modal from "../../home/modal/Modal";
import Gif from "../msg-gif/Gif";
import { useParams } from "react-router";




const Main_Gif = () => {


let param = useParams().text;
console.log("params ",param);

const [value, setValue] = useState(param);
const [showGif, setShowGif] = useState(true);
const [showModal, setShowModal] = useState(false);
const [gif, setGif] = useState('');
const [newGif,setNewGif] = useState(true);
const [prevValue, setPrevValue] = useState(param);




const handleValue = (text) =>{
    setValue(text);
    console.log(value);
}   

const checkDecide = () =>{
  
  value.length >= 1 && setShowGif(true); 
  value.length >= 1 && setNewGif(!newGif);
  value.length === 0 && setShowModal(true);
  value === prevValue && setShowModal(true);
  setPrevValue(value);
}

const checkModal = () =>{
  setShowModal(false);
} 

useEffect(() => {

  fetch(`https://shouldyoudoit.herokuapp.com/?search=${param}`)
   .then( response => response.json())
   .then(json => recevedata(json));
  
    function recevedata(json){
        console.log(json);
        setGif(json);
    }
},[newGif])



    return(
      <div className="main-gif">
        <Title/>
        <Input handleChange={handleValue} value={param}/>
          <div className="buttons">
            <BtnClean/>
            <BtnDecide checkDecide={checkDecide}/>
          </div>
          {showGif===true && <Gif gif={gif}/>} 
          {showModal === true && <Modal check={checkModal}/>}
      </div>   
    );
}

export default Main_Gif;