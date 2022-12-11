import styled from 'styled-components';

export const Form = styled.form`
  display: grid;
  max-width: 500px;
  margin: 0 auto;
`;

export const InputsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 15px;
`;

export const InputsItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Input = styled.input`
margin-left: 20px;
font-size: 25px;
padding: 5px;
border: 1px solid rgba(33, 33, 33, 0.2);
box-sizing: border-box;
border-radius: 4px;
cursor: pointer;
outline: none;
width: 400px;
&:focus {
border-color: #ff6b08;
transition-property: border-color;
transition-duration: 250ms;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  line-height: 1.3;
  margin-bottom: 10px;
  :first-child {
    margin-top: 10px;
  }
`;

export const Button = styled.button`
  background-color: #ff6b08;
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  width: 200px;
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
