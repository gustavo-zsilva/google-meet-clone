import styled from 'styled-components';

export const Container = styled.div`
    grid-area: HR;

    div {
        border: 1px solid #DADCE0;
        width: fit-content;
        padding: 2rem 1.5rem;
        border-radius: .5rem;
        box-shadow: 0 1px 2px 0 rgba(60,64,67,0.302), 0 2px 6px 2px rgba(60,64,67,0.149);
        margin: 12% 5rem auto 0;
        min-width: 35rem;

        img {
            border-radius: .5rem;
            max-width: 50rem;
            width: 100%;
        }
    }

`;