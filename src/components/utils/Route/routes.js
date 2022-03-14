import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from '../../../pages/Home';
import Gallery from '../../../pages/Gallery';
import Home_Gif from "../../../pages/Home-Gif";

function RoutesApp(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Gallery" element={<Gallery/>}/>
                <Route path="/ShowGif/:text" element={<Home_Gif/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;