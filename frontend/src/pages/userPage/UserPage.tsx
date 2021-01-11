import React, { FC } from 'react';
import TRouteProps from '../../abstractions/interfaces/IRouteProps';

interface Props extends TRouteProps {}

const UserPage: FC<Props> = ({ title }) => {
  return (
    <h1>{ title }</h1>
  );
}

export default UserPage;