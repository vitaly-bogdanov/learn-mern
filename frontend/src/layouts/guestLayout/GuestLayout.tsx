import React, { FC, Fragment } from 'react';
import {
  HomeRoute, 
  RegistrationRoute,
  LoginRoute
} from '../../routes';
import NavBarComponent from '../../components/navBarComponent/NavBarComponent';


const GuestLayout: FC = props => {
  return (
    <Fragment>
      <NavBarComponent color="primary" routes={[HomeRoute, RegistrationRoute, LoginRoute]} />
      <main className="main">
        { props.children }
      </main>
      <footer>
      </footer>
    </Fragment>
  );
}

export default GuestLayout;