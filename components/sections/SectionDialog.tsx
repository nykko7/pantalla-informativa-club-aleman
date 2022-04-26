import { useState } from 'react';

import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogProps,
	DialogTitle,
	FormControl,
	FormControlLabel,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	Switch,
} from '@mui/material';
import { ISection } from '../../interfaces';
// import * as _ from 'lodash'

interface Dialog {
	open: boolean;
	section: ISection;

	//Methods:
	handleClose: () => void;
}

export const SectionDialog = ({ open, section, handleClose }: Dialog) => {
	return (
		<>
			<Dialog
				fullWidth={true}
				maxWidth={'xl'}
				open={open}
				onClose={handleClose}
				PaperProps={{ sx: { height: '90vh' } }}
			>
				<DialogTitle>{section.title}</DialogTitle>
				<DialogContent>
					<DialogContentText>{section.description}</DialogContentText>
				</DialogContent>
				<DialogActions sx={{ padding: 4 }}>
					<Button
						color='error'
						size={'large'}
						variant={'outlined'}
						onClick={handleClose}
					>
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};
