import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { ReactComponent as LogoutIcon } from '../svg/exit.svg';
import { UserText, Button } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <UserText>Welcome, {user.name}</UserText>

      <Button
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
        variant="contained"
      >
        <LogoutIcon width="25px" height="25px" />
        LOGOUT
      </Button>
    </div>
  );
}
