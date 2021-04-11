import React from 'react';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import NavBar from '../../components/NavBar/index';
import Banner from '../../components/Banner/index';
import Options from '../../components/Options/index';
import Description from '../../components/Description/index';
import NewsletterTop from '../../components/Newsletter/newsletterTop';
import NewsletterBottom from '../../components/Newsletter/newsletterBottom';
import Footer from '../../components/Footer/index';

const Dashboard: React.FC = () => {
    return (
        <Box>
            <NavBar />
            <Banner />
            <Container maxWidth='lg'>
                <Options />
                <Description />
                <NewsletterTop />
                <NewsletterBottom />
            </Container>
            <Footer />
        </Box>
    );
};

export default Dashboard;