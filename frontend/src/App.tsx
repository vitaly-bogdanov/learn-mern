import React, { FC } from 'react';
import logo from './logo.svg';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import './App.scss';
import * as routes from './routes';

const App: FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {
            Object.values(routes).map((route, index) => (
              <Route key={`${route.name}-${index}`} path={route.path} exact={route.exact}>
                {
                  route.Layout ? (
                    <route.Layout >
                      <route.Page title={route.name} />
                    </route.Layout>
                  ) : (
                    <route.Page title={route.name} />
                  )
                }
              </Route>
            ))
          }
          <Redirect to="/404" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
