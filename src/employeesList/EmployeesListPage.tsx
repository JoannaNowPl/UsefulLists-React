import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  Switch,
} from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { IEmployeeMainData } from "./IEmployeeMainData";
import { EmployeesMainTableHead } from "./EmployeesMainTableHead";
import { EmployeesMainTableToolbar } from "./EmployeesMainTableToolbar";
import { Link } from "react-router-dom";
import { EmployeesMainTablePagination } from "./EmployeesMainTablePagination";
import { BackButton } from "../BackButton";
import "./EmployeesListPage.css";

export interface IEmployeesListPageProps {
  employees: IEmployeeMainData[];
  selected: readonly string[];
  handleSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectClick: (event: React.MouseEvent<unknown>, id: string) => void;
  onDeleteEmpClick:  () => void
}

export default function EmployeesListPage(props: IEmployeesListPageProps) {
  function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  type Order = "asc" | "desc";

  function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key
  ): (a: { [key in Key]: string }, b: { [key in Key]: string }) => number {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  // This method is created for cross-browser compatibility, if you don't
  // need to support IE11, you can use Array.prototype.sort() directly
  function stableSort(
    array: readonly IEmployeeMainData[],
    comparator: (a: IEmployeeMainData, b: IEmployeeMainData) => number
  ) {
    const stabilizedThis = array.map(
      (el, index) => [el, index] as [IEmployeeMainData, number]
    );
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] =
    React.useState<keyof IEmployeeMainData>("lastName");
  
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof IEmployeeMainData
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (pesel: string) => props.selected.indexOf(pesel) !== -1;

  // Avoid a layout jump when reaching the last page with empty employees.
  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - props.employees.length)
      : 0;

  return (<div className="EmployeesListPage">
    <BackButton to={"/"}/>
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EmployeesMainTableToolbar
          numSelected={props.selected.length}
          onDeleteEmpClick={props.onDeleteEmpClick}
        />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EmployeesMainTableHead
              numSelected={props.selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={props.handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={props.employees.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                employees.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(props.employees, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.pesel);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow hover>
                      <TableCell padding="checkbox">
                        <Checkbox
                          onClick={(event) => props.handleSelectClick(event, row.pesel)}
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.pesel}
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell align="left">{row.lastName}</TableCell>
                      <TableCell align="left">{row.firstName}</TableCell>
                      <TableCell align="left">{row.position}</TableCell>
                      <TableCell align="left">{row.pesel}</TableCell>
                      <TableCell align="left">
                        <IconButton
                          size="small"
                          aria-label="Dane szczegółowe"
                          component={Link}
                          to={`/employeeDetails/${row.pesel}`}
                          color="secondary"
                        >
                          <DoubleArrowIcon fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <EmployeesMainTablePagination
          employees={props.employees}
          page={page}
          rowsPerPage={rowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Wąskie wiersze"
      />
   
    </Box>
    </div>
  );
}
