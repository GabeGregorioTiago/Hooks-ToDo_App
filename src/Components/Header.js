import React, {useState} from "react"
import { BrowserRouter,Link, Routes, Route } from "react-router-dom";
import Lista from "./List.js"
const Header = () =>{

    const [open,setOpen]=useState(false)

    return(
          <BrowserRouter>
             <button onClick={()=>{setOpen(!open)}}>{open === true ? "x" : "≡"}</button>
             {open && (<nav>
                <ul>
                   <li><Link to="/">HOME</Link></li>
                   <li> <Link to="/lista">LIST</Link></li>
                  
                   
                </ul>
             </nav>)}
             <Routes>
            <Route path="/" />
            <Route path="/lista" element={<Lista />} />
            
            </Routes>
          </BrowserRouter>

    );

}

export default Header;