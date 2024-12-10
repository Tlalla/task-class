import About from "./About";
import Contact from "./Contact";
import Examples from "./Examples";
import "./Main.css"
import { Routes, Route, NavLink } from "react-router-dom";
const Main =()=>{
    return(
        <div>
            <div className="mains">
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/examples'>Examples of works</NavLink>
            <NavLink to='/contact'>Contacts</NavLink>
        </div>
        <div className="routes">
            <Routes>
                <Route path='/about' element={<About/>}/>
                <Route path='/examples' element={<Examples/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
            </div>
            </div>

    )
}
export default Main;