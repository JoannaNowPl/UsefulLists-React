import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { IEmployeeMainData } from "./IEmployeeMainData";

export interface IEmployeeMainDataProps {
  employeeMainData: IEmployeeMainData;
}

export function EmployeeMainData(props: IEmployeeMainDataProps): JSX.Element {
  return (
    <div>
      <TableContainer>
        <Table
          sx={{ minWidth: 750 }}
          aria-labelledby="Dane podstawowe pracownika"
        >
          <TableHead>
            <TableRow>
              <TableCell> NAZWISKO</TableCell>
              <TableCell> IMIĘ </TableCell>
              <TableCell> STANOWISKO </TableCell>
              <TableCell> PESEL </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{props.employeeMainData.lastName}</TableCell>
              <TableCell>{props.employeeMainData.firstName}</TableCell>
              <TableCell>{props.employeeMainData.position}</TableCell>
              <TableCell>{props.employeeMainData.pesel}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
