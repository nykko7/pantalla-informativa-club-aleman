import { useState } from 'react';
import Image from 'next/image';

import { Box, Grid, Typography } from '@mui/material';
import ClubImage from '../assets/img/club_aleman.jpeg';
import { SECTIONS } from '../database/static/sections';
import { SectionList, Logo } from '../components/home';

export default function Home() {
	const [sections, setSections] = useState(SECTIONS);

	return (
		<Grid
			container
			flexDirection='row'
			justifyContent='space-between'
			alignItems={'center'}
			padding={4}
		>
			<Grid item xs={12}>
				<Logo />
				<Typography variant='h3' component='h1' fontWeight='bold' paddingY={2}>
					Club Alemán{' '}
					<Box display='inline' fontWeight='light'>
						Puerto Montt
					</Box>
				</Typography>
			</Grid>
			<Grid item xs={12} md={6} height='100%'>
				<Box display={'flex'}>
					<Image
						src={ClubImage}
						alt='Logo'
						objectFit='cover'
						style={{ borderRadius: '10px' }}
					/>
				</Box>
			</Grid>
			<Grid item xs={12} md={6} height='100%'>
				<SectionList sections={sections} />
			</Grid>
		</Grid>
	);
}
