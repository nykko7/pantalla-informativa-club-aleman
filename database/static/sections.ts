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
		title: 'Historia',
		description: 'Historia del Club Alemán',
		icon: AutoStories,
		color: '#F3D31A',
	},
	{
		id: 'gallery',
		title: 'Galería',
		description: '120 Imágenes',
		icon: PhotoLibrary,
		color: '#349889',
	},
	{
		id: 'managers',
		title: 'Directivos',
		description: '120 socios',
		icon: AccountBox,
		color: '#893B2E',
	},
	{
		id: 'members',
		title: 'Socios',
		description: '120 socios',
		icon: PeopleAlt,
		color: '#893B2E',
	},
	{
		id: 'lounge',
		title: 'Salón',
		description: 'Imágenes',
		icon: Coffee,
		color: '#5e7689',
	},
	{
		id: 'club',
		title: 'Club',
		description: 'Imágenes',
		icon: CoatOfArmsIcon,
		color: '#5e7689',
	},
	{
		id: 'turism',
		title: 'Turismo',
		description: 'Imágenes',
		icon: Landscape,
		color: '#A08649',
	},
	{
		id: 'news',
		title: 'Noticias',
		description: 'Últimas noticias',
		icon: Newspaper,
		color: '#18354e',
	},
];
