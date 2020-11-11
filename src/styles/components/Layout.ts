import styled from 'styled-components';

// HD - Header
// DC - Description
// HR - Hero

export const Container = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 64px auto;
  grid-template-areas: 
  'HD HD'
  'DC HR';

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-rows: 64px auto auto;

    grid-template-areas:
    'HD'
    'DC'
    'HR';
  }
`;

