import { loadgif } from "../../../utils/Load/loadgifs";

const Gif = () => {





const receveGif = async () =>{
const gif = await loadgif("ola");
console.log("ola"+gif);


}
 

 

    return(
 
      <h1>gif</h1>

    );
}

export default Gif;