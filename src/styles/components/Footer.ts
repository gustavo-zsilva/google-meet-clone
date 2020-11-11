import styled from 'styled-components';

export const FooterP = styled.p `
    margin-top: 1.5rem;
    color: var(--gray-color);

    animation: load 1s backwards;

    grid-area: FT;

    margin: -2.5rem auto auto 9.5rem;

    @media (max-width: 1800px) {
        margin: 2rem 9.5rem 0 16%;
    }

    @media (max-width: 1000px) {
        margin: 2rem auto;
    }
`

export const FooterLink = styled.a.attrs({
    href: `https://support.google.com/meet/?hl=pt-BR#topic=7306097`,
    target: `_blank`
})`
    text-decoration: none;
    color: #00796B;
`;

