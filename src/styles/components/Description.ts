import styled from 'styled-components';

import { VideoCamera } from 'styled-icons/heroicons-outline';
import { Keyboard } from 'styled-icons/material';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    max-width: 35rem;
    margin: 16% 5rem auto 9.5rem;

    grid-area: DC;

    h1 {
        font-size: 2.8rem;
        font-weight: 500;
        color: #242424;
        line-height: 3.4rem;
        margin-bottom: 1.5rem;
    }

    h3 {
        font-weight: 500;
        color: #707478;
        line-height: 1.5rem;
        max-width: 30rem;
        margin-bottom: 3rem;
    }

    p {
        margin-top: 1.5rem;
        color: var(--gray-color);

        a {
            text-decoration: none;
            color: #00796B;
        }
    }

    @media (max-width: 1500px) {
        margin: 16% 5rem auto 5rem;
    }

    @media (max-width: 1000px) {
        /* justify-content: center; */
        margin: 2rem auto;
        text-align: center;
    }
`;

export const FlexWrapper = styled.div`
    display: flex;

    @media (max-width: 1240px) {
        flex-direction: column;
    }
`;

export const InputWrapper = styled.div`
    padding: 0 .8rem;
    height: 3rem;
    border: 1px solid #DADCE0;
    border-radius: .2rem;
    margin-left: 1.8rem;
    outline-color: #00796B;

    &:hover {
        border: 1px solid #242424;
    }

    @media (max-width: 1240px) {
        margin: 1.5rem 0 0 0;
    }
`;

export const CameraIcon = styled(VideoCamera)`
    color: #FFF;
    width: 22px;

    margin-right: .3rem;
`;

export const KeyboardIcon = styled(Keyboard)`
    color: #757575;
    width: 22px;

    margin-right: .3rem;
`;

export const NewMeetingButton = styled.button`
    padding: .8rem 1rem;
    font-size: 1rem;
    border: none;
    background-color: #00796B;
    border-radius: .2rem;
    color: #FFFFFF;
    letter-spacing: .01rem;
    transition: background-color .2s;
    cursor: pointer;

    &:hover {
        background-color: #0B6B61;
    }
`;

export const EnterMeetingInput = styled.input.attrs({
    placeholder: `Digite um código ou link`
})`
    font-size: 1rem;
    border: none;
    outline: none;

    height: 100%;
`;

export const Line = styled.div`
    background-color: #DADCE0;
    width: 100%;
    height: 1px;
    margin-top: 2rem;
`;
