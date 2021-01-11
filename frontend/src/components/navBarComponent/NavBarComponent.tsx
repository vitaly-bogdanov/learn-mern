import React, { FC } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TRouteInfo from '../../abstractions/types/TRouteInfo';
import NavButtonComponent from '../navButtonComponent/NavButtonComponent';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});

interface Props {
  color: 'primary' | 'secondary',
  routes: TRouteInfo[], 
}

const NavBarComponent: FC<Props> = ({ routes, color }) => (
  <AppBar color={color}>
    <Toolbar>
      {
        routes.map((route, index) => <NavButtonComponent name={route.name} path={route.path} exact={route.exact} key={`${route.name}-${index}`} />)
      }
    </Toolbar>
  </AppBar>
);

export default NavBarComponent;