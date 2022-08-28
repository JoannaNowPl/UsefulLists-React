import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { BackButton } from "../BackButton";
import { IEmployeeMainData } from "./IEmployeeMainData";
import { IEmployeesData } from "./IEmployeesData";

export interface IEmployeeMainDataProps {
  employees: IEmployeesData[];
  handleAddEmpl: (newEmpl: IEmployeeMainData) => void;
}

export function EmployeeMainDataAddFormPage(
  props: IEmployeeMainDataProps
): JSX.Element {
  const validationSchema = yup.object({
    lastName: yup
      .string()
      .min(3, "Za mało znaków")
      .max(20, "Za dużo znaków")
      .required("Wymagany"),

    firstName: yup
      .string()
      .min(3, "Za mało znaków")
      .max(12, "Za dużo znaków")
      .required("Wymagany"),

    position: yup
      .string()
      .min(3, "Za mało znaków")
      .max(30, "Za dużo znaków")
      .required("Wymagany"),

    pesel: yup
      .string()
      .min(11, "Za mało znaków")
      .max(11, "Za dużo znaków")
      .required("Wymagany"),
  });

  const formik = useFormik({
    initialValues: {
      lastName: "",
      firstName: "",
      position: "",
      pesel: "",
    },

    validationSchema: validationSchema,

    onSubmit: (values, actions) => {
      props.handleAddEmpl(values);
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
      <BackButton to={"/employeesList"} />
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
          margin="normal"
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
          margin="normal"
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
          margin="normal"
        />
        <TextField
          fullWidth
          id="pesel"
          name="pesel"
          label="PESEL"
          value={formik.values.pesel}
          onChange={formik.handleChange}
          error={formik.touched.pesel && Boolean(formik.errors.pesel)}
          helperText={formik.touched.pesel && formik.errors.pesel}
          margin="normal"
        />

        <Button color="primary" variant="contained" fullWidth type="submit">
          Zatwierdź
        </Button>
      </form>
    </div>
  );
}
