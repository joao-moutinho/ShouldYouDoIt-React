import './style.scss';


const Button = ({disabled, check}) => {

   if(disabled){
      console.log("disabled")
      return(
         <button className="button disabled" onClick={check}>Decide</button>
      )}else{
         return(
            <button className="button" onClick={check}>Decide</button>
         );
      }

}

export default Button;