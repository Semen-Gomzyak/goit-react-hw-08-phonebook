import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavigation = styled.div`
  display: flex;
  align-items: center;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.3;
  &.active {
    color: black;
  }
`;

export const Button = styled.button`
  background-color: #ff6b08;
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  width: 170px;
  height: 44px;
  padding: 5px;
  font-size: 20px;
  line-height: 1.3;
  border-radius: 10px;
  margin: 0 auto;
  border-color: #ff6b08;
  color: white;
  :hover {
    background-color: green;
    border-color: green;
  }
`;
