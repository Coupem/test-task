import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { useStyles } from './styled/appStyles';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainLayout}>
      <Header />
      <Router>
        <div className={classes.navButton}>
          <Navigation />
        </div>
        <div className={classes.mainContent}>
          <MainContent />
        </div>
      </Router>
    </div>
  );
};
export default App;
