import { useState, useEffect } from "react";
import TitleGallery from "../TitleGallery";
import List from "../List"
import './style.scss';

const MainGallery = () => {

    const [list,setList] = useState([]);

useEffect( () => {
   
  fetch(`https://shouldyoudoit.herokuapp.com/all`)
   .then( response => response.json())
   .then(json =>  setList(json));

},[]);


return(
    
    <div className="main-gallery">
    <TitleGallery/>  
        <div className="lists">
            <List list={list} category="do it" />
            <List list={list} category="don't do it"/>
        </div>
    
    </div>   
    
);

}

export default MainGallery;