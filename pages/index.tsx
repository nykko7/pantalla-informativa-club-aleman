import { useState } from 'react';
import Image from 'next/image';

import { Box, Grid, Typography } from '@mui/material';
import ClubImage from '../assets/img/club_aleman.jpeg';
import { SECTIONS } from '../database/static/sections';
import { SectionList, Logo } from '../components/sections';
import { LanguageSelector } from '../components/ui';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

export default function Home() {
	const [sections, setSections] = useState(SECTIONS);
	const { locale } = useRouter();

	return (
		<Grid
			container
			flexDirection='row'
			justifyContent='space-between'
			alignItems={'center'}
			paddingTop={4}
			paddingX={4}
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
			<Grid item xs={12} display={'flex'} alignContent='stretch'>
				<Box width='50%' marginRight={3}>
					<Image
						src={ClubImage}
						alt='Imágen del club'
						objectFit='cover'
						layout='responsive'
						style={{ borderRadius: '10px' }}
					/>
				</Box>
				<Box width='50%' marginLeft={3}>
					<SectionList sections={sections} />
				</Box>
			</Grid>
			<Grid item width='50%' display={'flex'}>
				<LanguageSelector />
			</Grid>
		</Grid>
	);
}

type language = 'en' | 'es' | 'de';

interface props {
	locale: language;
}

export async function getStaticProps({ locale }: any) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
}
