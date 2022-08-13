import Button from "@mui/material/Button/Button";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import EmployeesListPage from "./employeesList/EmployeesListPage";

function App() {
  return (
    <>
      <div className="App">
        <p>
          <Link to="/employeesList">
            <Button variant="contained">Lista pracowników</Button>
          </Link>
        </p>
      </div>
      <Routes>
        <Route path="/employeesList" element={<EmployeesListPage />} />
      </Routes>
    </>
  );
}

export default App;
