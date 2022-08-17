import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { EmployeeDetailsPage } from "./employeesList/EmployeeDetailsPage";
import { EmployeesData, IEmployeesData } from "./employeesList/EmployeesData";
import EmployeesListPage from "./employeesList/EmployeesListPage";
import { MainPage } from "./MainPage";


function App() {  


  const [employeesData, setEmployeesMainData] = React.useState<IEmployeesData[]> (
    EmployeesData
  )

  return (
    <>    
      <Routes>
        <Route path = "/" element={<MainPage/>}/>
        <Route path="/employeesList" element={<EmployeesListPage employees={employeesData}  />} />
        <Route path="/employeeDetails/:id" element={<EmployeeDetailsPage employees={employeesData}/>} />
      </Routes>
    </>
  );
}

export default App;
