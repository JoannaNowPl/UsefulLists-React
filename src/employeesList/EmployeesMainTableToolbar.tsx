import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { IEmployeesMainTableToolbarProps } from "./IEmployeesMainTableToolbarProps";
import { alpha } from "@mui/material/styles";
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";

export function EmployeesMainTableToolbar(props: IEmployeesMainTableToolbarProps)  {
    const { numSelected, onDeleteEmpClick } = props;
  
    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.activatedOpacity
              ),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: "1 1 100%" }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            Wybrano {numSelected} 
          </Typography>
        ) : (
          <Typography
            sx={{ flex: "1 1 100%" }}
            variant="h6"
            id="tableTitle"
            component="div"
            fontWeight={700}
          >
            LISTA PRACOWNIKÓW
          </Typography>
        )}
        {numSelected > 0 ? (
          <Tooltip title="Usuń">
            <IconButton onClick={onDeleteEmpClick} >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Dodaj pracownika">
            <IconButton component={Link} to= {"/addEmployeeForm"}>
              <AddIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    );
  };