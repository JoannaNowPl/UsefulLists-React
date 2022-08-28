import Button from "@mui/material/Button";
import { Link, Params, useParams } from "react-router-dom";
import { BackButton } from "../BackButton";
import { EmployeeAdditionalData } from "./EmployeeAdditionalData";
import { EmployeeMainData } from "./EmployeeMainData";
import "./EmployeeDetailsPage.css";
import { IEmployeesData } from "./IEmployeesData";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export interface IEmployeeDetailsPageProps {
  employees: IEmployeesData[];
}

export function EmployeeDetailsPage(
  props: IEmployeeDetailsPageProps
): JSX.Element {
  const params: Readonly<Params<string>> = useParams();
  const idPesel: string = params.id || "";
  const index = props.employees.findIndex((el) => el.pesel === idPesel);

  function renderAdditionalData(): JSX.Element {
    if (
      props.employees[index].streetWithNumber ||
      props.employees[index].city ||
      props.employees[index].postCode ||
      props.employees[index].phone ||
      props.employees[index].email
    ) {
      return <EmployeeAdditionalData employees={props.employees[index]} />;
    }
    return (
      <Button color="secondary" variant="outlined" component={Link} to={`/addDataForm/${idPesel}`}>
        <span>Dodaj dane</span> <KeyboardArrowRightIcon fontSize="medium"/>
      </Button>
    );
  }

  return (
    <div className="EmployeeDetailsPage">
      <BackButton to={"/employeesList"} />
      <h3>Dane szczegółowe</h3>
      <EmployeeMainData employeeMainData={props.employees[index]} />
      <br />
      <br />
      {renderAdditionalData()}
    </div>
  );
}
