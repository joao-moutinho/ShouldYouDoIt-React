import React from "react";
import "./links.scss";
import { Link, useLocation } from "react-router-dom";

const Links = () => {
  const location = useLocation();

  return (
    <div className="links">

{/* in page*/ }
      {location.pathname === "/" && (
       <>  
         <Link to="/" className="link inpage">
            HOME
         </Link>

         <Link to="/Gallery" className="link outpage">
            GALLERY
         </Link>
       </> 
      )}

 {/* out page*/ }
      {location.pathname !== "/" && (
        <> 
         <Link to="/" className="link outpage" >
            HOME
         </Link>

          <Link to="/Gallery" className="link inpage">
          GALLERY
          </Link>
        </>  
      )}
</div>
  );
};

export default Links;
