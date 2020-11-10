import React from 'react';

import Header from './Header';

import { Container } from '../styles/components/Layout';

const Layout: React.FC = () => {
    return (
        <Container>
            <Header />
        </Container>
    );
}

export default Layout;