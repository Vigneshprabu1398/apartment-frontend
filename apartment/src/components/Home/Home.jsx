import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButton"

export const Home = ()=>{
    const [list, setList] = useState([])

    useEffect(()=>{
        axios.get("https://intense-fjord-31017.herokuapp.com/flat")
        .then((res)=>{
            setList(res.data)
        })
    }, [])

    function handleSort(nameBy, order) {
        if (nameBy === 'residenttype' && order === 1)
            setList((prev) =>
                [...prev.sort((a, b) => a.country > b.country ? 1 : -1)])
        else if (nameBy === 'residenttype' && order === -1)
            setList((prev) =>
                [...prev.sort((a, b) => a.country > b.country ? -1 : 1)])
        else if (nameBy === 'flatNo' && order === 1)
            setList((prev) =>
                [...prev.sort((a, b) => a.flatNo > b.flatNo ? 1 : -1)])
        else if (nameBy === 'flatNo' && order === -1)
            setList((prev) =>
                [...prev.sort((a, b) => a.flatNo > b.flatNo ? -1 : 1)])
    }


    return(
        <div>
            
            <div className="searchBar">
                <input id="search" type="text" />
                <button id="submit">Search</button>
            </div>

            <SortAndFilterButtons
                handleSort={handleSort}
            />

            <h1>Table for Apartments</h1>
           <table>
               <thead>
                   <tr>
                       <td>Id</td>
                       <td>Block</td>
                       <td>Flat No</td>
                       <td>Total Flats</td>
                       <td>Resident Type</td>
                       <td>View</td>
                   </tr>
               </thead>
               {
                   list.map(e=>
                       <tbody>
                           <tr>
                               <td>{e.id}</td>
                               <td>{e.block}</td>
                               <td>{e.flatNo}</td>
                               <td>{e.totalflats}</td>
                               <td>{e.residenttype}</td>
                               <td>
                                  <Link to="/flat">
                                  <button 
                                   onClick={()=>{
                                       
                                   }}
                                   >View</button>
                                  </Link>
                                   </td>
                           </tr>
                       </tbody>
                    )
               }
           </table>

        </div>
    )
}