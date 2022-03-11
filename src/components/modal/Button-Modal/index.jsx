import './style.scss';

const Button = ({check}) =>{

    return(
        <button className="button-modal" onClick={check}>Okay</button>
    );
}

export default Button;