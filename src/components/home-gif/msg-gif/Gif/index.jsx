import Msg from "../Msg";

const Gif = ({gif}) => {

    return(
       <> 
         <Msg text={gif.msg}/>
         <img src={gif.img} width="500px" height="350px" />
       </>  
   );
}

export default Gif;