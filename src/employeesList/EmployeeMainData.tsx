import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import { IEmployeeMainData } from "./IEmployeeMainData";
import CreateIcon from "@mui/icons-material/Create";
import Tooltip from "@mui/material/Tooltip";

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
              <TableCell variant="head">
                {" "}
                <span>NAZWISKO</span>
              </TableCell>
              <TableCell variant="head">
                {" "}
                <span>IMIĘ</span>{" "}
              </TableCell>
              <TableCell variant="head">
                {" "}
                <span>STANOWISKO</span>{" "}
              </TableCell>
              <TableCell variant="head">
                {" "}
                <span>PESEL</span>{" "}
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow hover>
              <TableCell>{props.employeeMainData.lastName}</TableCell>
              <TableCell>{props.employeeMainData.firstName}</TableCell>
              <TableCell>{props.employeeMainData.position}</TableCell>
              <TableCell>{props.employeeMainData.pesel}</TableCell>
              <TableCell align="right">
                <Tooltip title="Edytuj">
                  <IconButton
                    size="small"
                    aria-label="Edytuj"
                    component={Link}
                    to={`/edtiEmployeeMainData/${props.employeeMainData.pesel}`}
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
