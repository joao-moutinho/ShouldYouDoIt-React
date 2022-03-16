import React from "react";
import MainGallery from "../../components/gallery/MainGallery";
import Header from "../../components/home/header/Header";


const Gallery = () => {



    return(
       <div className="Gallery"> 
        <Header/>
        <MainGallery/>
      </div>
    );
} 

export default Gallery;