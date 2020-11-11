import React from 'react';

import { Container, NewMeetingButton, EnterMeetingInput, Line, CameraIcon, KeyboardIcon, FlexWrapper, InputWrapper } from '../styles/components/Description';

const Description: React.FC = () => {
    return (
        <Container>
            <h1>
                Videochamadas premium.
                Agora gratuitas para todos.
            </h1>
            <h3>
                Reformulamos o Google Meet, nosso serviço seguro
                para reuniões de negócios. Agora ele é aberto e
                gratuito para todos.
            </h3>

            <FlexWrapper>
                <div>
                    <NewMeetingButton>
                        <CameraIcon />
                        Nova reunião
                    </NewMeetingButton>
                </div>
             
                <InputWrapper>
                    <span>
                        <KeyboardIcon />
                    </span>
                    <EnterMeetingInput />
                </InputWrapper>

            </FlexWrapper>

            <Line />
        </Container>
    );
}

export default Description;