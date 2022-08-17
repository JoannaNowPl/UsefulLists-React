import Button from "@mui/material/Button";
import { Link, Params, useParams } from "react-router-dom";
import { BackButton } from "../BackButton";
import { EmployeeAdditionalData } from "./EmployeeAdditionalData";
import { EmployeeMainData } from "./EmployeeMainData";
import { IEmployeesData } from "./EmployeesData";


// To finish:

export interface IEmployeeDetailsPageProps {
  employees: IEmployeesData[];
}

export function EmployeeDetailsPage(
  props: IEmployeeDetailsPageProps
): JSX.Element {
  const params: Readonly<Params<string>> = useParams();
  const idPesel: string = params.id || "";
  const index = props.employees.findIndex((el) => el.pesel === idPesel);

  function renderAdditionalData():JSX.Element {
    if (props.employees[index].streetWithNumber || props.employees[index].city || props.employees[index].postCode || props.employees[index].phone || props.employees[index].email) {
      return (
        <EmployeeAdditionalData employeeAdditionalData={props.employees[index]}/>
      );
    }
    return <Button component={Link} to="additionalData"> Dodaj dane</Button>
    
  }

  return (
    <div>
      <BackButton to={"/employeesList"}/>
      <h3>Dane szczegółowe</h3>
      <EmployeeMainData employeeMainData={props.employees[index]} />
      <br/>
      <br/>
      {renderAdditionalData()}
    </div>
  );
}
