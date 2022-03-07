import React from 'react';
import { useHistory } from 'react-router-dom';
import { ButtonNavigation } from '../styled/navigationStyles';

const Navigation = () => {
  const history = useHistory();

  const navToChart = () => {
    history.push('/chart');
  };

  const navToScheduler = () => {
    history.push('/scheduler');
  };

  const navToGrid = () => {
    history.push('/grid');
  };

  const navToGraphql = () => {
    history.push('/graphql');
  };

  return (
    <React.Fragment>
      <ButtonNavigation fullWidth onClick={navToScheduler}>
        Scheduler
      </ButtonNavigation>
      <ButtonNavigation fullWidth onClick={navToChart}>
        Chart
      </ButtonNavigation>
      <ButtonNavigation fullWidth onClick={navToGrid}>
        Grid
      </ButtonNavigation>
      <ButtonNavigation fullWidth onClick={navToGraphql}>
        Graphql
      </ButtonNavigation>
    </React.Fragment>
  );
};

export default Navigation;
