import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { BackButton } from "../BackButton";
import { IEmployeesData } from "./EmployeesData";
import "./EmployeeAdditionalDataAddFormPage.css";
import { IEmployeeMainData } from "./IEmployeeMainData";
import { Link, Params, useParams } from "react-router-dom";

export interface IEmployeeMainDataEditProps {
  employees: IEmployeesData[];
  handleEditEmplMainData: (updatedEmplMainData: IEmployeeMainData) => void;
}

export function EmployeeMainDataEditFormPage(
  props: IEmployeeMainDataEditProps
): JSX.Element {
  const params: Readonly<Params<string>> = useParams();
  const idPesel: string = params.id || "";
  const index = props.employees.findIndex((el) => el.pesel === idPesel);

  const validationSchema = yup.object({
    lastName: yup
      .string()
      .min(3, "Za mało znaków")
      .max(30, "Za dużo znaków")
      .required("Wymagany"),

    firstName: yup
      .string()
      .min(3, "Za mało znaków")
      .max(10, "Za dużo znaków")
      .required("Wymagany"),

    position: yup
      .string()
      .min(3, "Za mało znaków")
      .max(20, "Za dużo znaków")
      .required("Wymagany"),

    pesel: yup
      .string()
      .min(11, "Za mało znaków")
      .max(11, "Za dużo znaków")
      .required("Wymagany"),
  });

  const formik = useFormik({
    initialValues: {
      lastName: props.employees[index].lastName,
      firstName: props.employees[index].firstName,
      position: props.employees[index].position,
      pesel: props.employees[index].pesel,
    },

    validationSchema: validationSchema,

    onSubmit: (values, actions) => {
      props.handleEditEmplMainData(values);
      actions.setSubmitting(false);
      actions.resetForm({
        values: {
          lastName: "",
          firstName: "",
          position: "",
          pesel: "",
        },
      });
    },
  });

  return (
    <div>
      <BackButton to={`/employeeDetails/${idPesel}`} />
      <br />
      <br />
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="lastName"
          name="lastName"
          label="Nazwisko"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <TextField
          fullWidth
          id="firstName"
          name="firstName"
          label="Imię"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          fullWidth
          id="position"
          name="position"
          label="Stanowisko"
          value={formik.values.position}
          onChange={formik.handleChange}
          error={formik.touched.position && Boolean(formik.errors.position)}
          helperText={formik.touched.position && formik.errors.position}
        />
        <TextField
          fullWidth
          id="pesel"
          name="pesel"
          label="PESEL"
          value={formik.values.pesel}
          error={formik.touched.pesel && Boolean(formik.errors.pesel)}
          helperText={formik.touched.pesel && formik.errors.pesel}
          color="error"
        />

        <Button color="primary" variant="contained" fullWidth type="submit">
          Zatwierdź
        </Button>
      </form>
    </div>
  );
}
