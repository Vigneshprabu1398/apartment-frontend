import './Sort.css'

export const SortAndFilterButtons = ({handleSort})=>{
    const options = [
        {
            label: "---",
            value: "---",
          },
        {
          label: "Owner",
          value: "owner",
        },
        {
          label: "Tenent",
          value: "tenent",
        }
    ]
    return (
        <div>
            <label><b>Select Resident Type :</b></label>
               <select>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>


                <button className="asc"
                onClick={() => handleSort("flatNo", 1)}>Asc Flat No</button>
                <button className="dec"
                onClick={() => handleSort("flatNo", -1)}>Des Flat No</button>
            </div>
    )
}