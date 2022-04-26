import { Card, CardActionArea, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

type language = 'en' | 'es' | 'de';

export const LanguageSelector = () => {
	const router = useRouter();

	const handleLocaleChange = (selectedLanguage: language) => {
		router.push(router.route, router.asPath, {
			locale: selectedLanguage,
		});
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
					onClick={() => handleLocaleChange('es')}
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
					onClick={() => handleLocaleChange('en')}
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
					onClick={() => handleLocaleChange('de')}
				>
					<Typography color='black' component='h3' fontWeight='bold'>
						DE
					</Typography>
				</CardActionArea>
			</Card>
		</>
	);
};
