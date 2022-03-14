
export const loadgif =  ({text}) =>{
    
    
   fetch('https://shouldyoudoit.herokuapp.com/?search=ir%20as%20compras')
   .then( response => response.json())
   .then(json =>  receveData(json));

 function receveData(json)  {
     
      return(json);
  } 
   
  
}

// quando der set do state o component dá update