import React from 'react';

import Header from './Header';
import Description from './Description';
import Hero from './Hero';

import { Container } from '../styles/components/Layout';

const Layout: React.FC = () => {
    return (
        <Container>
            <Header />
            <Description />
            <Hero />
        </Container>
    );
}

export default Layout;