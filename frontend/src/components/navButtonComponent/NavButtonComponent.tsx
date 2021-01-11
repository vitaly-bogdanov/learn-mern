import React, { FC } from 'react';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import classes from './navButtonComponent.module.scss';

interface Props {
  name: string,
  path: string,
  exact: boolean
}

const NavButtonComponent: FC<Props> = ({ name, path, exact }) => (
  <Typography variant="h6">
    <NavLink to={path} exact={exact} className={classes.navLink} activeClassName={classes.activeNavLink}>
      { name }
    </NavLink>
  </Typography>
);

export default NavButtonComponent;