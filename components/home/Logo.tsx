import { Box } from '@mui/material';

export const Logo = () => {
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
			sx={{ backgroundColor: '#333' }}
		>
			Logo
		</Box>
	);
};
