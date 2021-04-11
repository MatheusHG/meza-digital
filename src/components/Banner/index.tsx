import React from 'react';
import './style.css';

import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';

import img from '../../assets/banner.png';

const Banner: React.FC = () => {
    return(
        <Box className='banner'>
            <CardMedia component='img' image={img} alt='Banner' width='100%' height='100%' />
        </Box>
    );
};

export default Banner;