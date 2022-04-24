import { FC } from 'react';

import { Grid } from '@mui/material';
import { SectionCard } from '.';
import { ISection } from '../../interfaces';

interface Props {
	sections: ISection[];
}

export const SectionList: FC<Props> = ({ sections }) => {
	return (
		<Grid container spacing={2} display='flex'>
			{sections.map((section) => {
				return <SectionCard key={section.id} section={section} />;
			})}
		</Grid>
	);
};
