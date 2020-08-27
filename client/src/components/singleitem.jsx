import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import clsx from 'clsx';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import AddLocationIcon from '@material-ui/icons/AddLocation';
import WorkIcon from '@material-ui/icons/Work';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Collapse from '@material-ui/core/Collapse';


const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    padding: '20px 40px',
    maxWidth: '820px',
    margin: '30px auto'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
   avatar: {
    backgroundColor: '#000000',

  },
}));




export default function CardVacancy(props) {
  
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  
  let area = null;
  let fechaCierre = null;
  let ubicacion = null;  
  let requisitos = null;
  let beneficios = null;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if(props.items.area) {
    area = props.items.area.nombre
  }
  
  if(props.items.fechaCierre){

    fechaCierre = props.items.fechaCierre

  }
  if(props.items.ubicacion){
    ubicacion = props.items.ubicacion.pais
  }
  if(props.items.requisitos){
    requisitos = props.items.requisitoTrabajo
  }
  if(props.items.beneficios){
    beneficios = props.items.beneficios
  }

  return (
    <Card className={classes.root} key="item">
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
           <img src="https://api.hiringroom.com/images/logo_small.png" className="App-logo" alt="logo" />
          </Avatar>
        }
        action={
          <Typography variant='body2'>
            <AddLocationIcon color='action'></AddLocationIcon> {ubicacion}  
          </Typography>
        }

      title= {

        <Typography variant="h4" > {props.items.nombre} </Typography>

      }
        
      subheader= {

        <Typography variant='body2' > 
        Fecha de creacion: { props.items.fechaCreacion } <br/> 
        Fecha de cierre: { props.items.fechaCierre }
        </Typography>
      }
      
      
      />

      <CardContent>
        <Typography color="text" gutterBottom variant="h6">
          <WorkIcon></WorkIcon> {props.items.areaTrabajo}
        </Typography>
        <Typography className={classes.pos} color="text" variant="h5">
          - {area}
        </Typography>
      
      <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        <ExpandMoreIcon />
        </IconButton>
      </CardContent>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Somos: </Typography>
        <Typography>
            salario ofrecido: {props.items.salarioOfrecido}
        </Typography><br />
          <Typography paragraph>
            requisitos: {requisitos}
          </Typography>
          <Typography paragraph>
            beneficios: {beneficios}
          </Typography>
          <Typography>
          </Typography>
        </CardContent>
        <CardActions>
        <Button variant="contained" color='secondary' href="https://localhost:3000/vacantes" fullWidth={true}> Postulate! </Button>
      </CardActions>
      </Collapse>
    </Card>
  );
}