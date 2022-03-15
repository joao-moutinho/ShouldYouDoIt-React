import Msg from "../Msg";

const Gif = ({gif}) => {

    return(
       <> 
         <Msg text={gif.msg}/>
         <img src={gif.img} width="400px" />
       </>  
   );
}

export default Gif;