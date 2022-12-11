import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const Link = styled(NavLink)`
  padding: 5px 10px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  &.active {
    color: black;
  }
`;

export const Button = styled.button`
  background-color: #ff6b08;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 130px;
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
