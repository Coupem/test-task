import React from 'react';
import { useStyles } from '../styled/defaultPageStyles';

const DefaultPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.defaultText}>Choose what you want, please:)</div>
  );
};

export default DefaultPage;
