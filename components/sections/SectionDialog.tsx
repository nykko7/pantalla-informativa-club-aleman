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
	Grid,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	Switch,
} from '@mui/material';
import { ISection } from '../../interfaces';
import { useTranslation } from 'next-i18next';
import * as _ from 'lodash';
import { MembersContent } from './members';

interface Dialog {
	open: boolean;
	section: ISection;

	//Methods:
	handleClose: () => void;
}

export const SectionDialog = ({ open, section, handleClose }: Dialog) => {
	const { t } = useTranslation();
	return (
		<>
			<Dialog
				fullWidth={true}
				maxWidth={'xl'}
				open={open}
				onClose={handleClose}
				PaperProps={{ sx: { height: '90vh' } }}
			>
				<DialogTitle>
					{_.upperFirst(t(`sections.${section.id}.title`))}
				</DialogTitle>
				<DialogContent>
					{section.id === 'members' ? (
						<MembersContent />
					) : (
						<DialogContentText>
							{`sections.${section.id}.title`}
						</DialogContentText>
					)}
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
