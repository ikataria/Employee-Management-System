import { BrowserRouter, Link } from "react-router-dom";


function EmployeeSearch() {
    return (
        <div>
            <h3>Employee Filters</h3>
            <nav>
                <Link to="/list?employeeType=AllEmployees">AllEmployees</Link>
                {' | '}
                <Link to="/list?employeeType=FullTime">FullTime</Link>
                {' | '}
                <Link to="/list?employeeType=PartTime">PartTime</Link>
                {' | '}
                <Link to="/list?employeeType=Contract">Contract</Link>
                {' | '}
                <Link to="/list?employeeType=Seasonal">Seasonal</Link>
            </nav>
            <nav>
                <Link to="/list?role=Employee">Employee</Link>
                {' | '}
                <Link to="/list?role=Manager">Manager</Link>
                {' | '}
                <Link to="/list?role=VP">VP</Link>
                {' | '}
                <Link to="/list?role=Director">Director</Link>
            </nav>
            <nav>
                <Link to="/list?department=IT">IT</Link>
                {' | '}
                <Link to="/list?department=HR">HR</Link>
                {' | '}
                <Link to="/list?department=Marketing">Marketing</Link>
                {' | '}
                <Link to="/list?department=Engineering">Engineering</Link>
            </nav>
        </div>
    )
}
export default EmployeeSearch;