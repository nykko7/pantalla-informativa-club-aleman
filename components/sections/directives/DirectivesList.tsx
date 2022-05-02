import { FC } from 'react';
import { useTranslation } from 'next-i18next';

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
	directives: IMember[];
}

interface groupByPosition {
	[position: string]: IMember[];
}

const groupByPosition = (directives: IMember[]): groupByPosition => {
	const positions = {
		Directives: [] as IMember[]
	};

	for (const directive of directives) {
		if (
			[
				'president',
				'vice_president',
				'secretary',
				'treasurer',
				'board_member',
			].includes(directive.position)
		) {
			positions['Directives'].push(directive);
		}
	}
	return positions;
};

export const DirectivesList: FC<Props> = ({ directives }) => {
	const positions = groupByPosition(directives);
	const { t } = useTranslation('positions');
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
			))}
		</List>
	);
};
