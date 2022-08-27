import TablePagination from "@mui/material/TablePagination";
import { IEmployeeMainData } from "./IEmployeeMainData";

export interface IEmployeesMainTablePaginationProps {
    employees: IEmployeeMainData[];
    rowsPerPage: number;
    page:number;
    handleChangePage: (event: unknown, newPage: number) => void;
    handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function EmployeesMainTablePagination (props:IEmployeesMainTablePaginationProps):JSX.Element {
    return <TablePagination
    rowsPerPageOptions={[5, 10, 25]}
    component="div"
    count={props.employees.length}
    rowsPerPage={props.rowsPerPage}
    page={props.page}
    onPageChange={props.handleChangePage}
    onRowsPerPageChange={props.handleChangeRowsPerPage}
    />
}

