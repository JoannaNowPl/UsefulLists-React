import { Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { EmployeeMainData } from "./EmployeeMainData";

// To finish:

const employee:IEmployee = props.employees[index]

export function EmployeeDetailsPage():JSX.Element {
    return <div>
        <h3>Dane szczegółowe</h3>
       <EmployeeMainData employeeMainData={employee.employeeMainData}/>
        
        </div>

}