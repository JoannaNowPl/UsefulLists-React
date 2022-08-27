import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { IEmployeeMainData } from "./IEmployeeMainData";
import { IEmployeesMainHeadCell } from "./IEmployeesMainHeadCell";
import { IEmployeesMainTableHeadProps } from "./IEmployeesMainTableHeadProps";
import { visuallyHidden } from "@mui/utils";
import "./EmployeesListPage.css";

const headCells: readonly IEmployeesMainHeadCell[] = [
  { id: "lastName", label: "NAZWISKO", numeric: false, disablePadding: false },
  { id: "firstName", label: "IMIĘ", numeric: false, disablePadding: false },
  {
    id: "position",
    label: "STANOWISKO",
    numeric: false,
    disablePadding: false,
  },
  { id: "pesel", label: "PESEL", numeric: false, disablePadding: false },
];


export function EmployeesMainTableHead(props: IEmployeesMainTableHeadProps) {
    const {
      onSelectAllClick,
      order,
      orderBy,
      numSelected,
      rowCount,
      onRequestSort,
    } = props;
    const createSortHandler =
      (property: keyof IEmployeeMainData) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
      };
    return (
      <TableHead className="TableHead">
        <TableRow >
          <TableCell padding="checkbox" >
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                "aria-label": "select all desserts",
              }}
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc" ? "sorted descending" : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
            
          ))}
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
    );
  }