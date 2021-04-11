import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import useStyles from '../UseStyles/newsletterBottom';

const newsletterBottom: React.FC = () => {
    const classes = useStyles();
    return(
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                <Grid container wrap='nowrap' spacing={2}>
                    <h1 style={{fontSize: '23px', color: '#CD8D84', margin: '20px 10px'}}>ANTICASPA</h1>
                </Grid>
                <Grid container wrap='nowrap' spacing={2}>
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

            
            <Grid 
                data-aos='fade-right'
                item xs={12}  style={{width: '100%', height: '100%'}}>
                <Paper className={classes.paper} style={{backgroundColor: '#DE8E85', fontSize: '20px', color: '#FFF', fontWeight: 100}}>
                    <a href='https://www.dermaclub.com.br/'>Para mais informações sobre o combate à caspa, acesse 
                    o <strong style={{textDecoration: 'underline'}}>Dermaclub</strong></a>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default newsletterBottom;