import React from 'react';

import Box from '@material-ui/core/Box';

import NavBar from '../../components/NavBar/index';
import Banner from '../../components/Banner/index';
import Options from '../../components/Options/index';
import Description from '../../components/Description/index';
import Newsletter from '../../components/Newsletter/index';
import Footer from '../../components/Footer/index';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

const Dashboard: React.FC = () => {
    const classes = useStyles();
    return (
        <Box>
            <NavBar />
            <Banner />
            <Container maxWidth="lg">
                <Options />
                <Description />
                <Newsletter />

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                    <Grid container wrap="nowrap" spacing={2}>
                        <h1 style={{fontSize: '23px', color: '#CD8D84', margin: '20px 10px'}}>ANTICASPA</h1>
                    </Grid>
                    <Grid container wrap="nowrap" spacing={2}>
                        <h2 style={{fontSize: '18px', color: '#838383', margin: '0 10px 10px', fontWeight: 'lighter', textAlign: 'justify'}}>
                            Os mais procurados shampoos da categoria dos dermocosméticos são aqueles que têm ação anticaspa. Procure um que possua propriedades 
                            <strong> antimicrobianas</strong>, como o dissulfeto de selênio. E — de novo — que não contenham sulfato, caso contrário seu cabelo 
                            pode ficar ressecado e sem proteção natural. A aplicação do produto deve ser apenas no couro cabeludo, com movimentos de massagem, 
                            deixando agir por alguns minutos. Evite banhos com água muito quente e, ao usar condicionadores e máscaras capilares, cuide para não 
                            aplicá-los na raiz do cabelo — assim, não ficarão resíduos acumulados estimulando a oleosidade.
                        </h2>
                    </Grid>
                    </Paper>
                </Grid>

                
                <Grid item xs={12}  style={{width: '100%', height: '100%'}}>
                    <Paper className={classes.paper} style={{backgroundColor: '#DE8E85', fontSize: '20px', color: '#FFF', fontWeight: 100}}>
                        <a href="https://www.dermaclub.com.br/">Para mais informações sobre o combate à caspa, acesse 
                        o <strong style={{textDecoration: 'underline'}}>Dermaclub</strong></a>
                    </Paper>
                </Grid>
            </Grid>
            
            </Container>
            <Footer />
        </Box>
    );
};

export default Dashboard;