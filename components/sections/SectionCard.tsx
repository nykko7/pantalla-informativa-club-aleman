import { FC, useState } from 'react';

import {
	alpha,
	Box,
	Card,
	CardActionArea,
	CardMedia,
	Grid,
	SvgIcon,
	Typography,
} from '@mui/material';
import * as _ from 'lodash';
import { useTranslation } from 'next-export-i18n';

import { ISection } from '../../interfaces';
import { SectionDialog } from './';

interface Props {
	section: ISection;
}

export const SectionCard: FC<Props> = ({ section }) => {
	const [openDialog, setOpenDialog] = useState(false);
	const { t } = useTranslation();

	const handleClickOpen = () => {
		setOpenDialog(true);
	};

	const handleClose = () => {
		setOpenDialog(false);
	};

	return (
		<Grid item>
			<SectionDialog
				section={section}
				open={openDialog}
				handleClose={() => handleClose()}
			/>
			<Card elevation={0} sx={{ borderRadius: '10px', height: '100%' }}>
				{/* <CardActionArea onClick={() => handleClick(section)}> */}
				<CardActionArea
					sx={{
						height: '100%',
					}}
					onClick={() => handleClickOpen()}
				>
					<CardMedia
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							padding: 3,
						}}
					>
						<Box>
							<Typography
								color='black'
								variant='h5'
								component='h3'
								fontWeight='bold'
							>
								{_.upperCase(t(`sections.${section.id}.title`))}
							</Typography>
							<Typography color='black' variant='body2' component='p'>
								{t(`sections.${section.id}.description`)}
							</Typography>
						</Box>
						<SvgIcon
							component={section.icon}
							sx={{
								fontSize: '50px',
								color: 'black',
								backgroundColor: alpha(section.color, 0.5),
								border: `2px solid ${section.color}`,
								borderRadius: '10px',
								padding: 1,
							}}
						></SvgIcon>
					</CardMedia>
				</CardActionArea>
			</Card>
		</Grid>
	);
};
