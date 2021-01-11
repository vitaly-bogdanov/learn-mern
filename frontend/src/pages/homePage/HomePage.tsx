import React, { FC } from 'react';
import IRouteProps from '../../abstractions/interfaces/IRouteProps';

interface Props extends IRouteProps {}

const HomePage: FC<Props> = ({ title }) => {
  
  return (
    <>
      <h1>{title}</h1>
      <p className="descriptionPage">Просто главная страница</p>
    </>
  );
}

export default HomePage;