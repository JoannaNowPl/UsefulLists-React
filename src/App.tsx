import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { EmployeeDetailsPage } from "./employeesList/EmployeeDetailsPage";
import EmployeesListPage from "./employeesList/EmployeesListPage";
import { IEmployeeMainData } from "./employeesList/IEmployeeMainData";
import { MainPage } from "./MainPage";


function App() {  

  function createData(
    lastName: string,
    firstName: string,
    position: string,
    pesel: string,
    streetWithNumber?: string,
    postCode?: string,
    city?: string,
    phone?: string
  ){
    return { 
      lastName, firstName, position, pesel,
      // employeeDetails: {streetWithNumber, postCode, city, phone}
  } }
  
  const employeesDemoData:IEmployeeMainData []= [
    createData("Kowalczyk", "Hanna", "Księgowa", "85122700122"),
    createData("Nowak", "Grzegorz", "Kierownik Produkcji", "02220512654"),
    createData("Lato", "Jakub", "Technolog", "98071560233"),
    createData("Krakowiak", "Mateusz", "Pracownik Produkcji", "95041265981"),
    createData("Makowska", "Aneta", "Specjalista handlowy", "99060600754"),
    createData("Małek", "Anna", "Specjalista ds. kadr", "01232500741"),
    createData("Rafik", "Marek", "Pracownik Produkcji", "00312245731"),
    createData("Robkowski", "Dawid", "Pracownik Produkcji", "01322547738"),
    createData("Bukowska", "Elżbieta", "Pracownik Produkcji", "98050704598"),
    createData("Dąbrowski", "Jan", "Pracownik Produkcji", "82050804577"),
    createData("Dąbrowska", "Halina", "Pracownik Produkcji", "87040801895"),
  ];

  const [employeesMainData, setEmployeesMainData] = React.useState<IEmployeeMainData[]> (
    employeesDemoData  
  )

  // console.log(employeesDemoData);
  
  return (
    <>    
      <Routes>
        <Route path = "/" element={<MainPage/>}/>
        <Route path="/employeesList" element={<EmployeesListPage employees={employeesMainData}  />} />
        <Route path="/employeeDetails/:id" element={<EmployeeDetailsPage employees={employeesMainData}/>} />
      </Routes>
    </>
  );
}

export default App;
