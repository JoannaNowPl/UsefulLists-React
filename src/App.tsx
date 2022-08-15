import { Route, Routes } from "react-router-dom";
import "./App.css";
import { EmployeeDetailsPage } from "./employeesList/EmployeeDetailsPage";
import EmployeesListPage from "./employeesList/EmployeesListPage";
import { MainPage } from "./MainPage";


function App() {
  return (
    <>    
      <Routes>
        <Route path = "/" element={<MainPage/>}/>
        <Route path="/employeesList" element={<EmployeesListPage />} />
        <Route path="/employeeDetails/:id" element={<EmployeeDetailsPage employees={employees}/>} />
      </Routes>
    </>
  );
}

export default App;
