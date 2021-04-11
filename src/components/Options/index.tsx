import React, { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

import './styles.css';
import './response.css';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';

const Options: React.FC = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <Box className='boxOptions'>
            <Button
                data-aos='zoom-in'
                variant='contained'
                color='secondary'
                className='buttonOption'
                startIcon={<ViewComfyIcon />}
            >
                Quantidade
            </Button>
            <Button
                data-aos='zoom-in'
                variant='contained'
                color='secondary'
                className='buttonOption'
                startIcon={<CompareArrowsIcon />}
            >
                Ordernar
            </Button>
        </Box>
    );
}

export default Options;