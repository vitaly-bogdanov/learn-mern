import RegistrationPage from './pages/registrationPage/RegistrationPage';
import AuthorizationPage from './pages/authorizationPage/AuthorizationPage';
import HomePage from './pages/homePage/HomePage';
import UserPage from './pages/userPage/UserPage';

import GuestLayout from './layouts/guestLayout/GuestLayout';
import UserLayout from './layouts/userLayout/UserLayout';

import TRouteInfo from './abstractions/types/TRouteInfo';

export const HomeRoute: TRouteInfo = {
  name: 'Главная',
  path: '/',
  exact: true,
  Page: HomePage,
  Layout: GuestLayout,
  access: {
    guest: true,
    user: true
  }
}

export const RegistrationRoute: TRouteInfo = {
  name: 'Регистрация',
  path: '/registration',
  exact: false,
  Page: RegistrationPage,
  Layout: GuestLayout,
  access: {
    guest: true,
    user: true
  }
}

export const LoginRoute: TRouteInfo = {
  name: 'Авторизация',
  path: '/authorization',
  exact: false,
  Page: AuthorizationPage,
  Layout: GuestLayout,
  access: {
    guest: true,
    user: true
  }
}

export const UserRoute: TRouteInfo = {
  name: 'User',
  path: '/user',
  exact: false,
  Page: UserPage,
  Layout: UserLayout,
  access: {
    guest: false,
    user: true
  }
}