import './Sort.css'

export const SortAndFilterButtons = ({handleSort})=>{
    return (
        <div>
                <select name="" className="filter"
                onClick={() => handleSort("country", 1)}>
                    <option value="">Select</option>
                    <option value="owner">Owner</option>
                    <option value="tenant">Tenant</option>
                </select>


                <button className="asc"
                onClick={() => handleSort("flatNo", 1)}>Asc Flat No</button>
                <button className="dec"
                onClick={() => handleSort("flatNo", -1)}>Des Flat No</button>
            </div>
    )
}