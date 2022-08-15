import { IEmployeeDetails } from "./IEmployeeDatails";
import { IEmployeeMainData } from "./IEmployeeMainData";

export interface IEmployee {
    readonly employeeMainData: IEmployeeMainData;
    readonly employeeDetails?: IEmployeeDetails;
}