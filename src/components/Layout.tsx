import React from 'react';

import Header from './Header';
import Description from './Description';
import Hero from './Hero';
import Footer from './Footer';

import { Container } from '../styles/components/Layout';

const Layout: React.FC = () => {
    return (
        <Container>
            <Header />
            <Description />
            <Footer />
            <Hero />
        </Container>
    );
}

export default Layout;