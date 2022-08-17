import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { IEmployeeAdditionalData } from "./IEmployeeAdditionalData";

export interface IEmployeeAdditionalDataProps {
    employeeAdditionalData: IEmployeeAdditionalData;
  }
  
  export function EmployeeAdditionalData(props: IEmployeeAdditionalDataProps): JSX.Element {
    return (
      <div>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="Pozostałe dane pracownika"
          >
            <TableHead>
              <TableRow>
                <TableCell> ULICA I NR</TableCell>
                <TableCell> KOD POCZTOWY</TableCell>
                <TableCell> MIASTO</TableCell>
                <TableCell> NR TELEFONU</TableCell>
                <TableCell> E-MAIL</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{props.employeeAdditionalData.streetWithNumber}</TableCell>
                <TableCell>{props.employeeAdditionalData.postCode}</TableCell>
                <TableCell>{props.employeeAdditionalData.city}</TableCell>
                <TableCell>{props.employeeAdditionalData.phone}</TableCell>
                <TableCell>{props.employeeAdditionalData.email}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
  