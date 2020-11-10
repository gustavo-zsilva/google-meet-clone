import styled from 'styled-components';

import { Settings } from 'styled-icons/material'

export const Container = styled.div`
  display: flex;

  width: 100%;
  height: 64px;

  text-align: center;
  align-items: center;
  justify-content: space-between;
`;

export const SettingsIcon = styled(Settings)`
  color: var(--gray-color);
`;

export const MeetText = styled.span`
  color: var(--gray-color);
  font-size: 22px;
`;

