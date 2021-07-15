import React from 'react';
import Header from './components/Header';
import { useStyles } from './styled/appStyles';
import Navigation from './components/Navigation';

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainLayout}>
      <Header />
      <div className={classes.navButton}>
        <Navigation />
      </div>
    </div>
  );
};
export default App;
