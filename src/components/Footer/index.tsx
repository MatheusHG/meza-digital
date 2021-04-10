import React from 'react';
import './styles.css';

import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer: React.FC = () => {
    return(
        <div className="footer">
            <h1>Desenvolvido com 💙 por <span>Matheus Henrique</span></h1>
            <div>
                <a href="https://www.instagram.com/matheushgo_/" style={{marginRight: '15px'}}>
                    <InstagramIcon color='action' />
                </a>
                <a href="https://www.linkedin.com/in/matheushgo">
                    <LinkedInIcon color='action' />
                </a>
            </div>
        </div>
    );
};

export default Footer;