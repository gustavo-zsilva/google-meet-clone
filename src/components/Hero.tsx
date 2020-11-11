import React from 'react';

import { Container } from '../styles/components/Hero';

const Hero: React.FC = () => {
    return (
        <Container>
            <div>
                <img
                    src="https://www.gstatic.com/meet/google_meet_marketing_ongoing_meeting_grid_427cbb32d746b1d0133b898b50115e96.jpg"
                    alt="Meeting"
                />
            </div>
        </Container>
    )
}

export default Hero;