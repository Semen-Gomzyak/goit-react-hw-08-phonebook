import { useAuth } from 'hooks';
import { Link, Button } from './Navigation.styled';
import { ButtonGroup } from '@mui/material';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>
        <Link to="/">Main</Link>
      </Button>
      {isLoggedIn && (
        <Button>
          <Link to="/contacts">Contacts</Link>
        </Button>
      )}
    </ButtonGroup>
  );
};

export default Navigation;
