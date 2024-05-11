import {Route, Routes } from "react-router-dom";

import HomePage from "./HomePage";
import EmployeeSearch from "./EmployeeSearch";
import EmployeeDirectory from "./EmployeeDirectory";
import EmployeeEdit from "./EmployeeEdit";
import EmployeeCreate from "./EmployeeCreate";
import EmployeeRetirement from "./EmployeeRetirement";

function pageRoutes() {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/search' element={<EmployeeSearch/>} />
            <Route path='/list' element={<EmployeeDirectory/>} />
            <Route path='/addEmployee' element={<EmployeeCreate/>} />
            <Route path='/edit/:id' element={<EmployeeEdit/>} />
            <Route path='/upcomingRetirements' element={<EmployeeRetirement/>} />
        </Routes>
    )
}

export default pageRoutes;