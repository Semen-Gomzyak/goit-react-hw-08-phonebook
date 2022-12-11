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
import { ReactComponent as LogoutIcon } from '../components/svg/exit.svg';

export default function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <Helmet>
        <title>Login Page</title>
      </Helmet>

      <BoxSx>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <InputsList>
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

          <Button type="submit" variant="contained">
            <LogoutIcon width="25px" height="25px" />
            LOGIN
          </Button>
        </Form>
      </BoxSx>
    </div>
  );
}
