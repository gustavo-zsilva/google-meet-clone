import styled from 'styled-components';

// HD - Header
// DC - Description
// HR - Hero

export const Container = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 
  'HD HD'
  'DC HR';
`;
