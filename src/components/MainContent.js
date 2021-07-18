import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SchedulerList from './SchedulerList';
import GridList from './GridList';
import ChartList from './ChartList';
import DefaultPage from './DefaultPage';

const MainContent = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/scheduler" component={SchedulerList} />
        <Route path="/chart" component={ChartList} />
        <Route path="/grid" component={GridList} />
        <Route path="/" component={DefaultPage} />
      </Switch>
    </React.Fragment>
  );
};

export default MainContent;
