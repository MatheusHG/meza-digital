import React from 'react';

import Box from '@material-ui/core/Box';

import NavBar from '../../components/NavBar/index';
import Banner from '../../components/Banner/index';
import Options from '../../components/Options/index';
import Description from '../../components/Description/index';
import Newsletter from '../../components/Newsletter/index';

import Container from '@material-ui/core/Container';

const Dashboard: React.FC = () => {
    return (
        <Box>
            <NavBar />
            <Banner />
            <Container maxWidth="lg">
                <Options />
                <Description />
                <Newsletter />
            </Container>
        </Box>
    );
};

export default Dashboard;