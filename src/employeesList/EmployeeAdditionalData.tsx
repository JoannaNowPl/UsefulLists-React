import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import CreateIcon from "@mui/icons-material/Create";
import { IEmployeesData } from "./IEmployeesData";

export interface IEmployeeAdditionalDataProps {
  employees: IEmployeesData;
}

export function EmployeeAdditionalData(
  props: IEmployeeAdditionalDataProps
): JSX.Element {
  return (
    <div>
      <TableContainer>
        <Table
          sx={{ minWidth: 750 }}
          aria-labelledby="Pozostałe dane pracownika"
        >
          <TableHead>
            <TableRow>
              <TableCell> <span>ULICA I NR</span></TableCell>
              <TableCell> <span>KOD POCZTOWY</span> </TableCell>
              <TableCell> <span>MIASTO</span></TableCell>
              <TableCell> <span>NR TELEFONU</span></TableCell>
              <TableCell> <span>E-MAIL</span></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow hover>
              <TableCell>{props.employees.streetWithNumber}</TableCell>
              <TableCell>{props.employees.postCode}</TableCell>
              <TableCell>{props.employees.city}</TableCell>
              <TableCell>{props.employees.phone}</TableCell>
              <TableCell>{props.employees.email}</TableCell>
              <TableCell align="right">
                <Tooltip title="Edytuj">
                  <IconButton
                    size="small"
                    aria-label="Edytuj"
                    component={Link}
                    to={`/edtiEmployeeAdditionalData/${props.employees.pesel}`}
                  >
                    <CreateIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
