import { Route, Routes } from "react-router-dom";
import "./App.css";
import EmployeesListPage from "./employeesList/EmployeesListPage";
import { MainPage } from "./MainPage";

function App() {
  return (
    <>    
      <Routes>
        <Route path = "/" element={<MainPage/>}/>
        <Route path="/employeesList" element={<EmployeesListPage />} />
      </Routes>
    </>
  );
}

export default App;
