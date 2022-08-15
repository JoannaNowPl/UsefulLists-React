import { Params, useParams } from "react-router-dom";
import { EmployeeMainData } from "./EmployeeMainData";
import { IEmployee } from "./IEmployee";

// To finish:

export interface IEmployeeDetailsPageProps {
    employees: IEmployee []
}

export function EmployeeDetailsPage(props: IEmployeeDetailsPageProps):JSX.Element {
    
    const params: Readonly<Params<string>> = useParams();
	const index: number = parseInt(params.id || '');

    const employee:IEmployee = props.employees[index];

    return <div>
        <h3>Dane szczegółowe</h3>
       <EmployeeMainData employeeMainData={employee.employeeMainData}/>
        
        </div>

}