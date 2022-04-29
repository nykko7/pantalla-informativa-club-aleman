import { FC } from 'react';

import {
	Avatar,
	Divider,
	Grid,
	List,
	ListItem,
	ListItemAvatar,
	ListItemButton,
	ListItemText,
	ListSubheader,
	Typography,
} from '@mui/material';
import { IMember } from '../../../interfaces';
import { randomColor } from '../../../utils';

interface Props {
	members: IMember[];
}

interface groupByPosition {
	[position: string]: IMember[];
}

const groupByPosition = (members: IMember[]): groupByPosition => {
	const positions = {
		Vorstands: [] as IMember[],
		'Ehren Mitglieder': [] as IMember[],
		Mitglieder: [] as IMember[],
	};

	for (const member of members) {
		if (
			[
				'1.Vorsitzender',
				'2.Vorsitzender',
				'Schriftwart',
				'Kassenwart',
				'Vorstandsmitglieder',
			].includes(member.position)
		)
			positions['Vorstands'].push(member);
		else if (
			['Ehren Beisitzender', 'Ehren Mitglieder'].includes(member.position)
		) {
			positions['Ehren Mitglieder'].push(member);
		} else {
			positions['Mitglieder'].push(member);
		}
	}

	return positions;
};

export const MembersList: FC<Props> = ({ members }) => {
	const positions = groupByPosition(members);
	return (
		<List
			sx={{
				width: '100%',
				bgcolor: 'background.paper',
				position: 'relative',
				overflow: 'auto',
				height: 'calc(90vh - 280px)',
				'& ul': { padding: 0 },
			}}
			subheader={<li />}
		>
			{Object.keys(positions).map((position: string) => (
				<li key={`${position}`}>
					<ul>
						<ListSubheader>
							<Typography variant='h6' component='h6'>
								{`${position}`}
							</Typography>
						</ListSubheader>

						{positions[`${position}`].map((member: IMember) => (
							<ListItem key={`${member.id}`} alignItems='flex-start'>
								<ListItemButton>
									<ListItemAvatar>
										<Avatar
											alt={`${member.first_name} ${member.last_name}`}
											sx={{ bgcolor: '#333' }}
										/>
									</ListItemAvatar>
									<ListItemText
										primary={
											<Typography fontWeight={'bold'}>
												{`${member.first_name} ${member.last_name} ${member.second_surname}`}
											</Typography>
										}
										secondary={
											<Typography
												variant='subtitle1'
												component='span'
												fontWeight={'light'}
											>
												{`${member.position}`}
											</Typography>
										}
									/>
								</ListItemButton>
							</ListItem>
						))}
					</ul>
				</li>
			))}
		</List>
	);
};
