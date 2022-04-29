import { ChangeEvent, FC } from 'react';

import { InputAdornment, InputBase, Paper } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

interface Props {
	search: string;
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const MembersFinder: FC<Props> = ({ search, handleSearch }) => {
	return (
		<Paper
			sx={{
				p: '4px 4px',
				height: '50px',
				my: 2,
				display: 'flex',
				alignItems: 'center',
				width: '100%',
			}}
		>
			<InputAdornment position='start' sx={{ ml: 2 }}>
				<AccountCircle sx={{ color: '#333' }} />
			</InputAdornment>
			<InputBase
				sx={{ ml: 1, flex: 1 }}
				placeholder='Buscar miembro'
				value={search}
				onChange={handleSearch}
			/>
		</Paper>
	);
};
