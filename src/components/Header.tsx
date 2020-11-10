import React from 'react';

import meetLogo from '../assets/meetLogo.png';

import { Container, MeetText, SettingsIcon } from '../styles/components/Header';

const Header: React.FC = () => {
    return (
        <>
            <Container>
                <div>
                    <img src={meetLogo} alt="Meet"/>
                    <MeetText>Meet</MeetText>
                </div>

                <div>
                    <SettingsIcon />
                </div>

            </Container>
        </>
    )
}

export default Header;