
export const loadgif = ({text}) =>{
    
    fetch(`https://shouldyoudoit.herokuapp.com/?search=${text}`)
    .then(response => response.json())
    .then(json => console.log(json))

return(json);

}

// quando der set do state o component dá update