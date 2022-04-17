import { Link } from "react-router-dom"
import './Navbar.css'

export const Navbar = ()=>{
    return(
        <div className="main">
            <h4 className="home"><Link to="/">Home</Link></h4>
            <h4 className="flat"><Link to="/flat">Flat</Link></h4>
            <button className="signin"><Link to="/signup">SignUp</Link></button>
        </div>
    )
}