import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from '../../../pages/Home';
import Gallery from '../../../pages/Gallery';
import Home_Gif from "../../../pages/Home-Gif";

function RoutesApp(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/Gallery" element={<Gallery/>}/>
                <Route path="/ShowGif" element={<Home_Gif/>}/>
            </Routes>
        </BrowserRouter>
    );
}


export default RoutesApp;