import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useTranslation } from 'next-export-i18n';

import image from '../../assets/img/unknown_person.jpeg'


export default function RecipeReviewCard({
  first_name, 
  last_name, 
  second_surname,
  position,
  direction,
  phone,
  email,
}) {
	const { t } = useTranslation();
  return (
    <Card sx={{ maxWidth: 600, height: '100%', ml: 10 }}>
      <Box sx={{  display: 'flex', alignItems: 'center', m: 2  }}>
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
          <Typography variant="h6" color="text.secondary" sx={{ml: 2}}>
          {t(`positions.${position}.name`)}
          </Typography>
        </Box>
      <CardMedia
        component="img"
        height="400"
        image={image.src}
        alt="Paella dish"
        />
      <CardContent>
        <Typography variant="body1" color="text.secondary">
        {t(`ui.name`)}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {`${first_name} ${last_name} ${second_surname}`}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{mt: 2}}>
        {t(`ui.direction`)}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {direction}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{mt: 2}}>
        {t(`ui.phone`)}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {phone}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{mt: 2}}>
        {t(`ui.email`)}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {email}
        </Typography>
      </CardContent>
    </Card>
  );
}
