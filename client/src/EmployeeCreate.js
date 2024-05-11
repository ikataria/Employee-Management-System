
import { useState, useEffect } from "react";
import EmployeeSearch from './EmployeeSearch';
import EmployeeTable from './EmployeeTable';
// import EmployeeCreate from './EmployeeCreate';
import { useLocation } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import React from "react";





const EmployeeCreationForm = ({ AddSingleEmployee }) => {

    const [errMsgFname, setErrMsgFname] = useState("");
    const [errMsgLname, setErrMsgLname] = useState("");
    const [errMsgAge, setErrMsgAge] = useState("");
    const [errMsgJoiningDate, setErrMsgJoiningDate] = useState("");
    const [errMsgUnsuitable, setErrMsgUnsuitable] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        let form = document.forms.addEmployee;
        let isValidSubmission = true;

        const nameRegex = new RegExp('^[a-zA-Z ]+$');

        const singleEmployee = {
            FirstName: form.firstName.value.trim().toUpperCase(),
            LastName: form.lastName.value.trim().toUpperCase(),
            Age: parseInt(form.age.value),
            DateOfJoining: form.dateOfJoining.value,
            Title: form.title.value,
            Department: form.department.value,
            EmployeeType: form.employeeType.value,
            CurrentStatus: parseInt(form.currentStatus.value)
        }

        // console.log(`fName>>>>>>>>>123:`,form.dateOfJoining.value);
        if (!form.firstName.value.trim()){
            setErrMsgFname("First Name required.");
            isValidSubmission = false;
        }
        if (!form.lastName.value.trim()){
            setErrMsgLname("Last Name required.");
            isValidSubmission = false;
        }
        if (!form.age.value.trim()){
            setErrMsgAge("Age is required.");
            isValidSubmission = false;
        }
        if (!form.dateOfJoining.value){
            setErrMsgJoiningDate("Joining Date is required.");
            isValidSubmission = false;
        }
        console.log(`=-=54>>>`, singleEmployee);
        if ((form.employeeType.value == 'Contract' || form.employeeType.value == 'Seasonal') && (form.title.value == 'Manager' || form.title.value == 'Director' || form.title.value == 'VP')){
            console.log(`=-=56>>>`);

            setErrMsgUnsuitable("Contractor/Seasonal Employee Can't be Manager/Director/VP.");
            isValidSubmission = false;
        }



        // console.log('J date: ', new Date(form.dateOfJoining.value));
        // console.log('Allow : ', new Date(new Date().setYear(new Date().getYear() - 30)));

        if (new Date(form.dateOfJoining.value) < new Date(new Date().setYear(new Date().getYear() - 30))){
            setErrMsgJoiningDate("Joining Date can not be greater than 30 years.");
            isValidSubmission = false;
        }

        if (new Date(form.dateOfJoining.value) > new Date()){
            setErrMsgJoiningDate("Joining Date can not be future date.");
            isValidSubmission = false;
        }

        // Regex Validations
        if (!nameRegex.test(form.firstName.value.trim())){
            setErrMsgFname("Valid First Name required.");
            isValidSubmission = false;
        }
        if (!nameRegex.test(form.lastName.value.trim())){
            setErrMsgLname("Valid Last Name required.");
            isValidSubmission = false;
        }
        if (form.age.value < 20 || form.age.value > 70){
            setErrMsgAge("Age should be between 20 to 70.");
            isValidSubmission = false;
        }

        if (isValidSubmission){
            // console.log(__filename,`ready to create`, singleEmployee);
            AddSingleEmployee(singleEmployee);
            alert("Employee Added Successfully.");
        }

    }

    return (
        <div>
            <h3>Welcome to the Employee Creation Form</h3>
            <div class="container">
                <form name="addEmployee" onSubmit={handleSubmit}>
                    <span style={{ color: "red" }}>{errMsgUnsuitable}</span>
                    <div className="row">
                        <div className="col-25">
                            <label for="firstName">First Name:</label>
                        </div>

                        <div className="col-75">
                            <input type="text" id="firstName" name="firstName" />
                            <span style={{ color: "red" }}>{errMsgFname}</span>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label for="lastName">Last Name:</label>
                        </div>

                        <div className="col-75">
                            <input type="text" id="lastName" name="lastName" />
                            <span style={{ color: "red" }}>{errMsgLname}</span>
                        </div>
                    </div>

                    <br />

                    <div className="row">
                        <div className="col-25">
                            <label for="age">Age:</label>
                        </div>

                        <div className="col-75">
                            <input type="number" id="age" name="age" />
                            <span style={{ color: "red" }}>{errMsgAge}</span>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label for="dateOfJoining">Date of joining:</label>
                        </div>

                        <div className="col-75">
                            <input type="date" id="dateOfJoining" name="dateOfJoining" />
                            <span style={{ color: "red" }}>{errMsgJoiningDate}</span>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label for="title">Title:</label>
                        </div>

                        <div className="col-75">
                            <select name="title" id="title">
                                <option value="Employee">Employee</option>
                                <option value="Manager">Manager</option>
                                <option value="Director">Director</option>
                                <option value="VP">VP</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label for="department">Department:</label>
                        </div>

                        <div className="col-75">
                            <select name="department" id="department">
                                <option value="IT">IT</option>
                                <option value="Marketing">Marketing</option>
                                <option value="HR">HR</option>
                                <option value="Engineering">Engineering</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label for="employeeType">Employee Type:</label>
                        </div>

                        <div className="col-75">
                            <select name="employeeType" id="employeeType">
                                <option value="FullTime">FullTime</option>
                                <option value="PartTime">PartTime</option>
                                <option value="Contract">Contract</option>
                                <option value="Seasonal">Seasonal</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label for="currentStatus">Current Status:</label>
                        </div>

                        <div className="col-75">
                            <input type="number" id="currentStatus" name="currentStatus" value="1" disabled />
                        </div>
                    </div>

                    <div className="row">

                        <input type="submit" value="Submit" />
                        {/* <Button type="button" class="btn"> Submit </Button> */}
                    </div>
                </form>
            </div>
        </div>
    )
}


