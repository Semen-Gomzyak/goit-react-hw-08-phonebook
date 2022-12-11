import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { authOperations } from 'redux/auth';
import BoxSx from 'components/Box/Box';
import {
  Form,
  InputsList,
  Input,
  InputsItem,
  Label,
  Button,
} from 'components/FormStyle/FormStyle.styled';
import { ReactComponent as RegistrationIcon } from '../components/svg/how_to_reg.svg';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <Helmet>
        <title>Register Page</title>
      </Helmet>

      <BoxSx>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <InputsList>
            <InputsItem>
              {' '}
              <Label htmlFor="name">
                {' '}
                Name
                <Input
                  variant="outlined"
                  label="Name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </Label>
            </InputsItem>
            <InputsItem>
              <Label htmlFor="email">
                {' '}
                Email
                <Input
                  variant="outlined"
                  label="Email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </Label>
            </InputsItem>
            <InputsItem>
              <Label htmlFor="password">
                {' '}
                Password
                <Input
                  variant="outlined"
                  label="Password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </Label>
            </InputsItem>
          </InputsList>

          <Button variant="contained" type="submit">
          <RegistrationIcon width="25px" height="25px" />
            Register
          </Button>
        </Form>
      </BoxSx>
    </div>
  );
}
