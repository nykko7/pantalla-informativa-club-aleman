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
import { ISection } from '../../interfaces';

import * as _ from 'lodash';
import { SectionDialog } from './';
import { useTranslation } from 'next-i18next';

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
			<Card elevation={1} sx={{ borderRadius: '10px', height: '100%' }}>
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
								{_.upperCase(t(`sections.${section.id}`))}
							</Typography>
							<Typography color='black' variant='body2' component='p'>
								{section.description}
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
