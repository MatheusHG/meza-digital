import React, { useEffect } from 'react';

import Box from '@material-ui/core/Box';

import Aos from 'aos';
import 'aos/dist/aos.css';

import NavBar from '../../components/NavBar/index';
import Banner from '../../components/Banner/index';
import Options from '../../components/Options/index';
import Description from '../../components/Description/index';
import NewsletterTop from '../../components/Newsletter/newsletterTop';
import NewsletterBottom from '../../components/Newsletter/newsletterBottom';
import Footer from '../../components/Footer/index';

import Container from '@material-ui/core/Container';

const Dashboard: React.FC = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
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