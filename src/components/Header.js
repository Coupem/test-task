import React from 'react';
import { useStyles } from '../styled/headerStyles';

const Header = () => {
  const classes = useStyles();
  return <div className={classes.header}>Header</div>;
};

export default Header;
