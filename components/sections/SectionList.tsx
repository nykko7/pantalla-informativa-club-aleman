import { FC } from 'react';

import { Grid } from '@mui/material';
import { SectionCard } from '.';
import { ISection } from '../../interfaces';

interface Props {
	sections: ISection[];
}

export const SectionList: FC<Props> = ({ sections }) => {
	return (
		<Grid
			container
			display='grid'
			columnGap={3}
			rowGap={3}
			gridTemplateColumns='repeat(2, 1fr)'
			height='100%'
		>
			{sections.map((section) => {
				return <SectionCard key={section.id} section={section} />;
			})}
		</Grid>
	);
};
