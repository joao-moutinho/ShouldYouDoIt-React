import './style.scss';

const DoItList = ({list,category}) =>{
    
    console.log("lista",list);
    
    
    return(
      <div className="do-lists">  

       <h2 className="title-do-it">{category}</h2>
         <div className="gifs-list">
            {list.map((element) =>(
                element.msg === category &&  <li className="li-gif" key={element.img}> <img src={element.img} width="160px" height="160px"/> </li>
              ))}
           </div> 
         

     </div>
    );
}

export default DoItList;