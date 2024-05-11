import EmployeeSearch from './EmployeeSearch';
import EmployeeTable from './EmployeeTable';
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';


const EmployeeDirectory = () => {
    const [allEmployees, setAllEmployees] = useState([]);
    
    let query = `
        query {
            employeeDirectory {
                _id
                Id
                FirstName
                LastName
                Age
                DateOfJoining
                Title
                Department
                EmployeeType
                CurrentStatus
              }
        }
    `;

    function fetchData() {
        fetch('http://localhost:7000/graphql', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ query })
        }).then(async (response) => {
            let tempEmployees = await response.json();

            let result = [];
            tempEmployees.data.employeeDirectory.forEach(e => {
                if (e.Age >= 64 && e.Age <= 65) 
                    result.push(e);
            })

            let toDisplay = result.length > 0 ? result : [];
            setAllEmployees(toDisplay);
        })
    }

    useEffect(() => {
        fetchData()
    }, []);


    return (
        <div>
            <EmployeeSearch />
            <hr />
            <EmployeeTable allEmployees={allEmployees} />
            <hr />
        </div>
    )
}

export default EmployeeDirectory;