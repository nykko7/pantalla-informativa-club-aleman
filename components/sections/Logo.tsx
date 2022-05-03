import { useState } from 'react';
import Image from 'next/image';

import { Box } from '@mui/material';

import ClubLogo from '../../assets/img/club_logo.png';

interface Props {
	src: string;
}

export const Logo = () => {
	const [isFullScreen, setIsFullScreen] = useState(false);

	const handleFullScreen = () => {
		if (isFullScreen) {
			document.exitFullscreen();
			setIsFullScreen(false);
		} else {
			document.body.requestFullscreen();
			setIsFullScreen(true);
		}
	};

	return (
		<Box
			borderRadius={'50%'}
			height={'100px'}
			color={'#fff'}
			width={'100px'}
			alignItems='center'
			justifyContent={'center'}
			display={'flex'}
			fontWeight={'bold'}
			sx={{ backgroundColor: '#333', cursor: 'pointer' }}
			onClick={() => {
				handleFullScreen();
			}}
		>
			<Image
				loader={(ClubLogo) => ClubLogo.src}
				unoptimized
				src={ClubLogo}
				width={'100px'}
				height={'100px'}
				alt='Imágen del club'
				style={{ borderRadius: '10px' }}
			/>
		</Box>
	);
};
