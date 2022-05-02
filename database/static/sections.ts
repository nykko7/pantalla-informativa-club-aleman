import {
	AutoStories,
	Newspaper,
	Coffee,
	AccountBox,
	PeopleAlt,
	PhotoLibrary,
	Landscape,
} from '@mui/icons-material/';

import CoatOfArmsIcon from '../../assets/svg/coat-of-arms-vectorial.svg';
import { ISection } from '../../interfaces';

type SectionList = ISection[];

export const SECTIONS: SectionList = [
	{
		id: 'history',
		icon: AutoStories,
		color: '#FFB336',
	},
	{
		id: 'gallery',
		icon: PhotoLibrary,
		color: '#349889',
	},
	{
		id: 'directives',
		icon: AccountBox,
		color: '#893B2E',
	},
	{
		id: 'members',
		icon: PeopleAlt,
		color: '#893B2E',
	},
	{
		id: 'lounge',
		icon: Coffee,
		color: '#5e7689',
	},
	{
		id: 'club',
		icon: CoatOfArmsIcon,
		color: '#5e7689',
	},
	{
		id: 'turism',
		icon: Landscape,
		color: '#A08649',
	},
	{
		id: 'news',
		icon: Newspaper,
		color: '#18354e',
	},
];
