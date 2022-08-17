import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export interface IBackButtonProps {
	to: string;
}

export function BackButton(props: IBackButtonProps): JSX.Element {
	return (
		<Button
			variant='outlined'
			component={Link}
			to={props.to}
		>
			&lt; WSTECZ
		</Button>
	);
}
