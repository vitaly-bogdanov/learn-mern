import React, { FC } from 'react';
import { UserRoute, HomeRoute } from '../../routes';
import NavBarComponent from '../../components/navBarComponent/NavBarComponent';

const UserLayout: FC = props => {
  
  return (
    <>
      <NavBarComponent color="secondary" routes={[UserRoute, HomeRoute]} />
      <main className="main">
        { props.children }
      </main>
      <footer></footer>
    </>
  );
}

export default UserLayout;