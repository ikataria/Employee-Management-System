import { BrowserRouter, Link } from "react-router-dom";

function EmployeeRow({ employee, style }) {

    async function deleteRow(){
        const query = `
            mutation deleteRow($Id: String){
                deleteRow(Id: $Id)
            }
        `;
            fetch('http://localhost:7000/graphql', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query, variables: {Id:employee._id}})
            }).then(async (response) => {
                let result = await response.json();
                alert(result.data.deleteRow)
                window.location.assign("/")
            })
    }

    return (
        <tr>
            <td style={style}>{employee.Id}</td>
            <td style={style}>{employee.FirstName}</td>
            <td style={style}>{employee.LastName}</td>
            <td style={style}>{employee.Age}</td>
            <td style={style}>{new Date(parseInt(employee.DateOfJoining)).toDateString()}</td>
            <td style={style}>{employee.Title}</td>
            <td style={style}>{employee.Department}</td>
            <td style={style}>{employee.EmployeeType}</td>
            <td style={style}>{employee.CurrentStatus == 1 ? "Active" : "Retired"}</td>

            {/* <td style={style}><Link to={`/edit/${employee._id}`}>Edit</Link></td> */}
            <td style={style}><Link to={`/edit/${employee._id}`}>Edit</Link></td>
            <td><button type="button" class="btn btn-danger" onClick={deleteRow}>Delete</button></td>
        </tr>
    )
}

export default EmployeeRow;