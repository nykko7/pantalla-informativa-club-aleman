import { useEffect, useState } from 'react';
import Logo from '../assets/img/logo.png';
import CoatOfArmsIcon from '../assets/svg/coat-of-arms-vectorial.svg';
import Image from 'next/image';
import * as _ from 'lodash';
import {
	AppBar,
	Box,
	Button,
	Card,
	CardActionArea,
	CardMedia,
	Dialog,
	DialogContent,
	DialogContentText,
	Grid,
	IconButton,
	SvgIcon,
	Toolbar,
	Typography,
} from '@mui/material';
import {
	HistoryEdu,
	Handshake,
	Newspaper,
	Coffee,
	Close as CloseIcon,
} from '@mui/icons-material/';
interface Button {
	title: string;
	icon: any;
	color: string;
}

type ButtonsList = Button[];

const INITIAL_BUTTONS_LIST: ButtonsList = [
	{ title: 'Historia', icon: HistoryEdu, color: '#FFCB63' },
	{ title: 'Socios', icon: Handshake, color: '#F6854F' },
	{ title: 'Noticias', icon: Newspaper, color: '#453F3A' },
	{ title: 'Club', icon: CoatOfArmsIcon, color: '#6A5548' },
	{ title: 'Salón', icon: Coffee, color: '#A8784F' },
];

interface Dialog {
	open: boolean;
	handleClose: () => void;
	activeButton: Button;
}

function FullScreenDialog({ open, handleClose, activeButton }: Dialog) {
	return (
		<Dialog open={open} onClose={handleClose} maxWidth={'lg'}>
			<AppBar
				sx={{ position: 'relative', backgroundColor: activeButton?.color }}
			>
				<Toolbar>
					<IconButton
						edge='start'
						color='inherit'
						onClick={handleClose}
						aria-label='close'
					>
						<CloseIcon />
					</IconButton>
					<Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
						{activeButton?.title}
					</Typography>
				</Toolbar>
			</AppBar>
			<DialogContent>
				<DialogContentText>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat eos
					ipsam minus a qui totam omnis quam libero molestiae accusantium,
					corrupti vero eum distinctio aut autem voluptatem. Quasi, tempore
					veritatis. Quia quis suscipit accusantium non sit in a, quidem
					quibusdam hic dolores, adipisci beatae necessitatibus deserunt
					distinctio! Rem doloremque facere voluptate atque corporis, saepe
					incidunt ut nesciunt velit! In, eveniet. Dicta, alias voluptates
					consequuntur quisquam commodi neque sunt numquam. Vel, alias quibusdam
					architecto obcaecati corporis expedita aut similique? Fuga
					perspiciatis laborum vitae nam cupiditate ducimus quaerat quibusdam
					fugiat dicta atque.
				</DialogContentText>
			</DialogContent>
		</Dialog>
	);
}

export default function Home() {
	const [buttons, setButtons] = useState<ButtonsList>(INITIAL_BUTTONS_LIST);
	const [openDialog, setOpenDialog] = useState(false);
	const [activeButton, setActiveButton] = useState({} as Button);

	const handleClick = (button: Button) => {
		setOpenDialog(true);
		setActiveButton(button);
	};

	return (
		<Grid
			container
			alignItems='start'
			justifyContent='space-evenly'
			flexDirection='column'
			sx={{ height: '100vh' }}
		>
			<Box sx={{ display: 'flex' }}>
				<Image src={Logo} alt='Logo' objectFit='contain' height='500px' />
			</Box>
			<Grid container spacing={2} justifyContent='center'>
				{buttons.map((button, index) => (
					<Grid item key={index} sx={{}}>
						<Card elevation={5} sx={{ backgroundColor: button.color }}>
							<CardActionArea onClick={() => handleClick(button)}>
								<CardMedia
									sx={{
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'end',
										alignItems: 'center',
										height: '150px',
										width: '150px',
									}}
								>
									<SvgIcon
										component={button.icon}
										sx={{
											fontSize: '60px',
											color: 'black',
										}}
									></SvgIcon>

									<Typography
										color='black'
										sx={{
											padding: 1,
											fontSize: '20px',
											fontWeight: 'bold',
											display: 'block',
										}}
									>
										{_.upperCase(button.title)}
									</Typography>
								</CardMedia>
							</CardActionArea>
							<FullScreenDialog
								open={openDialog}
								handleClose={() => setOpenDialog(false)}
								activeButton={activeButton}
							/>
						</Card>
					</Grid>
				))}
			</Grid>
		</Grid>
	);
}
