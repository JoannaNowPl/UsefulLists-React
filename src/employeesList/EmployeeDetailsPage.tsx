import { Params, useParams } from "react-router-dom";
import { EmployeeMainData } from "./EmployeeMainData";
import { IEmployeeMainData } from "./IEmployeeMainData";

// To finish:

export interface IEmployeeDetailsPageProps {
  employees: IEmployeeMainData[];
}

export function EmployeeDetailsPage(
  props: IEmployeeDetailsPageProps
): JSX.Element {
  const params: Readonly<Params<string>> = useParams();
  const idPesel: string = params.id || "";
  const index = props.employees.findIndex((el) => el.pesel === idPesel);
  const employee: IEmployeeMainData = props.employees[index];

  return (
    <div>
      <h3>Dane szczegółowe</h3>
      <EmployeeMainData employeeMainData={employee} />
    </div>
  );
}
