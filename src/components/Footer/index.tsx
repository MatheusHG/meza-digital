import React from 'react';
import './styles.css';

import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer: React.FC = () => {
    return(
        <Box className="footer">
            <h1>Desenvolvido com 💙 por 
                <Box component="span" m={1}>Matheus Henrique</Box>
            </h1>
            <Box>
                <Link href="https://www.instagram.com/matheushgo_/" style={{marginRight: '15px'}}>
                    <InstagramIcon color='action' />
                </Link>
                <Link href="https://www.linkedin.com/in/matheushgo">
                    <LinkedInIcon color='action' />
                </Link>
            </Box>
        </Box>
    );
};

export default Footer;