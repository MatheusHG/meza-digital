import React from 'react';
import './styles.css';

import Box from '@material-ui/core/Box';

const Description: React.FC = () => {
    return(
        <Box>
            <h1 id="title">SHAMPOOS E DERMOCOSMÉTICOS</h1>
            <h2 id="description">Os shampoos dermocosméticos possuem fórmulas especiais que, além de tratar os fios, 
                fortalecem a saúde do couro cabeludo — a pele sensível onde está a raiz dos cabelos. Eles regulam a 
                oleosidade, hidratam e ajudam a combater a caspa e a queda dos fios.
            </h2>
        </Box>
    );
}

export default Description;