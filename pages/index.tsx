import { useState } from 'react';

import Image from 'next/image';
import { Box, Grid, Typography } from '@mui/material';
import { useTranslation } from 'next-export-i18n';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { SectionList, Logo } from '../components/sections';
import { LanguageSelector } from '../components/home';

import { SECTIONS } from '../database/static/sections';
import ClubImage from '../assets/img/club_aleman.jpeg';

interface Props {
	src: string;
}

function imageLoader({ src }: Props) {
	return `/images/${src}`; // REPLACE WITH YOUR IMAGE DIRECTORY
}

export default function Home() {
	const [sections, setSections] = useState(SECTIONS);

	const { t } = useTranslation();

	return (
		<Grid container paddingTop={4} paddingX={4}>
			<Grid item xs={12}>
				<Logo />
				<Typography
					variant='h3'
					component='h1'
					fontWeight='bold'
					paddingY={2}
					display='inline'
				>
					{t('german_club') + ' '}
				</Typography>
				<Typography
					variant='h3'
					component='h1'
					fontWeight='light'
					display='inline'
				>
					Puerto Montt
				</Typography>
			</Grid>
			<Grid item xs={12} display={'flex'} alignContent='stretch'>
				<Box width='50%' marginRight={3}>
					<Image
						loader={(ClubImage) => ClubImage.src}
						unoptimized
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

type language = 'es' | 'en' | 'de';

interface props {
	locale: language;
}

// export async function getStaticProps({ locale }: any) {
// 	return {
// 		props: {
// 			...(await serverSideTranslations(locale, ['common', 'positions'])),
// 		},
// 	};
// }
