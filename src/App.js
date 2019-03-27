import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Grommet } from 'grommet';
import { grommet } from 'grommet/themes';

import './styles/index.scss';
import history from './history';
import MainPage from './components/MainPage';
// import GoogleLogin from './GoogleLogin';
// import ErrorDisplay from './ErrorDisplay';

const App = () => {
  return (
      <Switch>
        <>
          <Route path="/" exact component={MainPage} />
          {/* <Route path="/login" exact component={GoogleLogin} /> */}
          {/* <Route component={ErrorDisplay} /> */}
        </>
      </Switch>
  );
};

export const createApp = () => {
  return (
    <Router history={history}>
      <Grommet theme={grommet} full>
        <App />
      </Grommet>
    </Router>
  );
};