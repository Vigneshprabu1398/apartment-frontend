import  {Routes,Route}  from "react-router"
import { Flat } from "../Flat/Flat"
import { Home } from "../Home/Home"

export const Routers = () =>{
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/flat"  element={<Flat />}/>
            </Routes>
        </div>
    )
}