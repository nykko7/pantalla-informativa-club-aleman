import { FC } from 'react';
import {
	alpha,
	Card,
	CardActionArea,
	CardMedia,
	Grid,
	SvgIcon,
	Typography,
} from '@mui/material';
import { ISection } from '../../interfaces';

import * as _ from 'lodash';
import { Box } from '@mui/material';

interface Props {
	section: ISection;
}

export const SectionCard: FC<Props> = ({ section }) => {
	return (
		<Grid item width='50%'>
			<Card elevation={1} sx={{ borderRadius: '10px' }}>
				{/* <CardActionArea onClick={() => handleClick(section)}> */}
				<CardActionArea onClick={() => {}}>
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
								variant='h6'
								component='h3'
								fontWeight='bold'
							>
								{_.upperCase(section.title)}
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
