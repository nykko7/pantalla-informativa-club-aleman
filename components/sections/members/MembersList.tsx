import { FC } from 'react';
import { useTranslation } from 'next-export-i18n';

import {
	Avatar,
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
		Member: [] as IMember[],
		Honor_member: [] as IMember[],
	};

	for (const member of members) {
		if (
			member.position === 'honor_member' ||
			member.position === 'honor_advisor'
		) {
			positions['Honor_member'].push(member);
		} else if (member.position === 'member') {
			positions['Member'].push(member);
		}
	}
	return positions;
};

export const MembersList: FC<Props> = ({ members }) => {
	const positions = groupByPosition(members);
	const { t } = useTranslation();
	return (
		<List
			sx={{
				width: '100%',
				bgcolor: 'background.paper',
				position: 'relative',
				overflow: 'auto',
				height: 'calc(100vh - 250px)',
				'& ul': { padding: 0 },
			}}
			subheader={<li />}
		>
			{/* {Object.keys(positions).map((position: string) => (
				<li key={`${position}`}>
					<ul>
						<ListSubheader>
							<Typography variant='h6' component='h6'>
								{t(`positions.${position.toLowerCase()}.name`)}
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
												{t(`positions.${member.position}.name`)}
											</Typography>
										}
									/>
								</ListItemButton>
							</ListItem>
						))}
					</ul>
				</li>
			))} */}
			<li key={'honor_member'}>
				<ul>
					<ListSubheader>
						<Typography variant='h6' component='h6'>
							{t(`positions.honor_member.name`)}
						</Typography>
					</ListSubheader>

					{positions['Honor_member'].map((member: IMember) => (
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
											{t(`positions.${member.position}.name`)}
											{/* {t(`${member.position}`)} */}
										</Typography>
									}
								/>
							</ListItemButton>
						</ListItem>
					))}
				</ul>
			</li>
			<li key={'member'}>
				<ul>
					<ListSubheader>
						<Typography variant='h6' component='h6'>
							{t(`positions.member.name`)}
						</Typography>
					</ListSubheader>

					{positions['Member'].map((member: IMember) => (
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
											{t(`positions.${member.position}.name`)}
											{/* {t(`${member.position}`)} */}
										</Typography>
									}
								/>
							</ListItemButton>
						</ListItem>
					))}
				</ul>
			</li>
		</List>
	);
};
