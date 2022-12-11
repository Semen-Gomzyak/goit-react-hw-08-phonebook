import { AuthNavigation, Link, Button } from './AuthNav.styled';
import { ReactComponent as LogoutIcon } from '../svg/exit.svg';
import { ReactComponent as RegistrationIcon } from '../svg/how_to_reg.svg';

export default function AuthNav() {
  return (
    <AuthNavigation>
      <Button variant="contained">
        <RegistrationIcon width="25px" height="25px" />
        <Link to="/register">Registration</Link>
      </Button>
      <Button variant="contained">
        <LogoutIcon width="25px" height="25px" />
        <Link to="/login">Login</Link>
      </Button>
    </AuthNavigation>
  );
}
