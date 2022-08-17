import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

export interface IBackButtonProps {
	to: string;
}

export function BackButton(props: IBackButtonProps): JSX.Element {
	return (
		<Button
			variant='outlined'
			size="small"
			color="secondary"
			component={Link}
			to={props.to}		
			>
			<KeyboardArrowLeftIcon fontSize="small"/>WSTECZ
		</Button>
	);
}
