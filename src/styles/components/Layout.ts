import styled from 'styled-components';

// HD - Header
// DC - Description
// HR - Hero
// FT - Footer

export const Container = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 64px auto 20px;
  grid-template-areas: 
  'HD HD'
  'DC HR'
  'FT HR';

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-rows: 64px auto auto;

    grid-template-areas:
    'HD'
    'DC'
    'HR'
    'FT';
  }
`;

