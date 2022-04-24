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
		description: 'Historia del Club Alemán',
		title: 'Historia',
		icon: AutoStories,
		color: '#F3D31A',
	},
	{
		id: 'gallery',
		description: '120 Imágenes',
		title: 'Galería',
		icon: PhotoLibrary,
		color: '#349889',
	},
	{
		id: 'managers',
		description: '120 socios',
		title: 'Directivos',
		icon: AccountBox,
		color: '#893B2E',
	},
	{
		id: 'members',
		description: '120 socios',
		title: 'Socios',
		icon: PeopleAlt,
		color: '#893B2E',
	},
	{
		id: 'salon',
		description: 'Imágenes',
		title: 'Salón',
		icon: Coffee,
		color: '#5e7689',
	},
	{
		id: 'club',
		description: 'Imágenes',
		title: 'Club',
		icon: CoatOfArmsIcon,
		color: '#5e7689',
	},
	{
		id: 'turism',
		description: 'Imágenes',
		title: 'Turismo',
		icon: Landscape,
		color: '#A08649',
	},
	{
		id: 'news',
		description: 'Últimas noticias',
		title: 'Noticias',
		icon: Newspaper,
		color: '#18354e',
	},
];
