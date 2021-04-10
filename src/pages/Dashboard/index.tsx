import React from 'react';

import Box from '@material-ui/core/Box';

import NavBar from '../../components/NavBar/index';
import Banner from '../../components/Banner/index';


const Dashboard: React.FC = () => {
    return (
        <Box>
            <NavBar />
            <Banner />
        </Box>
    );
};

export default Dashboard;