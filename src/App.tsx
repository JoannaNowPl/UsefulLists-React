import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { EmployeeAdditionalDataAddFormPage } from "./employeesList/EmployeeAdditionalDataAddForm.Page";
import { EmployeeAdditionalDataEditFormPage } from "./employeesList/EmployeeAdditionalDataEditFormPage";
import { EmployeeDetailsPage } from "./employeesList/EmployeeDetailsPage";
import { EmployeeMainDataAddFormPage } from "./employeesList/EmployeeMainDataAddFormPage";
import { EmployeeMainDataEditFormPage } from "./employeesList/EmployeeMainDataEditFormPage";
import { EmployeesData } from "./employeesList/EmployeesData";
import EmployeesListPage from "./employeesList/EmployeesListPage";
import { IEmployeeAdditionalData } from "./employeesList/IEmployeeAdditionalData";
import { IEmployeeMainData } from "./employeesList/IEmployeeMainData";
import { IEmployeesData } from "./employeesList/IEmployeesData";
import { MainPage } from "./MainPage";

function App() {
  const employeesDemoData: IEmployeesData[] = EmployeesData;

  const [employeesData, setEmployeesData] =
    React.useState<IEmployeesData[]>(employeesDemoData);

  const [selected, setSelected] = React.useState<readonly string[]>([]);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const allSelected = employeesData.map((n) => n.pesel);
      setSelected(allSelected);
      return;
    }
    setSelected([]);
  };

  const handleSelectClick = (
    event: React.MouseEvent<unknown>,
    id: string
  ): void => {
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

  const handleDeleteEmpClick = (): void => {
    const updatedEmployeesData = [];
    for (const el of employeesData) {
      if (selected.includes(el.pesel)) continue;
      updatedEmployeesData.push(el);
    }
    setEmployeesData(updatedEmployeesData);
    setSelected([]);
  };

  const handleAddEmpl = (newEmpl: IEmployeeMainData): void => {
    const tableWithId = [];
    for (const el of employeesData) tableWithId.push(el.pesel);
    if (tableWithId.includes(newEmpl.pesel))
      alert("Istnieje już pracownik z takim nr PESEL!");
    else employeesData.push(newEmpl);
    setEmployeesData(employeesData);
  };

  const handleEditEmplMainData = (
    updatedEmplMainData: IEmployeeMainData
  ): void => {
    const idPesel = updatedEmplMainData.pesel;
    const updatedEmployeesData = [];
    for (const el of employeesData) {
      if (el.pesel === idPesel) {
        const updatedEmpl = { ...el };
        updatedEmpl.lastName = updatedEmplMainData.lastName;
        updatedEmpl.firstName = updatedEmplMainData.firstName;
        updatedEmpl.position = updatedEmplMainData.position;
        updatedEmployeesData.push(updatedEmpl);
        continue;
      }
      updatedEmployeesData.push(el);
    }
    setEmployeesData(updatedEmployeesData);
  };

  const handleEmplAdditionalData = (
    idPesel: string,
    newData: IEmployeeAdditionalData
  ): void => {
    const updatedEmployeesData = [];
    for (const el of employeesData) {
      if (el.pesel === idPesel) {
        const updatedEmpl = { ...el };
        updatedEmpl.streetWithNumber = newData.streetWithNumber;
        updatedEmpl.postCode = newData.postCode;
        updatedEmpl.city = newData.city;
        updatedEmpl.phone = newData.phone;
        updatedEmpl.email = newData.email;
        updatedEmployeesData.push(updatedEmpl);
        continue;
      }
      updatedEmployeesData.push(el);
    }
    setEmployeesData(updatedEmployeesData);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/employeesList"
          element={
            <EmployeesListPage
              employees={employeesData}
              selected={selected}
              handleSelectAllClick={handleSelectAllClick}
              handleSelectClick={handleSelectClick}
              onDeleteEmpClick={handleDeleteEmpClick}
            />
          }
        />
        <Route
          path="/employeeDetails/:id"
          element={<EmployeeDetailsPage employees={employeesData} />}
        />
        <Route
          path="/addDataForm/:id"
          element={
            <EmployeeAdditionalDataAddFormPage
              employees={[]}
              handleAddEmplData={handleEmplAdditionalData}
            />
          }
        />
        <Route
          path="/addEmployeeForm"
          element={
            <EmployeeMainDataAddFormPage
              employees={employeesData}
              handleAddEmpl={handleAddEmpl}
            />
          }
        />
        <Route
          path="/edtiEmployeeMainData/:id"
          element={
            <EmployeeMainDataEditFormPage
              employees={employeesData}
              handleEditEmplMainData={handleEditEmplMainData}
            />
          }
        />
        <Route
          path="/edtiEmployeeAdditionalData/:id"
          element={
            <EmployeeAdditionalDataEditFormPage
              employees={employeesData}
              handleUpdateEmplAdditionalData={handleEmplAdditionalData}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
