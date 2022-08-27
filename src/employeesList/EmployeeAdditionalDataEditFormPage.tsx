import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { BackButton } from "../BackButton";
import { Params, useParams } from "react-router-dom";
import { IEmployeeAdditionalData } from "./IEmployeeAdditionalData";
import "./formPage.css";
import { IEmployeesData } from "./IEmployeesData";

export interface IEmployeeAdditionalDataEditProps {
  employees: IEmployeesData[];
  handleUpdateEmplAdditionalData: (
    idPesel: string,
    newData: IEmployeeAdditionalData
  ) => void;
}

export function EmployeeAdditionalDataEditFormPage(
  props: IEmployeeAdditionalDataEditProps
): JSX.Element {
  const params: Readonly<Params<string>> = useParams();
  const idPesel: string = params.id || "";
  const index = props.employees.findIndex((el) => el.pesel === idPesel);

  const validationSchema = yup.object({
    streetWithNumber: yup
      .string()
      .min(3, "Za mało znaków")
      .max(30, "Za dużo znaków")
      .required("Wymagany"),

    postCode: yup
      .string()
      .min(4, "Za mało znaków")
      .max(10, "Za dużo znaków")
      .required("Wymagany"),

    city: yup
      .string()
      .min(3, "Za mało znaków")
      .max(20, "Za dużo znaków")
      .required("Wymagany"),

    phone: yup
      .string()
      .min(9, "Numer jest za krótki")
      .max(20, "Za dużo znaków")
      .required("Wymagany"),

    email: yup.string().email("Podaj poprawny e-mail").required("Wymagany"),
  });

  const formik = useFormik({
    initialValues: {
      streetWithNumber: props.employees[index].streetWithNumber,
      postCode: props.employees[index].postCode,
      city: props.employees[index].city,
      phone: props.employees[index].phone,
      email: props.employees[index].email,
    },

    validationSchema: validationSchema,

    onSubmit: (values, actions) => {
      props.handleUpdateEmplAdditionalData(idPesel, values);
      actions.setSubmitting(false);
      actions.resetForm({
        values: {
          streetWithNumber: "",
          postCode: "",
          city: "",
          phone: "",
          email: "",
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
          id="streetWithNumber"
          name="streetWithNumber"
          label="Ulica i nr domu/mieszkania"
          value={formik.values.streetWithNumber}
          onChange={formik.handleChange}
          error={
            formik.touched.streetWithNumber &&
            Boolean(formik.errors.streetWithNumber)
          }
          helperText={
            formik.touched.streetWithNumber && formik.errors.streetWithNumber
          }
        />
        <TextField
          fullWidth
          id="postCode"
          name="postCode"
          label="Kod pocztowy"
          value={formik.values.postCode}
          onChange={formik.handleChange}
          error={formik.touched.postCode && Boolean(formik.errors.postCode)}
          helperText={formik.touched.postCode && formik.errors.postCode}
        />
        <TextField
          fullWidth
          id="city"
          name="city"
          label="Miasto"
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={formik.touched.city && formik.errors.city}
        />
        <TextField
          fullWidth
          id="phone"
          name="phone"
          label="Nr telefonu"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <Button color="primary" variant="contained" fullWidth type="submit">
          Zatwierdź
        </Button>
      </form>
    </div>
  );
}