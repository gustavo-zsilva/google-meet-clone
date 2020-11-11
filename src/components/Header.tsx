import React from 'react';

import { Container, MeetText, SettingsIcon, Logo, AppsIcon, FeedbackIcon, HelpIcon, Avatar } from '../styles/components/Header';

const Header: React.FC = () => {
    return (
        <>
            <Container>
                <div>
                    <Logo />
                    <MeetText>Meet</MeetText>
                </div>

                <div>
                    <HelpIcon />
                    <FeedbackIcon />
                    <SettingsIcon />

                    <AppsIcon />
                    <Avatar />
                </div>

            </Container>
        </>
    )
}

export default Header;