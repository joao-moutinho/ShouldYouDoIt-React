
export const loadgif = async ({text}) =>{
    
    let data =  await fetch(`https://shouldyoudoit.herokuapp.com/?search=${text}`);
     
    let gif = await data.json();
    
    console.log(`dentro do`, gif);
    
  return(gif);
}

// quando der set do state o component dá update