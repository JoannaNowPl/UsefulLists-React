import { IEmployeeMainData } from "./IEmployeeMainData";

export interface IEmployeesMainHeadCell {
    disablePadding: boolean;
    id: keyof IEmployeeMainData;
    label: string;
    numeric: boolean;
    minWidth?: number;
  }