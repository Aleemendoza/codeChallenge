import React,  { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    minWidth: 175,
    maxWidth: 500,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});





export default function CardVacancy(props) {


  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  let area = null;
  let fechaCierre = null;
  let ubicacion = null;  
  let requisitos = null;

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

  return (
    <Card className={classes.root} variant="outlined" key="item">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Area De trabajo : {props.items.areaTrabajo}
        </Typography>
        <Typography variant="h5" component="h2">
          Nombre de la vacante:
           {props.items.nombre}
         </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {area}
        </Typography>
        <Typography variant="body2" component="p">
          {fechaCierre}
          <br />
          {ubicacion}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          salario ofrecido: {props.items.salarioOfrecido}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          requisitos: {props.items.requisitos}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          beneficios: {props.items.beneficios}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://localhost:3000/vacantes" > Ver vacantes </Button>
      </CardActions>
    </Card>
  );
}