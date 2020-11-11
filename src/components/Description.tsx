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

            <p>
                <a href="https://support.google.com/meet/?hl=pt-BR#topic=7306097" target="_blank">
                    Saiba mais
                </a> sobre o Google Meet
            </p>
        </Container>
    );
}

export default Description;