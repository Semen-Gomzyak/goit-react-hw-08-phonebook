import styled from "styled-components";

export const UserText = styled.span`
    font-weight: 700;
    font-size: 20px;
    line-height: 1.3;
    margin: 0 15px;
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