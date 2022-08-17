import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { EmployeeDetailsPage } from "./employeesList/EmployeeDetailsPage";
import { EmployeesData, IEmployeesData } from "./employeesList/EmployeesData";
import EmployeesListPage from "./employeesList/EmployeesListPage";
import { IEmployeeMainData } from "./employeesList/IEmployeeMainData";
import { MainPage } from "./MainPage";


function App() {  

  const employeesDemoData:IEmployeesData [] = EmployeesData

  const [employeesMainData, setEmployeesMainData] = React.useState<IEmployeeMainData[]> (
    employeesDemoData  
  )

  const [selected, setSelected] = React.useState<readonly string[]>([]);
  
  

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {   
      const allSelected = employeesMainData.map((n) => n.pesel);   
      setSelected(allSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

const handleDeleteEmpClick = () => {
  const updatedEmployeesMainData = [];
  for (const el of employeesMainData) {
    if (selected.includes(el.pesel))
    continue    
    updatedEmployeesMainData.push(el)    
  }
  setEmployeesMainData(updatedEmployeesMainData)
}


  return (
    <>    
      <Routes>
        <Route path = "/" element={<MainPage/>}/>
        <Route path="/employeesList" element={<EmployeesListPage employees={employeesMainData} selected={selected} handleSelectAllClick={handleSelectAllClick} handleClick={handleClick} onDeleteEmpClick={handleDeleteEmpClick }  />} />
        <Route path="/employeeDetails/:id" element={<EmployeeDetailsPage employees={employeesMainData}/>} />
      </Routes>
    </>
  );
}

export default App;
