import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material';
import * as _ from 'lodash';
import { useTranslation } from 'next-i18next';

import { ISection } from '../../interfaces';
import { MembersContent } from './members';
import { DirectivesContent } from './directives';

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
				<DialogContent
					sx={{
						paddingY: '0px',
					}}
				>
					{section.id === 'members' ? (
						<MembersContent />
					) : section.id === 'directives' ? (
						<DirectivesContent />
					) : (
						<DialogContentText>
							{t(`sections.${section.id}.description`)}
						</DialogContentText>
					)}
				</DialogContent>
				<DialogActions sx={{ padding: 2 }}>
					<Button
						color='error'
						size={'large'}
						variant={'outlined'}
						onClick={handleClose}
					>
						{t('ui.close')}
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};
