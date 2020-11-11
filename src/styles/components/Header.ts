import styled from 'styled-components';

import meetLogo from '../../assets/meetLogo.png';
import avatar from '../../assets/avatar.svg';

import { Settings, HelpOutline, Feedback, Apps } from 'styled-icons/material-outlined'

export const Container = styled.div`
  display: flex;

  width: 100%;
  height: 64px;

  text-align: center;
  align-items: center;
  justify-content: space-between;

  padding: 8px;
  position: fixed;
  background-color: #FFF;

  grid-area: HD;
`;

export const Logo = styled.img.attrs({
  src: `${meetLogo}`
})`
  vertical-align: middle;
  margin-left: 1rem;
`;

export const Avatar = styled.img.attrs({
  src: `${avatar}`
})`
  vertical-align: middle;
  width: 45px;
  padding: .3rem;
  border-radius: 50%;
  margin: 0 1rem 0 1rem;
  object-fit: cover;

  transition: background-color .2s;
  cursor: pointer;

  &:hover {
    background-color: var(--light-gray-color);
  }
`;

export const AppsIcon = styled(Apps)`
  color: var(--gray-color);
  width: 40px;
  margin-left: 2rem;
  border-radius: 50%;
  padding: .5rem;
  transition: background-color .2s;
  cursor: pointer;

  &:hover {
    background-color: var(--light-gray-color);
  }
`;

export const SettingsIcon = styled(Settings)`
  color: var(--gray-color);
  width: 40px;
  border-radius: 50%;
  margin-left: 1rem;
  padding: .5rem;
  transition: background-color .2s;
  cursor: pointer;

  &:hover {
    background-color: var(--light-gray-color);
  }

`;

export const FeedbackIcon = styled(Feedback)`
  color: var(--gray-color);
  width: 40px;
  border-radius: 30%;
  margin-left: 1rem;
  padding: .5rem;
  transition: background-color .2s;
  cursor: pointer;

  &:hover {
    background-color: var(--light-gray-color);
  }
`;

export const HelpIcon = styled(HelpOutline)`
  color: var(--gray-color);
  width: 40px;
  border-radius: 50%;
  padding: .5rem;
  transition: background-color .2s;
  cursor: pointer;

  &:hover {
    background-color: var(--light-gray-color);
  }
`;




export const MeetText = styled.span`
  color: var(--gray-color);
  font-size: 22px;
  margin: 5px;
  
`;

