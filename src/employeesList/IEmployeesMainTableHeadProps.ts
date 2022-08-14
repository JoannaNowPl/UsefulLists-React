import { IEmployeeMainData } from "./IEmployeeMainData";

type Order = "asc" | "desc"; 

export interface IEmployeesMainTableHeadProps {
    numSelected: number;
    onRequestSort: (
      event: React.MouseEvent<unknown>,
      property: keyof IEmployeeMainData
    ) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
  }