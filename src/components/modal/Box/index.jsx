import Button_Modal from "../Button-Modal/index";
import './style.scss';

const Box = ({check}) => {

    return(
        <div className="box">
           <p className="title">Oops!</p>
           <p className="text">Please enter what you want to do. </p>
           <Button_Modal check={check}/>
        </div>
    );
}

export default Box;