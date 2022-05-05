import { ChangeEvent, useState, useEffect } from 'react';
import { useTranslation } from 'next-export-i18n';

import { Grid, Box } from '@mui/material';
import { DirectivesList } from '.';
import Card from '../../card/index';

import { MEMBERS } from '../../../database/static/members';
import { IMember } from '../../../interfaces';

export const DirectivesContent = () => {
	const [directives, setDirectives] = useState(MEMBERS);
	const [memberDetail, setMemberDetail] = useState <IMember> ( {
		'first_name': '',
		'id': '',
		'last_name': '',
		'position': '',
		'second_surname': '',
		'direction': '',
		'phone': '',
		'email': '',
	})

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
			setDirectives(foundMembers);
		} else {
			setDirectives(MEMBERS);
		}
	}, [search]);

	return (
		<Grid container spacing={2} justifyContent={'space-between'}>
			<Grid item xs={4}>
				<DirectivesList directives={directives} setMemberDetail={setMemberDetail}/>
			</Grid>
			<Grid item xs={8}>
				<Card 
					position={memberDetail.position}
					first_name={memberDetail.first_name}
					last_name={memberDetail.last_name}
					second_surname={memberDetail.second_surname}
					direction={memberDetail.direction}
					phone={memberDetail.phone}
					email={memberDetail.email}				
				/>
			</Grid>
		</Grid>
	);
};
