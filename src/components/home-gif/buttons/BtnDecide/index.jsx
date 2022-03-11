import './style.scss';

const BtnDecide = ({checkDecide}) => {

    return(
        <button className="btn-decide" onClick={checkDecide}>Decide</button>
    ); 
}

export default BtnDecide;