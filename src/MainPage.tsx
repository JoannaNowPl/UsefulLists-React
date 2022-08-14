import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./MainPage.css";

export function MainPage(): JSX.Element {
  return (
    <div className="mainPage">
      <p>
            <Button variant="contained" component={Link} to={"/employeesList"}>Lista pracowników</Button>
       
      </p>
    </div>
  );
}
