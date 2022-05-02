import { ChangeEvent, useState, useEffect } from 'react';

import { Grid, Box } from '@mui/material';
import { MembersList } from './';

import { MEMBERS } from '../../../database/static/members';
import { MembersFinder } from './MembersFinder';

export const MembersContent = () => {
	const [members, setMembers] = useState(MEMBERS);

	const [search, setSearch] = useState('');

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
	};

	useEffect(() => {
		if (search.length > 0) {
			const foundMembers = MEMBERS.filter((member) => {
				return (
					member.first_name.toLowerCase().includes(search.toLowerCase()) ||
					member.last_name.toLowerCase().includes(search.toLowerCase()) ||
					member.second_surname.toLowerCase().includes(search.toLowerCase())
				);
			});
			setMembers(foundMembers);
		} else {
			setMembers(MEMBERS);
		}
	}, [search]);

	return (
		<Grid container spacing={2} justifyContent={'space-between'}>
			<Grid item xs={4}>
				{/* <MembersFinder search={search} handleSearch={handleSearch} /> */}
				<MembersList members={members} />
			</Grid>
			<Grid item xs={8}>
				<Box
					display={'flex'}
					justifyContent='center'
					width='100%'
					height='100%'
				>
					<Box sx={{ backgroundColor: '#333' }} width='80%' height='100%'></Box>
				</Box>
			</Grid>
		</Grid>
	);
};