const EmployeeCreate = () => {
    console.log(`hit>>>>>>>>>>`);
    const [allEmployees, setAllEmployees] = useState([]);
    const params = useLocation().search;
    const employeeType = new URLSearchParams(params).get('employeeType');
    const role = new URLSearchParams(params).get('role');
    const department = new URLSearchParams(params).get('department');
    
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

            let tempDirectory = tempEmployees.data.employeeDirectory;

            let result = [] ;
            tempEmployees.data.employeeDirectory.forEach(e=>{

                if(e.EmployeeType == employeeType){
                    result.push(e);
                } 
                if(e.Title == role) {
                    result.push(e);
                } 
                if(e.Department == department) {
                    result.push(e);
                }
  
            })

            let toDisplay = result.length > 0 ? result: tempDirectory;
            // console.log('toDisplay>>>>>>',toDisplay);
            setAllEmployees(toDisplay);
        })
    }

    useEffect(() => {
        fetchData()
    }, [employeeType, role, department]);

    const AddSingleEmployee = (singleEmployee) => {

        let query = `
            mutation AddSingleEmployee($FirstName: String!, $LastName: String, $Age: Int, $DateOfJoining: String, $Title: String, $Department: String, $EmployeeType: String, $CurrentStatus: Int) {
                addSingleEmployee(FirstName: $FirstName, LastName: $LastName, Age: $Age, DateOfJoining: $DateOfJoining, Title: $Title, Department: $Department, EmployeeType: $EmployeeType, CurrentStatus: $CurrentStatus) {
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

        fetch('http://localhost:7000/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query,
                variables: {
                    FirstName: singleEmployee.FirstName,
                    LastName: singleEmployee.LastName,
                    Age: singleEmployee.Age,
                    DateOfJoining: singleEmployee.DateOfJoining,
                    Title: singleEmployee.Title,
                    Department: singleEmployee.Department,
                    EmployeeType: singleEmployee.EmployeeType,
                    CurrentStatus: singleEmployee.CurrentStatus,
                }
            })
        }).then(async (response) => {
            console.log(__filename,`response 81`, response);

            let savedData = await response.json();
            console.log(__filename,`data to savedData 82`, savedData);
            fetchData();
        })
    }

    return (
        <div>
            <EmployeeCreationForm AddSingleEmployee={AddSingleEmployee} />
        </div>
    )
}


export default EmployeeCreate;