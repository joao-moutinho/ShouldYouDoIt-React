import Box from '../Box';
import './style.scss';
const Modal = ({check}) => {

    return(
       <div className="modal">
          <Box check={check}/>
       </div>
  );
}

export default Modal;