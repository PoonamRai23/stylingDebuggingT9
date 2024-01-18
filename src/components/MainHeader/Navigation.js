import React, { useContext } from 'react';
import classes from './Navigation.module.css';
import AuthContext from '../store/auth';

const Navigation = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <React.Fragment>
            <li>
              <a href="/">Users</a>
            </li>
            <li>
              <a href="/">Admin</a>
            </li>
            <li>
              <button onClick={ctx.onLogout}>Logout</button>
            </li>
          </React.Fragment>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
