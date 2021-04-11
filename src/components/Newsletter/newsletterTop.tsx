import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';

import WomanHairbrush from '../../assets/banner2.png';

import StyledLetter from '../UseStyles/newsletterTop';

const Newsletter: React.FC = () => {
    const classes = StyledLetter();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6}>

                    <Paper className={classes.paper}>
                        <Grid container wrap='nowrap' spacing={2}>
                            <h1 style={{fontSize: '23px', color: '#CD8D84', margin: '20px 10px'}}>COMO ESCOLHER O MELHOR SHAMPOO?</h1>
                        </Grid>
                        <Grid container wrap='nowrap' spacing={2}>
                            <h2 style={{fontSize: '18px', color: '#838383', margin: '0 10px 10px', fontWeight: 'lighter', textAlign: 'justify'}}>
                                O cabelo pode ser oleoso, seco, misto ou quimicamente tratado. Cada caso 
                                exige um tipo de shampoo especial. Tão importante quanto levar em conta 
                                as características dos fios é considerar as necessidades da raiz. O ideal é procurar a
                                orientação de um dermatologista para a indicação que <strong>não contém sulfato</strong> e, por
                                isso, tratam o couro cabeludo sem remover a sua hidratação natural. Considere 
                                também produtos com ácido salicílico, que ajuda a regular a descamação
                                piroctona olamina, que evita a proliferação de fundos, e bisabolol, um ativo anti-
                                inflamatório.
                            </h2>
                        </Grid>
                    </Paper>

                    <Paper className={classes.paper}>
                        <Grid container wrap='nowrap' spacing={2}>
                            <h1 style={{fontSize: '23px', color: '#CD8D84', margin: '20px 10px'}}>QUEDA DE CABELO NUNCA MAIS</h1>
                        </Grid>
                        <Grid container wrap='nowrap' spacing={2}>
                            <h2 style={{fontSize: '18px', color: '#838383', margin: '0 10px 10px', fontWeight: 'lighter', textAlign: 'justify'}}>
                                Supreende-se com a quantidade de fios no travesseiro ao acordar, ou
                                que ficam presos no pente ao se arrumar? Os shampoos dermocosméticos
                                antiqueda têm na sua composição ativos como as <strong>vitaminas do complexo B</strong>,
                                essenciais para evitar os cabelos opacos e frágeis. <br />
                                Tratamentos com laser e medicamentos tópicos também podem ajudar a
                                diminuir a queda e estimular o crescimento dos fios. Mas só devem ser usados a
                                partir da orientação de um dermatologista. Lembre-se que a má alimentação e o
                                estresse estão entre as pessíveis causas da queda de cabelo, então procure
                                rever seus hábitos.
                            </h2>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={6}  style={{width: '100%', height: '100%'}}>
                    <Paper className={classes.paper} style={{backgroundColor: '#DE8E85', fontSize: '20px', color: '#FFF', fontWeight: 100}}>
                        <a href='/'>CONHEÇA NOSSOS <strong>SHAMPOOS {'>'}</strong></a>
                    </Paper>
                    <Paper className={classes.paper}  style={{display: 'contents'}}>
                        <CardMedia component='img' image={WomanHairbrush} alt='Woman with hairbrush' width='100%' height='100%' />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Newsletter;

