import { useSelector, useDispatch } from 'react-redux';

import classes from './Header.module.css';
import { authActions } from '../store/auth';

const Header = (props) => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>{props.title}</h1>
      {isAuth && (
        <button onClick={logoutHandler}>Logout</button>
      )}
    </header>
  );
};

export default Header;
