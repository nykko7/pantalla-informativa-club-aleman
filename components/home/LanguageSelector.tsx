import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// import { useLanguageQuery } from 'next-export-i18n';
import { Card, CardActionArea, Typography } from '@mui/material';

type language = 'en' | 'es' | 'de';

export const LanguageSelector = () => {
	const router = useRouter();
	const [selectedLanguage, setSelectedLanguage] = useState('es');
	// const [query] = useLanguageQuery(selectedLanguage);

	useEffect(() => {}, [selectedLanguage]);

	const handleLocaleChange = (selectedLanguage: language) => {
		setSelectedLanguage(selectedLanguage);
		router.push(
			{
				pathname: router.pathname,
				query: { lang: selectedLanguage },
			},
			undefined,
			{ shallow: false },
		);
	};

	return (
		<>
			<Card
				elevation={0}
				sx={{
					borderRadius: '10px',
					margin: 3,
					marginLeft: 0,
					backgroundColor: '#CBCBCB',
				}}
			>
				<CardActionArea
					sx={{ padding: 2, fontWeight: 'bolder' }}
					onClick={() => {
						handleLocaleChange('es');
					}}
				>
					<Typography color='black' component='h3' fontWeight='bold'>
						ES
					</Typography>
				</CardActionArea>
			</Card>
			<Card
				elevation={0}
				sx={{
					borderRadius: '10px',
					margin: 3,
					marginLeft: 0,
					backgroundColor: '#CBCBCB',
				}}
			>
				<CardActionArea
					sx={{ padding: 2, fontWeight: 'bolder' }}
					onClick={() => {
						handleLocaleChange('en');
					}}
				>
					<Typography color='black' component='h3' fontWeight='bold'>
						EN
					</Typography>
				</CardActionArea>
			</Card>
			<Card
				elevation={0}
				sx={{
					borderRadius: '10px',
					margin: 3,
					marginLeft: 0,
					backgroundColor: '#CBCBCB',
				}}
			>
				<CardActionArea
					sx={{ padding: 2, fontWeight: 'bolder' }}
					onClick={() => {
						handleLocaleChange('de');
					}}
				>
					<Typography color='black' component='h3' fontWeight='bold'>
						DE
					</Typography>
				</CardActionArea>
			</Card>
		</>
	);
};
